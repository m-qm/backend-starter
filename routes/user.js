const express = require('express');
const router = express.Router();

const User = require('../models/user');

// Edit your profile

router.get('/edit/:id', middlewares.notifications, (req, res, next) => {
  const id = req.session.currentUser._id;
  User.findById(id)
    .then((user) => {
      res.render('profile/edit', { user: user });
    })
    .catch(next);
});

router.post('/me/edit', middlewares.requireUser, middlewares.requireEditProfile, (req, res, next) => {
  const userinfo = req.body;
  const id = req.session.currentUser._id;

  User.findByIdAndUpdate(id, userinfo)
    .then(() => {
      res.redirect('/profile');
    })
    .catch(next);
});
module.exports = router;
