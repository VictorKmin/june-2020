const { compare } = require('../../helpers/password.helper');
const { findUserByParams } = require('../../services/user.service');

module.exports = async (req, res, next) => {
    try {
        const { password, email } = req.body;

        const user = await findUserByParams({ email });

        if (!user) {
            throw new Error('W E O P');
        }

        await compare(password, user.password);

        console.log('_________________________');
        console.log(user);
        console.log('_________________________');

        req.user = user;

        next();
    } catch (e) {
        next(e);
    }
};
