// const mysql2 = require('mysql2');
//
// const connection = mysql2.createConnection({
//     user: 'user',
//     password: 'user',
//     database: 'auto_shop',
//     host: 'localhost'
// });
//
// module.exports = connection.promise();

const fs = require('fs');
const path = require('path');
const { Sequelize, DataTypes } = require('sequelize');

module.exports = (() => {
    let instance;

    const initConnection = () => {
        const client = new Sequelize('auto_shop', 'user', 'user', {
            host: 'localhost',
            dialect: 'mysql'
        });

        const models = {};
        const modelsPath = path.join(process.cwd(), 'dataBase', 'models');

        const getModels = () => {
            fs.readdir(modelsPath, (err, files) => {
                files.forEach((file) => {
                    const [model] = file.split('.');
                    // eslint-disable-next-line import/no-dynamic-require
                    const modelFile = require(path.join(modelsPath, model));
                    models[model] = modelFile(client, DataTypes);
                });
            });
        };

        return {
            setModels: () => getModels(),
            getModel: (modelName) => models[modelName]
        };
    };

    return {
        getInstance: () => {
            if (!instance) {
                instance = initConnection();
            }

            return instance;
        }
    };
})();
