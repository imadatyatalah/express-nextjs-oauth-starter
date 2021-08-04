import jwt from "jsonwebtoken";

import { jwt_key } from "../config/credentials.js";

const isLoggedIn = (req, res, next) => {
  const token = req.cookies.gh_token;

  jwt.verify(token, jwt_key, (err, data) => {
    if (err) {
      return null;
    } else {
      req.user = data;
      next();
    }
  });
};

export default isLoggedIn;
