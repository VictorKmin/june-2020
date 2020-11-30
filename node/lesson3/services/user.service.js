const dataBase = require('../dataBase/users');

module.exports = {
  findUsers: () => dataBase,

  insertUser: (user) => {
    dataBase.push(user);
  },

  findUserById: (userId) => dataBase[userId]
};
