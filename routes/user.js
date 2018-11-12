const express = require('express');
const router = express.Router();

const User = require('../models/user');

router.get('/profile', isLoggedIn, (req, res) => {
  const userId = req.params.id;
  User.findById(userId)
    .then(user => {
      return res.json(user);
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
