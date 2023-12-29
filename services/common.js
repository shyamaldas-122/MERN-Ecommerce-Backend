const passport = require('passport');

exports.isAuth = (req, res, done) => {
  return passport.authenticate('jwt');
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies['jwt'];
  }
  //TODO : this is temporary token for testing without cookie
  token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OGVkNGQ0M2E5OGViNWRiYWEwZWU1MiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzAzODU5NDEyfQ.eiKsVDO0xOSXevEn075CA3De1Tc3KPKrKlRbd2m1OyM"
//   token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OGVkYjI1NGEzZGE2MTEyY2IyNWE5ZiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzAzODYxMDI5fQ.71U3z873bvFGGFz5b8TKOrjYWjtDPdCfwMN3w2xuz0k"
  return token;
};