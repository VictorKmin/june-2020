const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');
const mongoose = require('mongoose');

require('dotenv').config();
const db = require('./dataBase').getInstance();
const cronRun = require('./cron-jobs');

const app = express();

db.setModels();
// eslint-disable-next-line no-use-before-define
_connectDB();

app.use(fileUpload());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(process.cwd(), 'public')));

const { userRouter, authRouter, userMongoRouter } = require('./routes');
const winston = require('./logger/winston');

const logger = winston('APP');

app.use('/auth', authRouter);
app.use('/users', userRouter);
app.use('/users-mongo', userMongoRouter);

// eslint-disable-next-line no-unused-vars
app.use('*', (err, req, res, next) => {
    logger.error(err.message);
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
    // cronRun();
});

function _connectDB() {
    mongoose.connect('mongodb://localhost:27017/car_shop', { useNewUrlParser: true });
    const connect = mongoose.connection;

    connect.on('error', (error) => {
        console.log(error);
    });
}
