const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    //alphaNumeric
    //will not accept special characters
    minlength: [8, 'Password needs at least 8 alphanumeric characters!'],
    maxlength: [12, 'Password must have no more than 12 alphanumeric characters!'],
    match: [/[a-zA-Z0-9]+/, 'Password can only contain alphanumeric characters!'],
  },
  bugs: [
    {
      type: String,
      trim: true,
    },
  ],
  //possible
  //location slot {}
  //pronoun slot {}
});

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
