const express = require('express');
const router = express.Router();

const Playlist = require('../models/playlist');
const User = require('../models/user');

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

router.get('/playlist/:id', (req, res, next) => {
    const id = req.params.id;
  // const id = req.session.playlist._id;
  Playlist.findById(id, (error, playlist)) 
    .then((response) => {
    res.status(200).json(response)
  }).catch((error) => {
    next(error);
  });
})

router.post('/playlist/:id/favourites', (req, res, next) => {
  const id = req.params.id;
  const userId = req.session.currentUser._id;

  User.findById(userId)
    .then((user)=>{
      user.favorites.push(id);
      user.save()
        .then((response)=>{
          res.status(200).json(response)
        })
        .catch((error)=>{
          next(error);
        });
    })
    .catch((error)=>{
      next(error);
    });
    
})
module.exports = router

