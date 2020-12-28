module.exports = (client, DataTypes) => {
    const User_2_Car = client.define(
        'User_2_Car',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                foreignKey: true
            },
            car_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                foreignKey: true
            }
        },
        {
            tableName: 'users_2_car',
            timestamps: false
        }
    );

    return User_2_Car;
};
