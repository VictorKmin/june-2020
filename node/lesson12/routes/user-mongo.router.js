const { Router } = require('express');
const {
    deleteUser, createUser, findUserByParams, createPayment, getPaymentsWithUser
} = require('../services/user-mongo.service');

const userRouter = Router();

userRouter.post('/', async (req, res) => {
    const user = req.body;
    const newVar = await createUser(user);

    res.json(newVar);
});
userRouter.post('/payment', async (req, res) => {
    const payment = req.body;
    const newVar = await createPayment(payment);

    res.json(newVar);
});

userRouter.delete('/:userId', async (req, res) => {
    const { userId } = req.params;
    const newVar = await deleteUser(userId);

    res.json(newVar);
});

userRouter.get('/payments', async (req, res) => {
    const newVar = await getPaymentsWithUser();

    res.json(newVar);
});

module.exports = userRouter;
