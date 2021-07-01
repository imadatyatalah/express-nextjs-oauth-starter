import express from "express";

import currentUser from "./routes/me.js";
import githubOAuth from "./routes/auth/github.js";
import user from "./routes/user/index.js";

const routes = express.Router();

routes.use("/me", currentUser);
routes.use("/auth/github", githubOAuth);
routes.use("/user", user);

export default routes;
