import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import graphqlHTTP from "express-graphql";
import cors from "cors";
import graphqlSchema from "./api/graphql/";
import sql from "./db/sql/models";
import mongo from "./db/mongo";
import session from "express-session";
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
app.use(cors(corsOptions));

app.use(
  "/graphql",
  bodyParser.json(),
  graphqlHTTP((req, res) => ({
    schema: graphqlSchema,
    graphiql: true,
    context: {
      req,
      mongo,
      sql
    }
  }))
);

app.listen(5001, () => {
  console.log("Listening on http://localhost:5001/");
});
