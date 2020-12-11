const { BAD_REQUEST, FORBIDDEN } = require('../configs/error-codes');

module.exports = {
    NOT_VALID_ID: {
        message: 'User ID must be grater than 0',
        code: BAD_REQUEST
    },

    NOT_VALID_BODY: {
        message: 'Request is not valid',
        code: FORBIDDEN
    },

    WRONG_EMAIL_OR_PASS: {
        message: 'Email or password is not valid',
        code: BAD_REQUEST
    }
};
