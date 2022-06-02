const router = require('express').Router();
const AuthMiddleWare = require('../middleware/auth');
const ACLMiddleWare = require('../middleware/acl');
const UploadMiddleWare = require('../middleware/upload');
const userProfileController = require('../services/userProfile/userProfileController');
const DbMiddleware = require('../middleware/serverless');
const pushNotificationController = require('../services/pushNotification/pushNotificationController');


router.get('/details', DbMiddleware, AuthMiddleWare, ACLMiddleWare, userProfileController.getUserDetails);
router.put('/picture',
    DbMiddleware,
    AuthMiddleWare,
    ACLMiddleWare,
    UploadMiddleWare.single('photo'),
    userProfileController.updateProfilePicture);
router.delete('/picture', DbMiddleware, AuthMiddleWare, ACLMiddleWare, userProfileController.deleteProfilePicture);
router.put('/password', DbMiddleware, AuthMiddleWare, userProfileController.changePassword);


// Android Push Notification
router.post(
    '/individual-push-notification-for-android',
    AuthMiddleWare,
    ACLMiddleWare,
    pushNotificationController.postIndividualPushNotificationForAndroid);

// Web Push Notification
router.post(
    '/individual-push-notification-for-web',
    AuthMiddleWare, ACLMiddleWare,
    pushNotificationController.postIndividualPushNotificationForWeb);
router.post('/create-notification', AuthMiddleWare, ACLMiddleWare, pushNotificationController.postCreateNotification);
router.put('/update-push-notification-token', AuthMiddleWare, ACLMiddleWare, pushNotificationController.updatePushNotificationToken);
router.post('/send-batch-notification', AuthMiddleWare, ACLMiddleWare, pushNotificationController.postSendBatchNotification);
router.post(
    '/validate-push-notification-token',
    AuthMiddleWare, ACLMiddleWare,
    pushNotificationController.postValidatePushNotificationToken);


module.exports = router;
