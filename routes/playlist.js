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

router.post('/delete', (req, res, next) => {
  const idUser = res.session.currentUser._id;

  const id = req.params.id;
  console.log(req.params.id);
  console.log('user', idUser);
  Playlist.findByIdAndDelete(id)
    .then(() => {
      console.log('Deleted Successfully')
    })
    .catch(error => {
      console.log('error', error);
      next(error);
    });
});

router.get('/playlist/edit', (req, res, next) => {
  const id = req.session.currentUser._id;
  const playlist = req.body;

  Playlist.findById(id)
    .then((user) => {
      res.render('playlist/edit', { user: user });
    })
    .catch(next);
});

router.post('/me/edit', (req, res, next) => {
  const userinfo = req.body;
  const id = req.session.currentUser._id;

  User.findByIdAndUpdate(id, userinfo)
    .then(() => {
      res.redirect('/profile');
    })
    .catch(next);
});


router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  const playlist = req.body;
  Playlist.findById(id, playlist)
    .then(playlist => {
      res.render('playlist/playlistinfo', { playlist: playlist });
    })
    .catch(error => {
      console.log('error', error);
      next(error);
    });
});
module.exports = router;
