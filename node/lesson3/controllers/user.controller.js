const userService = require('../services/user.service');

module.exports = {
  createUser: (req, res) => {
    try {
      console.log('********************************');
      console.log(req.login);
      console.log('********************************');
      userService.insertUser(req.body);

      res.status(201).json('User cerated');
    } catch (e) {
      res.json(e.message);
    }
  },

  getUserById: (req, res) => {
    try {
      const { userId } = req.params;

      if (userId < 0) {
        throw new Error('User ID must be grater than 0');
      }

      const user = userService.findUserById(userId);

      if (!user) {
        throw new Error('User not found');
      }

      res.json(user);
    } catch (e) {
      res.status(400).json(e.message);
    }
  },

  getUsers: (req, res) => {
    try {
      const x = req.query;

      console.log(x);

      // const user = userService.findUserById(userId);
      //
      // if (!user) {
      //   throw new Error('User not found');
      // }

      res.json('xxxx');
    } catch (e) {
      res.status(400).json(e.message);
    }
  },

  deleteUser: (req, res) => {
    res.json('user deleted');
  }
};
