const express = require('express');
const router = express.Router();

const User = require('../models/user');

// Edit your profile

router.get('/edit/:id', (req, res, next) => {
  const id = req.session.currentUser._id;
  User.findById(id)
    .then((user) => {
      res.render('profile/edit', { user: user });

    })
    .catch(error => {
      return res.json(error);
    } );
});

router.post('/profile/create', (req, res, next) => {
    User.findById(userId)({
      description: req.body.description,
      email: req.body.email,
      styles: [req.body.styles]
    }).then((response) => {
      res.status(200).json(response)
    }).catch((error) => {
      next(error);
    })

})

module.exports = router;
