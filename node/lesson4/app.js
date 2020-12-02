const express = require('express');
const path = require('path');
const db = require('./dataBase').getInstance();

const app = express();

db.setModels();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(process.cwd(), 'views')));

const { userRouter } = require('./routes');

app.use('/users', userRouter);

// такбагатомісцякрадутьтіпробілиеее

app.listen(5000, () => {
    // eslint-disable-next-line no-console
    console.log('App listen 5000');
});
