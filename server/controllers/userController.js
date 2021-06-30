import { prisma } from "../config/prisma.js";

export const getUser = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { githubUsername: req.params.username },
    });

    res.send(user);
  } catch (err) {
    res.send(err);
  }
};
