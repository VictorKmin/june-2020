const express = require('express');
const path = require('path');
const { Op } = require('sequelize');

require('dotenv').config();
const db = require('./dataBase').getInstance();

const app = express();

db.setModels();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(process.cwd(), 'views')));

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
// eslint-disable-next-line no-unused-vars
app.use('*', (err, req, res, next) => {
    res
        .status(err.code || 500)
        .json({
            message: err.message,
            ok: false
        });
});

// такбагатомісцякрадутьтіпробілиеее

app.listen(5000, () => {
    // eslint-disable-next-line no-console
    console.log('App listen 5000');
});
