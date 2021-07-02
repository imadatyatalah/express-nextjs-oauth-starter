import createError from "http-errors";
import express from "express";
import logger from "morgan";
import passport from "passport";
import cors from "cors";
import helmet from "helmet";

import { corsOptions } from "./config/cors.js";
import routes from "./routes.js";
import "./config/passport.js";

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions));
app.use(helmet());

app.use(passport.initialize());
app.use(passport.session());

app.use("/", routes);

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

export default app;
