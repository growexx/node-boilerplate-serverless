/**
 * @name Server Configuration
 */

const compression = require('compression');
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const swaggerRoutes = require('./services/swaggerRoutes');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const bodyParser = require('body-parser');
const cors = require('cors');
const methodOverride = require('method-override');
const i18n = require('i18n');
const morgan = require('morgan');
const helmet = require('helmet');

// Global Variables
global.DB_CONNECTION = require('mongoose');
global.CONSOLE_LOGGER = require('./util/logger');
global.CONSTANTS = require('./util/constants');
global.MESSAGES = require('./locales/en.json');
global.MOMENT = require('moment');
global._ = require('lodash');

const mongoHost = `${process.env.DB_HOST}/${process.env.DB_NAME}`;
const mongoCredetials = process.env.DB_USERNAME ?
    `${process.env.DB_USERNAME}:${encodeURIComponent(process.env.DB_PASSWORD)}@` : '';
const dbUrl = `mongodb://${mongoCredetials}${mongoHost}`;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    bufferCommands: false,
    bufferMaxEntries: 0,
    useFindAndModify: false,
    useCreateIndex: true,
    poolSize: 10
};
const connectWithRetry = () => {
    CONSOLE_LOGGER.info('MongoDB connection with retry');
    DB_CONNECTION.connect(dbUrl, options).then(() => {
        CONSOLE_LOGGER.info('MongoDB is connected');
    }).catch((err) => {
        CONSOLE_LOGGER.info(err);
        CONSOLE_LOGGER.info('MongoDB connection unsuccessful, retry after 0.5 seconds.');
        setTimeout(connectWithRetry, 500);
    });
};
connectWithRetry();

if (process.env.LOCAL === 'true') {
    app.use(express.static('../jsdocs/jsdocs'));
    app.use(
        '/auth/coverage',
        express.static(`${__dirname}/../coverage/lcov-report`)
    );
}

// Configure i18n for multilingual
i18n.configure({
    locales: ['en'],
    directory: `${__dirname}/locales`,
    extension: '.json',
    prefix: '',
    logDebugFn (msg) {
        if (process.env.LOCAL === 'true') {
            CONSOLE_LOGGER.debug(`i18n::${CONSTANTS.LOG_LEVEL}`, msg);
        }
    }
});

app.use(compression());
app.use(helmet());
app.use(i18n.init);
app.use(cookieParser());

app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb', extended: true }));

app.use(cors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    exposedHeaders: ['x-auth-token']
}));

app.use(morgan('dev'));
app.use(methodOverride());
if (process.env.NODE_ENV !== 'production') {
    app.use('/', swaggerRoutes);
}
// Landing Page
app.get('/', (req, res) => {
    res.send({
        status: 'ok',
        date: MOMENT()
    });
});
app.use('/auth', authRoutes);
app.use('/user', userRoutes);

module.exports = app;
