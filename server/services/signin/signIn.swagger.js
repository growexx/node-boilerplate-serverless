/**
 * @openapi
 * /auth/signin:
 *  post:
 *      tags: [Authentication]
 *      summary: Log in via email or username
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/userSignIn'
 *      responses:
 *          200:
 *              description: You have successfully logged in.
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/successLogin'
 *          400:
 *              description: Validation Failed
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/unauthorisedAccessLogin'
 *          401:
 *              description: User Duplicate
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/unauthorisedAccess'
 *          500:
 *              description: Internal Server Error
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/unexpectedError'
 */
