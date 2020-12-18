module.exports = (client, DataTypes) => {
    const User = client.define(
        'User',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            tableName: 'users',
            timestamps: false
        }
    );

    const O_Auth = require('./O_Auth')(client, DataTypes);

    User.hasMany(O_Auth, {
        foreignKey: 'user_id',
        onDelete: 'cascade'
    });

    return User;
};
