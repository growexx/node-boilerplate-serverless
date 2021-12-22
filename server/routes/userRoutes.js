const router = require('express').Router();
const AuthMiddleWare = require('../middleware/auth');
const ACLMiddleWare = require('../middleware/acl');
const UploadMiddleWare = require('../middleware/upload');
const userProfileController = require('../services/userProfile/userProfileController');
const DbMiddleware = require('../middleware/serverless');


router.get('/details', DbMiddleware, AuthMiddleWare, ACLMiddleWare, userProfileController.getUserDetails);
router.put('/picture', DbMiddleware, AuthMiddleWare, ACLMiddleWare, UploadMiddleWare.single('photo'), userProfileController.updateProfilePicture);
router.delete('/picture', DbMiddleware, AuthMiddleWare, ACLMiddleWare, userProfileController.deleteProfilePicture);
router.put('/password', DbMiddleware, AuthMiddleWare, userProfileController.changePassword);

module.exports = router;
