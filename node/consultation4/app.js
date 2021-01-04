const express = require('express');
const path = require('path');
const { Op } = require('sequelize');
const http = require('http');
const socket = require('socket.io');

const { findUsers, deletUserById } = require('./services/user.service');

require('dotenv').config();
const db = require('./dataBase').getInstance();
const Sentry = require('./error/sentry');

const app = express();

const server = http.createServer(app);
const io = socket.listen(server);

db.setModels();

io.on('connection', (currentSocket) => {
    console.log('cc');
    currentSocket.on('users.get.all', async () => {
        const allUsers = await findUsers();

        io.emit('users.all', allUsers);
    });

    currentSocket.on('users.delete', async (user) => {
        await deletUserById(user.userId);
        const allUsers = await findUsers();

        io.emit('users.all', allUsers);
    });
    // console.log(socket);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(process.cwd(), 'views')));
app.use(Sentry.Handlers.requestHandler());

const { userRouter, authRouter } = require('./routes');

app.use('/auth', authRouter);
app.use('/users', userRouter);

app.get('/:user_id', async (req, res) => {
    const User = db.getModel('User');
    const User_2_Car = db.getModel('User_2_Car');
    const Car = db.getModel('Car');

    const { user_id } = req.params;

    let user = await User.findByPk(user_id);

    user = user && user.dataValues;

    const relations = await User_2_Car.findAll({
        where: {
            user_id
        }
    });

    const car_ids = relations.map((relation) => relation && relation.car_id);

    const cars = await Car.findAll({
        where: {
            id: {
                [Op.in]: car_ids
            }
        }
    });

    Object.assign(user, { cars });

    res.json(user);
});

app.use(Sentry.Handlers.errorHandler());

// eslint-disable-next-line no-unused-vars
app.use('*', (err, req, res, next) => {
    Sentry.captureException(err);

    res
        .status(err.code || 500)
        .json({
            message: err.message,
            ok: false
        });
});

// такбагатомісцякрадутьтіпробілиеее

server.listen(5000, () => {
    // eslint-disable-next-line no-console
    console.log('App listen 5000');
});
