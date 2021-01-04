const { WELCOME } = require('../constants/email-actions.enum');
const { emailService, userService } = require('../services');
const { ErrorHandler, errors } = require('../error');
const { hash } = require('../helpers/password.helper');

module.exports = {
    createUser: async (req, res, next) => {
        try {
            console.log(22222);
            const { password, email, name } = req.body;
            // const hashedPassword = await hash(password);
            //
            // Object.assign(req.body, { password: hashedPassword });

            throw new ErrorHandler('TEST');
            //
            // await userService.insertUser(req.body);
            //
            // await emailService.sendMail(email, WELCOME, { userName: name });
            res.status(201).json('User cerated');
        } catch (e) {
          next(e);
        }
    },

    getUserById: async (req, res, next) => {
        try {
            const { userId } = req.params;

            if (userId < 0) {
                throw new ErrorHandler(errors.NOT_VALID_ID.message, errors.NOT_VALID_ID.code);
            }

            const user = await userService.findUserById(userId);

            res.json(user);
        } catch (e) {
            next(e);
        }
    },

    getUsers: async (req, res, next) => {
        try {
            const users = await userService.findUsers();

            res.json(users);
        } catch (e) {
            next(e);
        }
    },

    deleteUser: (req, res) => {
        res.json('user deleted');
    }
};
