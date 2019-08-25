const express = require("express");
const router = express.Router();
const { GetUsers } = require("../repositories/users");

/* GET home page. */
router.get("/", ensureAuthenticated, function(req, res, next) {
  res.render("index");
});

router.get("/admin", ensureAuthenticated, async function(req, res, next) {
  try{
    const users = await GetUsers();
    res.render("admin", { users: users });
  }
  catch (e) {
    return next(e);
  }
})

function ensureAuthenticated(req, res, next){
  if (req.isAuthenticated()){
    return next();
  }
  else{
    res.redirect("/users/login");
  }
}

module.exports = router;
