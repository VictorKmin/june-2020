const userService = require('../services/user.service');

module.exports = {
    createUser: (req, res) => {
        try {
            userService.insertUser(req.body);

            res.status(201).json('User cerated');
        } catch (e) {
            res.json(e.message);
        }
    },

    getUserById: async (req, res) => {
        try {
            const { userId } = req.params;

            if (userId < 0) {
                throw new Error('User ID must be grater than 0');
            }

            const user = await userService.findUserById(userId);

            res.json(user);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    getUsers: async (req, res) => {
        try {
            const users = await userService.findUsers();

            res.json(users);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    deleteUser: (req, res) => {
        res.json('user deleted');
    }
};
