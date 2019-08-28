const LocalStrategy = require('passport-local').Strategy;
const { GetUserByUsername, UserById } = require("../repositories/users");
const bcrypt = require('bcryptjs');

module.exports = (passport) => {
  passport.use(new LocalStrategy(async (username, password, done) => {
    const user = await GetUserByUsername(username);

    if (!user || user == undefined) {
      return done(null, false, { message: 'User does not exist' });
    }

    bcrypt.compare(password, user.password, (err, isMatch) => {
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

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  
  passport.deserializeUser(async (id, done) => {
    const user = await UserById(id);
    if (user) {
      done(null, user);
    }
  });
}