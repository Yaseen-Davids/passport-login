const passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy;
const { GetUser } = require("../repositories/users");
const bcrypt = require('bcryptjs');

module.exports = (passport) => {
  passport.use(new LocalStrategy(
    (username, password, done) => {
      GetUser(username).then((user) => {
        if (!user) {
          return done(null, false, { message: 'User does not exist' });
        }
        // Match Password
        bcrypt.compare(password, user[0].password, function(err, isMatch){
          if (err) throw err;

          if (isMatch) {
              return done(null, user);
          }
          else{
            return done(null, false, {
                message: "Incorrect Username or Password"
            });
          }
        });
      })
    }
  ));
  
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
}