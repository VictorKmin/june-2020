const { BAD_REQUEST, FORBIDDEN, UNAUTHORIZED } = require('../configs/error-codes');

module.exports = {
    NOT_VALID_ID: {
        message: 'User ID must be grater than 0',
        code: BAD_REQUEST
    },

    WRONG_EMAIL_OR_PASS: {
        message: 'Email or password is not valid',
        code: BAD_REQUEST
    },

    TOO_BIG_FILE: {
        message: 'Too big file',
        code: BAD_REQUEST
    },

    WRONG_FILE_EXTENSION: {
        message: 'Wrong file extension',
        code: BAD_REQUEST
    },

    JUST_ONE_PHOTO: {
        message: 'You can upload just one photo as avatar',
        code: BAD_REQUEST
    },

    // UNAUTHORIZED

    NOT_VALID_TOKEN: {
        message: 'Not valid token',
        code: UNAUTHORIZED
    },

    // FORBIDDEN

    NOT_VALID_BODY: {
        message: 'Request is not valid',
        code: FORBIDDEN
    },
};
