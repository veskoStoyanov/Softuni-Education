const mongoose = require('mongoose');
const encryption = require('../util/encryption');

const userSchema = new mongoose.Schema({
    username: { type: mongoose.Schema.Types.String, required: true, unique: true },
    hashedPass: { type: mongoose.Schema.Types.String, required: true },
    amount: { type: mongoose.Schema.Types.Number, require : true, default: 0 },
    expenses: [{type: mongoose.Schema.Types.ObjectId, ref:'Expense'}],
    salt: { type: mongoose.Schema.Types.String, required: true },
});

userSchema.method({
    authenticate: function (password) {
        return encryption.generateHashedPassword(this.salt, password) === this.hashedPass;
    }
});

const User = mongoose.model('User', userSchema);



module.exports = User;
