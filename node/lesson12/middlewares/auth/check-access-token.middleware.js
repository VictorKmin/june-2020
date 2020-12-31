const jwt = require('jsonwebtoken');

const { ACCESS_TOKEN_SRCREN } = require('../../configs/config');
const { ErrorHandler, errors } = require('../../error');
const { oAuthService } = require('../../services');

module.exports = async (req, res, next) => {
    try {
        const access_token = req.get('Authorization');

        if (!access_token) {
            throw new ErrorHandler(errors.NOT_VALID_TOKEN.message, errors.NOT_VALID_TOKEN.code);
        }

        jwt.verify(access_token, ACCESS_TOKEN_SRCREN, (err) => {
            if (err) {
                throw new ErrorHandler(errors.NOT_VALID_TOKEN.message, errors.NOT_VALID_TOKEN.code);
            }
        });

        const userWithToken = await oAuthService.getTokenWithUserByParams({ access_token });

        if (!userWithToken) {
            throw new ErrorHandler(errors.NOT_VALID_TOKEN.message, errors.NOT_VALID_TOKEN.code);
        }

        if (userWithToken.id !== +req.params.userId) {
            throw new Error('PERMOISSION');
        }

        req.user = userWithToken;

        next();
    } catch (e) {
        next(e);
    }
};
