const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");

const JWT_KEY = "something_private_and_long_enough_to_secure";

router.get("/", passport.authenticate("github", { scope: ["user:email"] }));

router.get(
  "/callback",
  passport.authenticate("github", { failureRedirect: "/login" }),
  (req, res, next) => {
    const token = jwt.sign({ id: req.user.id }, JWT_KEY, {
      expiresIn: 60 * 60 * 24 * 1000,
    });

    res.cookie("jwtToken", token);

    req.logIn(req.user, function (err) {
      if (err) return next(err);
      res.redirect(`http://localhost:3000`);
    });
  }
);

router.get("/logout", (req, res) => {
  req.session = null;
  res.clearCookie("jwtToken");
  req.logout();
  res.redirect("http://localhost:3000");
});

module.exports = router;
