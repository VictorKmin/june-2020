const { Router } = require('express');
const { userController } = require('../controllers');
const { authMiddlewares, userMiddlewares } = require('../middlewares');

const userRouter = Router();

userRouter.post('/', userMiddlewares.checkUserValydyty, userController.createUser);

userRouter.get('/', userController.getUsers);
userRouter.get('/:userId', userController.getUserById);

userRouter.delete('/:userId', authMiddlewares.checkAccessToken, userController.deleteUser);

module.exports = userRouter;
