const UserModel = require('../dataBase/mongo-models/User');
const PaymentModel = require('../dataBase/mongo-models/Payment');

module.exports = {
    createUser: (userToCreate) => new UserModel(userToCreate).save(),

    deleteUser: (id) => UserModel.findByIdAndDelete(id),

    findUserByParams: (params) => UserModel.findOne(params),

    findUsers: () => UserModel.find({}).limit(1),

    createPayment: (payment) => new PaymentModel(payment).save(),

    getPaymentsWithUser: () => PaymentModel.aggregate([
        {
            $lookup: {
                from: 'users',
                localField: 'user_id',
                foreignField: '_id',
                as: 'whoPay'
            }
        },
        {
            $project: {
                value: 1,
                currency: 1,
                user: {
                    $arrayElemAt: [
                        '$whoPay',
                        0
                    ]
                }
            }
        },
        {
            $project: {
                value: 1,
                currency: 1,
                user: {
                    _id: 1,
                    age: 1,
                    name: 1
                }
            }
        }
    ])
};
