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

router.delete('/:id', (req, res, next) => {
  const id = req.params.id;

  Playlist.findByIdAndDelete(id)
    .then((result) => {
      res.status(200).json(result)
      console.log('Deleted Successfully')
    })
    .catch(error => {
      console.log('error', error);
      next(error);
    });
});

router.put('/playlist/edit', (req, res, next) => {
  const id = req.session.playlist._id;
  const playlist = req.body;

  Playlist.findByIdAndUpdate(id, {
    description: req.body.description,
    email: req.body.email,
    styles: [req.body.styles]
  }) 
  .then((response) => {
    res.status(200).json(response)
  }).catch((error) => {
    next(error);
  })
});

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    

    Playlist.findById(id) 
      .then((response) => {
        res.status(200).json(response)
        })
      .catch((error) => {
        next(error);
      })
  });

router.get('/search', (req, res, next) => {
  const searchValue = req.query.name;
  Playlist.find({ 'name': { $regex: `^${searchValue}.*$`, $options: 'i' } })
    .then(playlist => {
      if (!playlist) {
        return res.status(404).json({
          error: 'Not found'
        });
      }
      return res.status(200).json(playlist);
    })
    .catch(next);
});


module.exports = router

