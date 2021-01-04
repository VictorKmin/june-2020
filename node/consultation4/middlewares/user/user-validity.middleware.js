const { ErrorHandler } = require('../../error');
const { BAD_REQUEST } = require('../../configs/error-codes');
const { userValidator } = require('../../vilidators');

module.exports = (req, res, next) => {
    try {
        console.log('HELLO WORLD');

        const { error } = userValidator.newUserValidator.validate(req.body);

        if (error) {
            console.log('New users', req.body);
            throw new ErrorHandler(error.details[0].message, BAD_REQUEST);
        }

        next();
    } catch (e) {
        next(e);
    }
};
