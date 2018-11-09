const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playlistSchema = new Schema({
  owner: {
    type: ObjectId,
    ref: 'User'
  },
  title: String,
  link: String,
  styles: [{
    type: String,
    enum: ['Electro', 'Pop', 'Jazz']
  }],
});

const Playlist = mongoose.model('Playlist', playlistSchema);

module.exports = Playlist;