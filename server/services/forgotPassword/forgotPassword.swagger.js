/**
 * @openapi
 * /auth/forgot-password:
 *  post:
 *      tags: [Authentication]
 *      summary: Forgot Password
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/userForgotPassword'
 *      responses:
 *          200:
 *              description: Success
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/successForgotPassword'
 *          400:
 *              description: Validation Failed
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/errorForgotPassword'
 *          500:
 *              description: Internal Server Error
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/unexpectedError'
 */

/**
 * @openapi
 * /auth/verify-token:
 *  post:
 *      tags: [Authentication]
 *      summary: verify Reset Password Token
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/verifyToken'
 *      responses:
 *          200:
 *              description: Success
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/successVerifyToken'
 *          400:
 *              description: Validation Failed
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/errorVerifyToken'
 *          500:
 *              description: Internal Server Error
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/unexpectedError'
 *
 */

/**
 * @openapi
 * /auth/reset-password:
 *  post:
 *      tags: [Authentication]
 *      summary: Change Password
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/userResetPassword'
 *      responses:
 *          200:
 *              description: Success
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/successResetPassword'
 *          400:
 *              description: Validation Failed
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/passwordInvalid'
 *          500:
 *              description: Internal Server Error
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/unexpectedError'
 *
 */
