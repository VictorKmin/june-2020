const express = require('express');
const path = require('path');
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
