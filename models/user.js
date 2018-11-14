const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const userSchema = new Schema({
  username: String,
  password: String,
  description: String,
  email: String,
  styles: [{
    type: String,
    enum: ['Electro', 'Pop', 'Jazz']
  }],
  favorites: [{
    type: ObjectId,
    ref: 'Playlist'
  }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;