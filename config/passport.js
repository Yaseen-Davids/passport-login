const LocalStrategy = require('passport-local').Strategy;
const { GetUserByUsername, UserById } = require("../repositories/users");
const bcrypt = require('bcryptjs');

module.exports = function (passport) {
  passport.use(new LocalStrategy(async function (username, password, done) {
    const user = await GetUserByUsername(username);

    if (!user || user == undefined) {
      return done(null, false, { message: 'User does not exist' });
    }

    bcrypt.compare(password, user.password, function (err, isMatch) {
      if (err) {
        return err;
      };
      if (isMatch) {
        return done(null, user);
      }
      else {
        return done(null, false, {
          message: "Incorrect Username or Password"
        });
      }
    });
  }));

  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(async function (id, done) {
    const user = await UserById(id);
    if (user) {
      done(null, user);
    }
  });
}