const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    // scope tells us what we want to look up
    // google has a list of scopes that are written up already for Oauth process
    passport.authenticate('google', {
      scope: ['profile', 'email'],
      prompt: 'select_account'
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/surveys');
    }
  );

  app.get('/api/logout', (req, res) => {
    // takes cookie and it kills the ID that is in there
    // says you are not that user anymore
    req.logout();
    // proves no longer signed in
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
