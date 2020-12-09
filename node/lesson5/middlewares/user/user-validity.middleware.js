const { ErrorHandler, errors: { NOT_VALID_BODY } } = require('../../error');

module.exports = (req, res, next) => {
    try {
        const user = req.body;
        const isLogged = false;

        if (!user.email || !user.password) {
            throw new ErrorHandler(NOT_VALID_BODY.message, NOT_VALID_BODY.code);
        }

        req.login = isLogged;
        next();
    } catch (e) {
        next(e);
    }
};
