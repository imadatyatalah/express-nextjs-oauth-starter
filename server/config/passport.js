import { Strategy as GitHubStrategy } from "passport-github2";
import passport from "passport";

import { github_client_id, github_client_secret } from "./credentials.js";
import { prisma } from "./prisma.js";

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
