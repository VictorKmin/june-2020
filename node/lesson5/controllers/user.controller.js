const userService = require('../services/user.service');
const { ErrorHandler, errors } = require('../error');

module.exports = {
    createUser: (req, res) => {
        try {
            userService.insertUser(req.body);

            res.status(201).json('User cerated');
        } catch (e) {
            res.json(e.message);
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
