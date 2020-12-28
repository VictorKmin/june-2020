const cron = require('node-cron');

const calculateStatistic = require('./calculate-shop-info.js');

module.exports = () => {
    cron.schedule('*/10 * * * * *', async () => {
        console.log('ITERATION START');
        await calculateStatistic();
        console.log('ITERATION FINISH');
    });

//     cron.schedule('0 0 * * *', async () => {
//         console.log('ITERATION START');
//         await calculateStatistic();
//         console.log('ITERATION FINISH');
//     });
};
