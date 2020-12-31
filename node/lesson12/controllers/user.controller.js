const fs = require('fs-extra').promises;
const path = require('path');
const uuid = require('uuid').v1();

const { transactionInstance } = require('../dataBase').getInstance();
const { WELCOME } = require('../constants/email-actions.enum');
const { ErrorHandler, errors } = require('../error');
const { hash } = require('../helpers/password.helper');
const queryBuilder = require('../helpers/user.query-builder');
const { emailService, userService } = require('../services');

module.exports = {
    createUser: async (req, res, next) => {
        const transaction = await transactionInstance();
        try {
            const {
                avatar,
                body: { password, email, name }
            } = req;
            const hashedPassword = await hash(password);

            Object.assign(req.body, { password: hashedPassword });

            const createUser = await userService.insertUser(req.body, transaction);

            if (avatar) {
                const pathWithoutPublic = path.join('user', `${createUser.id}`, 'photos');
                const photoDir = path.join(process.cwd(), 'public', pathWithoutPublic);
                const fileExtension = avatar.name.split('.').pop();
                const photoName = `${uuid}.${fileExtension}`;
                const finalPhotoPath = path.join(pathWithoutPublic, photoName);

                await fs.mkdir(photoDir, { recursive: true });
                await avatar.mv(path.join(photoDir, photoName));

                await userService.updateUserById(createUser.id, { avatar: finalPhotoPath }, transaction);
            }

            await emailService.sendMail(email, WELCOME, { userName: name });
            await transaction.commit();
            res.status(201).json('User cerated');
        } catch (e) {
            await transaction.rollback();
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
            const where = queryBuilder(req.query);
            const users = await userService.findUsers(where);

            res.json(users);
        } catch (e) {
            next(e);
        }
    },

    deleteUser: (req, res) => {
        res.json('user deleted');
    }
};
