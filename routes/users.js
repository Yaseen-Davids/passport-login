const express = require("express");
const router = express.Router();
const passport = require("passport");
const { CreateUser, DeleteUser } = require("../repositories/users");

router.get("/login", (req, res, next) => {
  try {
    res.render("login");
  }
  catch (e){
    return next(e);
  }
});

router.get("/register", (req, res, next) => {
  try {
    res.render("register");
  } catch (e) {
    return next(e);
  }
});

router.get('/logout', (req, res, next) => {
  try {
    req.logout();
    res.redirect('/users/login');
  } catch (e) {
    return next(e);
  }
});

router.post("/register", async (req, res, next) => {
  try {
    await CreateUser(req.body);
    res.redirect("/users/login");
  }
  catch (e) {
    return next(e);
  }
});

router.get("/delete/:id", async (req, res, next) => {
  try {
    await DeleteUser(req.params.id);
    res.redirect("/admin");
  }
  catch (e) {
    return next(e);
  }
})

router.post("/login", (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/users/login",
  })(req, res, next);
});

module.exports = router;