const { userService } = require('../services');

module.exports = () => {
    console.log('START');
    return userService.findUsers();
};
