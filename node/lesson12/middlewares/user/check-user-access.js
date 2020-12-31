const { ErrorHandler } = require('../../error');
const { FORBIDDEN } = require('../../configs/error-codes');
// USER ADMIN
module.exports = (who_have_access = []) => (req, res, next) => {
    try {
        const { role } = req.user;

        if (!who_have_access.length) {
            return next();
        }

        if (!who_have_access.includes(role)) {
            throw new ErrorHandler('ACCESS_DINED', FORBIDDEN);
        }

        next();
    } catch (e) {
        next(e);
    }
};
