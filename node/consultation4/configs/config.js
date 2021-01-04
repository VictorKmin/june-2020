module.exports = {
    ACCESS_TOKEN_SRCREN: process.env.ACCESS_TOKEN_SERCER || 'SECRET',
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET || 'R_SECRET',
    ROOT_EMAIL: process.env.ROOT_EMAIL || 'gmail@mailr.ru',
    ROOT_EMAIL_PASSWORD: process.env.ROOT_EMAIL_PASSWORD || '123456',
    ROOT_EMAIL_SERVICE: process.env.ROOT_EMAIL_SERVICE || 'gmail',
    SENTRY_DSN: process.env.SENTRY_DSN || '',
};
