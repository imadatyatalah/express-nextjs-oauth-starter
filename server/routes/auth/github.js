import express from "express";
import passport from "passport";
import jwt from "jsonwebtoken";

const JWT_KEY = "something_private_and_long_enough_to_secure";

const router = express.Router();

router.get("/", passport.authenticate("github", { scope: ["user:email"] }));

router.get(
  "/callback",
  passport.authenticate("github", { failureRedirect: "/login" }),
  (req, res, next) => {
    const token = jwt.sign({ id: req.user.id }, JWT_KEY, {
      expiresIn: 60 * 60 * 24 * 1000,
    });

    res.cookie("gh_token", token, {
      secure: true,
    });

    req.logIn(req.user, (err) => {
      if (err) return next(err);
      res.redirect(`http://localhost:3000`);
    });
  }
);

router.get("/logout", (req, res) => {
  res.clearCookie("gh_token");
  req.logout();
  res.redirect("http://localhost:3000");
});

export default router;
