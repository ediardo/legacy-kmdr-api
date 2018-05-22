import express from "express";
import path from "path";
import session from "express-session";
import webpackMiddleware from "webpack-dev-middleware";
import webpack from "webpack";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import passport from "passport";
import GithubStrategy from "passport-github2";
import FacebookStrategy from "passport-facebook";
//import { graphiqlExpress } from "graphql-server-express";
import graphqlHTTP from "express-graphql";
import cors from "cors";
import config from "./db/config/config.json";
import graphqlSchema from "./api/graphql/";
import db from "./db/models";
//import dbMongo from "./db_mongodb";

const app = express();
app.use(cookieParser());
// GET secret from untracked file
app.use(
  session({
    secret: "keyboard cat pacifico",
    resave: false,
    saveUninitialized: true
  })
);
var corsOptions = {
  origin: [
    "http://localhost:5000",
    "http://kommandr.com:5000",
    "https://kommandr.com"
  ],
  credentials: true
};

/*
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.resolve(__dirname, "..", "build")));
app.use(cors(corsOptions));

const oauthConfig = config["oauth"];

passport.use(
  new GithubStrategy(
    {
      clientID: oauthConfig["github"].clientId,
      clientSecret: oauthConfig["github"].secret,
      callbackURL: oauthConfig["github"].callbackURL
    },
    (accessToken, refreshToken, profile, done) => {
      const { id, login, name, email, avatar_url } = profile._json;
      db.User.findOne({
        where: {
          $or: [{ githubId: id }, { email: email }]
        }
      }).then(user => {
        if (user) {
          if (!user.githubId) {
            user.githubId = id;
            user.save();
          }
          return done(null, user.id);
        } else {
          db.User.create({
            githubId: id,
            name,
            username: login,
            email,
            externalAvatarUrl: avatar_url,
            isPasswordSet: 0,
            isUsernameSet: true,
            status: 1
          }).then(newUser => done(null, newUser.id));
        }
      });
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: oauthConfig["facebook"].clientId,
      clientSecret: oauthConfig["facebook"].secret,
      callbackURL: oauthConfig["facebook"].callbackURL,
      profileFields: ["emails", "id", "displayName", "name", "picture"]
    },
    (accessToken, refreshToken, profile, done) => {
      const { id, email, name } = profile._json;
      db.User.findOne({
        where: {
          $or: [{ facebookId: id }, { email }]
        }
      }).then(user => {
        if (user) {
          if (!user.facebookId) {
            user.facebookId = id;
            user.save();
          }
          return done(null, user.id);
        } else {
          var externalAvatarUrl = `https://graph.facebook.com/${id}/picture?width=250`;
          db.User.create({
            facebookId: id,
            name,
            email,
            externalAvatarUrl,
            isPasswordSet: 0,
            isUsernameSet: 0,
            status: 1
          }).then(newUser => done(null, newUser.id));
        }
      });
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  db.User.findById(user).then(user => {
    if (user) {
      done(null, user.get());
    } else {
      done(null, null);
    }
  });
});
*/
app.use(
  "/graphql",
  bodyParser.json(),
  graphqlHTTP((req, res) => ({
    schema: graphqlSchema,
    graphiql: true,
    context: {
      req,
      dbMongo
    }
  }))
);
/*
app.get("/logout", (req, res) => {
  req.logout();
  res.redirect("http://kommandr.com:5000");
});
app.get(
  "/login/github",
  passport.authenticate("github", { scope: ["user:email"] })
);
app.get(
  "/login/facebook",
  passport.authenticate("facebook", { scope: ["public_profile", "email"] })
);

app.get(
  "/login/github/return",
  passport.authenticate("github", { failureRedirect: "/login" }),
  (req, res) => {
    res.redirect("http://localhost:5000");
  }
);
app.get(
  "/login/facebook/return",
  passport.authenticate("facebook", { failureRedirect: "/login" }),
  (req, res) => {
    res.redirect("http://localhost:5000/#");
  }
);
*/
app.listen(5001, () => {
  console.log("Listening on port 5001");
});
