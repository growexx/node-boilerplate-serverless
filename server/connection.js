const mongoose = require('mongoose');

const dbUrl = 'mongodb+srv://ajay-growexxer:Ajaygrowexx181@boilerplate.rlme1.mongodb.net/boilerplate?retryWrites=true&w=majority'
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    bufferCommands: false,
    bufferMaxEntries: 0,
    useFindAndModify: false,
    useCreateIndex: true,
    poolSize: 10
};

let Connection = {
  connectToDB: connectToDB,
  checkConnection: checkConnection,
}

async function connectToDB () {

  await mongoose.connect(dbUrl, options).then(() => {
    CONSOLE_LOGGER.info('MongoDB is connected');
  }).catch((err) => {
    CONSOLE_LOGGER.info('DB Connection err',err);
    CONSOLE_LOGGER.info('MongoDB connection unsuccessful, retry after 0.5 seconds.');
    setTimeout(connectToDB, 500);
  });
  return mongoose.connection.readyState;
};

async function checkConnection () {

  let db = await mongoose.connection.readyState;
  if (db !== 1) {
    db = await connectToDB();
  }
  return db;
}


module.exports = Connection;