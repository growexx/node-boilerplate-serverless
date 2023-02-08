
/**
 * @openapi
 * /auth/signup:
 *  post:
 *      tags: [Authentication]
 *      summary: user user sign up
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/userSignUp'
 *      responses:
 *          200:
 *              description: Success
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/successUserRegister'
 *          400:
 *              description: Validation Failed
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/errorBadRequest'
 *          422:
 *              description: User Duplicate
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/errorUserRegister'
 *          500:
 *              description: Internal Server Error
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/unexpectedError'
 */

/**
 * @openapi
 * /auth/verify-account:
 *  post:
 *      tags: [Authentication]
 *      summary: User Name Verification
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/userVerify'
 *      responses:
 *          200:
 *              description: Success
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/successVerifyUser'
 *          400:
 *              description: Validation Failed
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/errorBadRequest'
 *          500:
 *              description: Internal Server Error
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/unexpectedError'
 */

/**
 * @openapi
 * /auth/resend-otp:
 *  post:
 *      tags: [Authentication]
 *      summary: To resend OTP in case of email is not recieved in the first attempt
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/resendOTP'
 *      responses:
 *          200:
 *              description: Success
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/successResendOTP'
 *          400:
 *              description: Validation Failed
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/errorBadRequest'
 *          500:
 *              description: Internal Server Error
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/unexpectedError'
 */
