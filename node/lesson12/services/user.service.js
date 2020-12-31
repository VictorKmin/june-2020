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

    findUsers: (where) => {
        const UserModel = db.getModel('User');

        // console.log(UserModel);

        return UserModel.findAll({ where });
    },

    insertUser: (user, transaction) => {
        const UserModel = db.getModel('User');

        return UserModel.create(user, { transaction });
    },

    updateUserById: (id, user, transaction) => {
        const UserModel = db.getModel('User');

        return UserModel.update(user, {
            where: { id },
            returning: true,
            plain: true,
            transaction
        });
    },

    findUserById: (userId) => {
        const UserModel = db.getModel('User');
        return UserModel.findByPk(userId);
    },

    findUserByParams: async (findObj) => {
        const UserModel = db.getModel('User');

        const user = await UserModel.findOne({
            where: findObj
        });

        return user && user.dataValues;
    }

};
