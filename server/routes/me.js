import express from "express";

import { prisma } from "../config/prisma.js";
import getCurrentUser from "../middlewares/isLoggedIn.js";

const router = express();

router.get("/", getCurrentUser, async (req, res) => {
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
