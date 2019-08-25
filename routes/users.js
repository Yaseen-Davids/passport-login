const express = require("express");
const router = express.Router();
const passport = require("passport");
const { CreateUser, DeleteUser } = require("../repositories/users");

router.get("/login", (req, res, next) => {
  res.render("login");
});

router.get("/register", function (req, res, next) {
  res.render("register");
});

router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/users/login');
});

router.post("/register", async function (req, res, next) {
  try {
    await CreateUser(req.body);
    res.redirect("/users/login");
  }
  catch (e) {
    return next(e);
  }
});

router.get("/delete/:id", async function (req, res, next) {
  try {
    await DeleteUser(req.params.id);
    res.redirect("/admin");
  }
  catch (e) {
    return next(e);
  }
})

router.post("/login", function (req, res, next) {
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/users/login",
  })(req, res, next);
});

module.exports = router;