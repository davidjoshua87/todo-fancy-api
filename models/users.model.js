const mongoose   = require('mongoose');
const Schema     = mongoose.Schema;

const userSchema = new Schema({
  id_fb: String,
  name: String,
  username: String,
  email: String,
  password: String
});

module.exports = mongoose.model('User', userSchema);
