const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsyn.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware/middleware.js");
const userController = require("../controller/users.js");

router.get("/signup", userController.signUpPgRender);

router.post("/signup", wrapAsync(userController.signUp));

router.get("/login", userController.logInPgRender);

router.post(
  "/login",
  saveRedirectUrl,
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  userController.logIn
);

router.get("/logout", userController.logOut);

module.exports = router;
