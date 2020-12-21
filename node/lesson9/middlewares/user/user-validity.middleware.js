const { ErrorHandler } = require('../../error');
const { BAD_REQUEST } = require('../../configs/error-codes');
const { userValidator } = require('../../vilidators');

module.exports = (req, res, next) => {
    try {
        const { error } = userValidator.newUserValidator.validate(req.body);

        if (error) {
            throw new ErrorHandler(error.details[0].message, BAD_REQUEST);
        }

        next();
    } catch (e) {
        next(e);
    }
};
