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
import dbMongo from "./db_mongodb";

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

*/

app.listen(5001, () => {
  console.log("Listening on port 5001");
});
