const express = require('express');
const router = express.Router();

const Playlist = require('../models/playlist');

// Edit your playlist

router.get('/', (req, res, next) => {
  Playlist.find().populate('playlist')
  .then((allThePlaylists) => {
    res.json(allThePlaylists);
  })
  .catch(err => {
    res.json(err);
  })
})

router.post('/create', (req, res, next) => {
  const id = req.session.currentUser._id;
  console.log('hola');
  Playlist.create({
    owner: id,
    title: req.body.title,
    link: req.body.link,
    styles: [req.body.styles]
  }).then((response) => {
    res.status(200).json(response)
  }).catch((error) => {
    next(error);
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
