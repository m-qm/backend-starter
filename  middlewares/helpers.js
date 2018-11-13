const isLoggedIn = () => (req, res, next) => {
  if (req.session.currentUser) {
    next();
  } else {
    const err = new Error('Not Authorized');
    err.status = 403;
    err.statusMessage = 'Not Authorized';
    next(err);
  }
};

module.exports = {
  isLoggedIn
};