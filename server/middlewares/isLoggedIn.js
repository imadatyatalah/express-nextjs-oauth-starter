import jwt from "jsonwebtoken";

import { jwt_key } from "../config/credentials.js";

const isLoggedIn = (req, res, next) => {
  const token = req.headers["token"];

  jwt.verify(token, jwt_key, (err, data) => {
    if (err) {
      res.status(401).send({ error: true, message: "Unauthorized" });
    } else {
      req.user = data;
      next();
    }
  });
};

export default isLoggedIn;
