const { userService } = require('../services');

module.exports = async () => {
    console.log('START');
    const user = await userService.findUsers();
    console.log(user);
};
