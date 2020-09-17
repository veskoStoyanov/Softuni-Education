const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const userSchema = new Schema({

    email: {
        type: String,
		lowercase: true,
        unique: true,
        trim: true,
		required: true,
    },

    password: {
        type: String,
        require: true
    },

    active: {
        type: Boolean,
        required: true,
        default: false
    }
});

userSchema.pre('save', async function (next) {
	if (this.isModified('password')) {
		const salt = await bcrypt.genSalt(saltRounds);
		this.password = await bcrypt.hash(this.password, salt);
		return;
	}
	next();
});

userSchema.methods.matchPassword = async function (password) {
	return bcrypt.compare(password, this.password);
};

module.exports = new Model('User', userSchema);