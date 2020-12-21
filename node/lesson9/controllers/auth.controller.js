const { oAuthService } = require('../services');
const tokinizer = require('../helpers/tokinizer');

module.exports = {
    login: async (req, res, next) => {
        try {
            const { id } = req.user;
            const token_pair = tokinizer();

            await oAuthService.createTokenPair({ user_id: id, ...token_pair });

            res.json(token_pair);
        } catch (e) {
            next(e);
        }
    },
};
