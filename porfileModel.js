const mongoose = require('mongoose');
const ProfileSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  date: { type: Date, default: Date.now() },
});
module.exports = mongoose.model('profileModel', ProfileSchema);
