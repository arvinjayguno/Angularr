const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  email: String,
  password: String
});

const Accounts = mongoose.model('accounts', accountSchema);

module.exports = { Accounts };