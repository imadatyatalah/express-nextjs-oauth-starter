const jwt = require("jsonwebtoken");

const JWT_KEY = "something_private_and_long_enough_to_secure";

const isLoggedIn = (req, res, next) => {
  const token = req.headers["token"];

  jwt.verify(token, JWT_KEY, function (err, data) {
    if (err) {
      res.status(401).send({ error: "Unauthorized" });
    } else {
      req.user = data;
      next();
    }
  });
};

module.exports = isLoggedIn;