const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const saltRounds = 10;

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
});

UserSchema.methods = {

  matchPassword: function (password) {
      return bcrypt.compare(password, this.password);
  }
};

UserSchema.pre('save', function (next) {
  if (this.isModified('password')) {
      bcrypt.genSalt(saltRounds, (err, salt) => {
          bcrypt.hash(this.password, salt, (err, hash) => {
              if (err) { next(err); return }
              this.password = hash;
              next();
          });
      });
      return;
  }
  next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
