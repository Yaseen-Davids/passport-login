const express = require('express');
const router = express.Router();
const passport = require('passport');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function(req, res, next){

  passport.authenticate('local', {
    successRedirect: '/', 
    failureRedirect: '/users/login',
  })(req, res, next);

});

router.get("/login", (req, res, next) => {
  res.render({
    
  })
})

module.exports = router;
