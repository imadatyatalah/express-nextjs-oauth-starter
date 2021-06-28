const passport = require("passport");
const GitHubStrategy = require("passport-github2").Strategy;
const PrismaClient = require("@prisma/client").PrismaClient;

const { github_client_id, github_client_secret } = require("./credentials");

const prisma = new PrismaClient();

passport.serializeUser((user, done) => {
  done(null, user._json.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await prisma.user.findUnique({ where: { githubId: id } });
    done(null, user);
  } catch (err) {
    done(err);
  }
});

passport.use(
  new GitHubStrategy(
    {
      clientID: github_client_id,
      clientSecret: github_client_secret,
      callbackURL: "/auth/github/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      const data = {
        githubId: profile._json.id,
        githubName: profile._json.name,
        githubUsername: profile._json.login,
        githubAvatarUrl: profile._json.avatar_url,
        githubEmail: profile._json.email,
      };

      await prisma.user.upsert({
        where: { githubId: profile._json.id },
        create: data,
        update: data,
      });

      return done(null, profile);
    }
  )
);
