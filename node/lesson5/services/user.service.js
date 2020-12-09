const db = require('../dataBase').getInstance();

module.exports = {
    // findUsers: () => db.query('SELECT * FROM users'),
    //
    // insertUser: (user) => {
    //   return db.query(`INSERT INTO users (email) VALUE (${user.email})`);
    // },
    //
    // findUserById: () => {
    //   // dataBase[userId]
    // }

    findUsers: () => {
        const UserModel = db.getModel('User');

        // console.log(UserModel);

        return UserModel.findAll();
    },

    insertUser: (user) => {
        const UserModel = db.getModel('User');

        return UserModel.create(user);
    },

    findUserById: (userId) => {
        const UserModel = db.getModel('User');
        return UserModel.findByPk(userId);
    }

};
