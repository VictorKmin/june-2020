const { Schema, model } = require('mongoose');

const tokenSchema = {
    access_token: {
        type: String,
        required: true
    },
    refresh_token: {
        type: String,
        required: true
    }
};

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: false,
        default: 15
    },
    tokens: [tokenSchema],
    comment: {
        type: Schema.Types.Mixed
    }
});

module.exports = model('user', UserSchema);
