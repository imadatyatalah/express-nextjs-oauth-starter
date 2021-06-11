const express = require("express");
const router = express.Router();
const PrismaClient = require("@prisma/client").PrismaClient;

const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  const users = await prisma.user.findMany({
    orderBy: { createdAt: "desc" },
  });

  res.send(users);
});

module.exports = router;
