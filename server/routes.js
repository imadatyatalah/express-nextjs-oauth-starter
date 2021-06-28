const express = require("express");
const routes = express.Router();

const currentUserRouter = require("./routes/me");
const githubOAuth = require("./routes/auth/github");
const user = require("./routes/user");

routes.use("/me", currentUserRouter);
routes.use("/auth/github", githubOAuth);
routes.use("/user", user);

module.exports = routes;
