const { Router } = require('express');
const { authController } = require('../controllers');
const { authMiddlewares } = require('../middlewares');

const authRouter = Router();

authRouter.post('/', authMiddlewares.isPasswordOk, authController.login);

module.exports = authRouter;
