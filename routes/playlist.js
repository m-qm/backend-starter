const express = require('express');
const router = express.Router();

const Playlist = require('../models/playlist');

// Render playlist

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


module.exports = router;
