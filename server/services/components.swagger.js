/**
 * @openapi
 * components:
 *      securitySchemes:
 *          bearerAuth:
 *              type: apiKey
 *              in: header
 *              bearerFormat: JWT
 *      security:
 *          - bearerAuth: []
 *      errorProperties:
 *          type: object
 *          properties:
 *              status:
 *                  type: number
 *                  description: Error status Code
 *              message:
 *                  type: string
 *                  description: Status Message
 *
 *      schemas:
 *
 *          userSignUp:
 *              type: object
 *              required:
 *                  - email
 *                  - password
 *              properties:
 *                  email:
 *                      type: string
 *                      description: User Email Id
 *                  password:
 *                      type: string
 *                      description: User Password
 *              example:
 *                  email:  developer@mailinator.com
 *                  password: 8776f108e247ab1e2b323042c049c266407c81fbad41bde1e8dfc1bb66fd267e
 *
 *          agencySignUp:
 *              allOf:
 *                  - $ref: '#/components/schemas/userSignUp'
 *                  - type: object
 *                    required:
 *                      - token
 *                    properties:
 *                      token:
 *                          type: string
 *                          description: User Token
 *                    example:
 *                      token: 5f523e4a7e416a76f64ea920
 *
 *          errorBadRequest:
 *              allOf:
 *                  - $ref: '#/components/errorProperties'
 *              example:
 *                  status: 0
 *                  message: Request is invalid
 *
 *          errorUserRegister:
 *              allOf:
 *                  - $ref: '#/components/errorProperties'
 *              example:
 *                  status: 0
 *                  message: This user is already registered with us.
 *
 *          unexpectedError:
 *              allOf:
 *                  - $ref: '#/components/errorProperties'
 *              example:
 *                  status: 0
 *                  message: Something went wrong. please try again.
 *
 *          successUserRegister:
 *              allOf:
 *                  - $ref: '#/components/errorProperties'
 *              example:
 *                  status: 1
 *                  message: User registration successful
 *
 *          successAgencyrRegister:
 *              allOf:
 *                  - $ref: '#/components/errorProperties'
 *              example:
 *                  status: 1
 *                  message: Success
 *
 *          successAgencyruserEmail:
 *              allOf:
 *                  - $ref: '#/components/errorProperties'
 *                  - type: object
 *                    properties:
 *                      data:
 *                          type: string
 *                          description: User data
 *                    example:
 *                      status: 1
 *                      message: success
 *                      data: test@example.com
 *
 *          userVerify:
 *              type: object
 *              required:
 *                  - email
 *                  - otp
 *              properties:
 *                  email:
 *                      allOf:
 *                          - $ref: '#/components/schemas/userSignUp/properties/email'
 *                  otp:
 *                      type: number
 *                      description: One time Password
 *              example:
 *                  email:  developer@mailinator.com
 *                  otp: 123456
 *
 *          successVerifyUser:
 *              allOf:
 *                  - $ref: '#/components/errorProperties'
 *              example:
 *                  status : 1
 *                  message: Email is verified successfully
 *
 *          resendOTP:
 *              type: object
 *              required:
 *                  - email
 *              properties:
 *                  email:
 *                      allOf:
 *                          - $ref: '#/components/schemas/userSignUp/properties/email'
 *              example:
 *                  email: developer@mailinator.com
 *
 *          successResendOTP:
 *              allOf:
 *                  - ref: '#/components/errorProperties'
 *              example:
 *                  status: 1
 *                  message: Email resend successful
 *
 *          userSignIn:
 *              allOf:
 *                  - $ref: '#/components/schemas/userSignUp'
 *              example:
 *                  email: researcher@mailinator.com
 *                  password: researcher
 *
 *          successLogin:
 *              type: object
 *              properties:
 *                  status:
 *                      type: boolean
 *                      description: Status
 *                  data:
 *                      type: object
 *                      description: user details
 *                  message:
 *                      $ref: '#/components/errorProperties/properties/message'
 *              example:
 *                  status: true
 *                  data:
 *                      firstName: Sam
 *                      lastName: Jones
 *                      username: researcher@mailinator.com
 *                      role: 1
 *                      token: TOKEN
 *                  message: User successfully logged in
 *
 *          unauthorisedAccessLogin:
 *              allOf:
 *                  - $ref: '#/components/errorProperties'
 *              example:
 *                  status: 0
 *                  message: Invalid user credentials
 *
 *          unauthorisedAccess:
 *              allOf:
 *                  - $ref: '#/components/errorProperties'
 *              example:
 *                  status: 0
 *                  message: You are not authorized to access this resource
 *
 *          userForgotPassword:
 *              type: object
 *              required:
 *                  - email
 *              properties:
 *                  email:
 *                      allOf:
 *                          - $ref: '#/components/schemas/userSignUp/properties/email'
 *              example:
 *                  email: test231@mailinator.com
 *
 *          userResetPassword:
 *              type: object
 *              required:
 *                  - token
 *                  - password
 *              properties:
 *                  token:
 *                      type: string
 *                      description: User Token
 *                  asswor:
 *                      type: string
 *                      description : encrypted password
 *              example:
 *                  token: 4hoR8EAXYEbT'
 *                  asswor: SHA256 encripted password
 *
 *          passwordInvalid:
 *              allOf:
 *                  - $ref: '#/components/errorProperties'
 *              example:
 *                  status: 0
 *                  message: Please enter password.
 *
 *          errorForgotPassword:
 *              allOf:
 *                  - $ref: '#/components/errorProperties'
 *              example:
 *                  status: 0
 *                  message: Please enter email address
 *
 *          successForgotPassword:
 *              allOf:
 *                  - $ref: '#/components/errorProperties'
 *              example:
 *                  status: 1
 *                  message: An email has been sent. Please follow instrcutions on it.
 *
 *          successVerifyToken:
 *              allOf:
 *                  - $ref: '#/components/errorProperties'
 *              example:
 *                  status: 1
 *                  message: Link validated successfully.
 *
 *          errorVerifyToken:
 *              allOf:
 *                  - $ref: '#/components/errorProperties'
 *              example:
 *                  status: 0
 *                  message: Link has expired, kindly reset password again
 *
 *          successResetPassword:
 *              allOf:
 *                  - $ref: '#/components/errorProperties'
 *              example:
 *                  status: 1
 *                  message: Password updated successfully
 *
 *          verifyToken:
 *              type: object
 *              required:
 *                  - token
 *              properties:
 *                  token:
 *                      allOf:
 *                          - $ref: '#/components/schemas/userResetPassword/properties/token'
 *              example:
 *                  token: 4hoR8EAXYEbT
 *
 *          validationError:
 *              allOf:
 *                  - $ref: '#/components/errorProperties'
 *              example:
 *                  status: 0
 *                  message: Request is invalid
 *
 *          successUserDetails:
 *              allOf:
 *                  - $ref: '#/components/schemas/successLogin'
 *              example:
 *                  status: true
 *                  data:
 *                      firstName: Sam
 *                      lastName: Jones
 *                      username: researcher@mailinator.com
 *                      role: 1
 *                      token: TOKEN
 *                  message: Success
 *
 *          successUploadProfilePicture:
 *              allOf:
 *                  - $ref: '#/components/errorProperties'
 *                  - type: object
 *                    properties:
 *                      data:
 *                          type: object
 *                          description: profile picture link of the user
 *                    example:
 *                      status: 1
 *                      data:
 *                          profilePicture: s3url
 *                      message: Success
 *
 *          successDeleteProfilePicture:
 *              allOf:
 *                  - $ref: '#/components/errorProperties'
 *              example:
 *                  status: 1
 *                  message: Success
 *
 *          changePassword:
 *              type: object
 *              properties:
 *                  oldPassword:
 *                      type: string
 *                      description: User's Old Password
 *                  newPassword:
 *                      type: string
 *                      description: User's New Password
 *              example:
 *                  oldPassword: OLD PASSWORD SHA256
 *                  newPassword: NEW PASSWORD SHA256
 *
 *          successChangePassword:
 *              type: object
 *              properties:
 *                  status:
 *                      type: boolean
 *                      description: Status Flag
 *                  message:
 *                      $ref: '#/components/schemas/successLogin/properties/message'
 *              example:
 *                  status: true
 *                  message: CHANGE_PASSWORD_SUCCESS
 *
 */
