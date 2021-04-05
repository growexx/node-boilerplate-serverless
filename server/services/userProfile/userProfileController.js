
const UserProfileService = require('./userProfileService');
const Utils = require('../../util/utilFunctions');

/**
 * Class represents controller for user Basic Profile.
 */
class UserProfileController {

    /**
     * @desc This function is being used to get user details
     * @author Growexx
     * @since 01/03/2021
     * @param {Object} req Request
     * @param {Object} req.body RequestBody
     * @param {function} res Response
     */
    static async getUserDetails (req, res) {
        const data = await UserProfileService.getUserDetails(res.locals.user);
        Utils.sendResponse(null, data, res, res.__('SUCCESS'));
    }

    /**
     * @desc This function is being used to update user profile picture
     * @author Growexx
     * @since 01/03/2021
     * @param {Object} req Request
     * @param {Object} req.body RequestBody
     * @param {Object} req.body.email email
     * @param {Object} req.body.password password
     * @param {function} res Response
     */
    static async updateProfilePicture (req, res) {
        try {
            const data = await UserProfileService.updateProfilePicture(req, res.locals.user);
            Utils.sendResponse(null, data, res, res.__('SUCCESS'));
        } catch (error) {
            Utils.sendResponse(error, null, res, error.message);
        }
    }

    /**
     * @desc This function is being used to delete user profile picture
     * @author Growexx
     * @since 01/03/2021
     * @param {Object} req Request
     * @param {Object} req.body RequestBody
     * @param {function} res Response
     */
    static async deleteProfilePicture (req, res) {
        const data = await UserProfileService.deleteProfilePicture(res.locals.user);
        Utils.sendResponse(null, data, res, res.__('PHOTO_DELETE_SUCCESS'));
    }
}

module.exports = UserProfileController;
