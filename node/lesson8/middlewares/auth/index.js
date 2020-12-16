module.exports = {
    isPasswordOk: require('./check-password-hash.middleware'),
    checkAccessToken: require('./check-access-token.middleware')
};
