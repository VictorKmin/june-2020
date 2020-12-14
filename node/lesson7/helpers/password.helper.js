const bcrypt = require('bcrypt');

const { errors: { WRONG_EMAIL_OR_PASS }, ErrorHandler } = require('../error');

module.exports = {
    hash: (password) => bcrypt.hash(password, 10),
    compare: async (password, hash) => {
        const isPasswordEquals = await bcrypt.compare(password, hash);

        if (!isPasswordEquals) {
            throw new ErrorHandler(WRONG_EMAIL_OR_PASS.message, WRONG_EMAIL_OR_PASS.code);
        }
    }
};
