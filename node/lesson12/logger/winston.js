const winston = require('winston');
const path = require('path');

module.exports = (label) => {
    const consoleOptions = {
        level: 'info',
        format: winston.format.combine(
            winston.format.colorize({ colors: { info: 'yellow', error: 'red' }, all: true })
        )
    };

    const fileOptions = {
        level: 'error',
        filename: path.join(process.cwd(), 'lesson12', 'logs', 'log.txt'),
        format: winston.format.combine(
            winston.format.json({ space: 2 }),
        )
    };

    const logger = winston.createLogger({
        format: winston.format.combine(
            winston.format.timestamp({
                format: 'YYYY-MM-DD HH:mm:ss',
            }),
            winston.format.label({ label }),
        ),
        transports: [
            new winston.transports.Console(consoleOptions),
            new winston.transports.File(fileOptions),
        ]
    });

    return {
        info: (error) => logger.info(error),
        error: (err) => logger.error(JSON.stringify(err)),
        warn: (text) => logger.warn(text),
    };
};
