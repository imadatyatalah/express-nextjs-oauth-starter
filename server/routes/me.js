const express = require("express");
const jwt = require("jsonwebtoken");
const PrismaClient = require("@prisma/client").PrismaClient;

const prisma = new PrismaClient();
const JWT_KEY = "something_private_and_long_enough_to_secure";

const router = express();

router.use((req, res, next) => {
  const token = req.headers["token"];

  jwt.verify(token, JWT_KEY, function (err, data) {
    if (err) {
      res.status(401).send({ error: true, message: "Unauthorized" });
    } else {
      req.user = data;
      next();
    }
  });
});

router.get("/", async (req, res) => {
  user = await prisma.user.findUnique({
    where: { githubId: Number(req.user.id) },
  });

  res.send(user);
});

module.exports = router;
