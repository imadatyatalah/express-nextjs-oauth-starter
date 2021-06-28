import express from "express";

import { prisma } from "../../config/prisma.js";

const router = express.Router();

router.get("/:username", async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { githubUsername: req.params.username },
    });

    res.send(user);
  } catch (err) {
    res.send(err);
  }
});

export default router;
