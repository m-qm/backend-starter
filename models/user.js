const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  description: String,
  email: String,
  styles: [{
    type: String,
    enum: ['Electro', 'Pop', 'Jazz']
}],
}
});

const User = mongoose.model('User', userSchema);

module.exports = User;