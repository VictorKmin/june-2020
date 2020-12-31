const { Router } = require('express');
const { userController } = require('../controllers');
const { authMiddlewares, fileMiddlewares, userMiddlewares } = require('../middlewares');
const checkAccess = require('../middlewares/user/check-user-access');

const userRouter = Router();

userRouter.post('/',
    userMiddlewares.checkUserValydyty,
    fileMiddlewares.checkFile,
    fileMiddlewares.checkAvatar,
    userController.createUser);

userRouter.get('/', userController.getUsers);
userRouter.get('/:userId', checkAccess(['ADMIN']), userController.getUserById);
userRouter.get('/:userId', checkAccess(['ADMIN', 'MANAGER']), userController.getUserById);
userRouter.delete('/:userId', authMiddlewares.checkAccessToken, userController.deleteUser);

module.exports = userRouter;
