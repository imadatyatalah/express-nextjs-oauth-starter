const express = require("express");
const router = express.Router();
const PrismaClient = require("@prisma/client").PrismaClient;

const prisma = new PrismaClient({
  rejectOnNotFound: { findUnique: true },
});

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

module.exports = router;
