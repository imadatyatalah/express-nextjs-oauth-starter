const createError = require("http-errors");
const express = require("express");
const path = require("path");
// const cookieParser = require("cookie-parser");
// const cookieSession = require("cookie-session");
const logger = require("morgan");
const passport = require("passport");

require("./config/passport");

const usersRouter = require("./routes/users");
const currentUserRouter = require("./routes/me");
const githubOAuth = require("./routes/auth/github");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
// app.use(
//   cookieSession({
//     name: "github-auth-session",
//     keys: ["key1", "key2"],
//   })
// );
app.use(passport.initialize());
app.use(passport.session());

app.use("/users", usersRouter);
app.use("/me", currentUserRouter);
app.use("/auth/github", githubOAuth);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500).send(err);
});

module.exports = app;
