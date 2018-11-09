const express = require('express');
const router = express.Router();

const User = require('../models/playlist');

// Edit your playlist

router.get('/playlists', (req, res, next) => {
  Playlist.find().populate('playlists')
  .then(allThePlaylists){
    res.json(allThePlaylists)
  })
  .catch(err => {
    res.json(err);
  })
}):

router.post('/playlists', (req, res, next) => {
  const id = req.session.currentUser._id;
  Playlist.create({
    owner: {type: Schema.Types.ObjectId, ref: 'User'}
    title: req.body.title,
    link: req.body.link,
    styles: []
  })

})

// router.get('/play/edit', middlewares.notifications, (req, res, next) => {
//   const id = req.session.currentUser._id;
//   User.findById(id)
//     .then((user) => {
//       res.render('profile/edit', { user: user });
//     })
//     .catch(next);
// });

// router.post('/me/edit', middlewares.requireUser, middlewares.requireEditProfile, (req, res, next) => {
//   const userinfo = req.body;
//   const id = req.session.currentUser._id;

//   User.findByIdAndUpdate(id, userinfo)
//     .then(() => {
//       res.redirect('/profile');
//     })
//     .catch(next);
// });
module.exports = router;
