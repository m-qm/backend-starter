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
    .catch(next);
});

module.exports = router;
