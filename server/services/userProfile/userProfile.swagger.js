/**
 * @openapi
 *  /user/details:
 *      get:
 *          security:
 *              allOf:
 *                  - $ref: '#/components/security'
 *          tags: [User]
 *          summary: User Details
 *          responses:
 *              200:
 *                  description: User Details get
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/successUserDetails'
 *              400:
 *                  description: Invalid Request
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/validationError'
 *              401:
 *                  description: Unauthorized Access
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/unauthorisedAccess'
 *              500:
 *                  description: Something went wrong. Try again
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/unexpectedError'
 *
 */

 /**
 * @openapi
 *  /user/picture:
 *      put:
 *          security:
 *              allOf:
 *                  - $ref: '#/components/security'
 *          tags: [User]
 *          summary: Upload Profile Picture
 *          parameters:
 *              - in: formData
 *                name: photo
 *                required: true
 *                schema:
 *                  type: file
 *          responses:
 *              200:
 *                  description: Profile picture uploaded file
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/successUploadProfilePicture'
 *              400:
 *                  description: Invalid Request
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/validationError'
 *              401:
 *                  description: Unauthorised Access
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/unauthorisedAccess'
 *              500:
 *                  description: internal server error
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/unexpectedError'
  *      delete:
 *          security:
 *              allOf:
 *                  - $ref: '#/components/security'
 *          tags: [User]
 *          summary: Delete Profile Picture
 *          responses:
 *              200:
 *                  description: Profile picture delete file
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/successDeleteProfilePicture'
 *              400:
 *                  description: Invalid Request
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/validationError'
 *              401:
 *                  description: Unauthorised Access
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/unauthorisedAccess'
 *              500:
 *                  description: internal server error
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/unexpectedError'
 *
 *
 *
 *
 */

 /**
 * @openapi
 *  /user/password:
 *  put:
 *      security:
 *          allOf:
 *              - $ref: '#/components/security'
 *      tags: [User]
 *      summary: Change user password
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/changePassword'
 *      responses:
 *          200:
 *              description: Change user password
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/successChangePassword'
 *          400:
 *              description: Invalid Request
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/validationError'
 *          401:
 *              description: Unauthorised Access
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/unauthorisedAccess'
 *          500:
 *              description: internal server error
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/unexpectedError'
 */
