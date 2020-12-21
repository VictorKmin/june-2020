const mailAction = require('../constants/email-actions.enum');

module.exports = {
    [mailAction.WELCOME]: {
        subject: 'WELOCME ON BOARD',
        templateName: 'welcome'
    },

    [mailAction.USER_BLOCKED]: {
        subject: 'Your account is blocked',
        templateName: 'user-blocked'
    }
};
