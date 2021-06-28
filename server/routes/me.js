import express from "express";
import jwt from "jsonwebtoken";

import { prisma } from "../config/prisma.js";

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
  try {
    const user = await prisma.user.findUnique({
      where: { githubId: Number(req.user.id) },
    });

    res.send(user);
  } catch (err) {
    res.send(err);
  }
});

export default router;
