import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import graphqlHTTP from "express-graphql";
import cors from "cors";
import graphqlSchema from "./api/graphql/";
import sql from "./db/sql/models";
import mongo from "./db/mongo";
import config from "./config/config";
import axios from "axios";
const ENVIRONMENT = process.env.NODE_ENV || "development";

const app = express();
app.use(cookieParser());
var corsOptions = {
  origin: [
    "http://localhost:5000",
    "http://kommandr.com:5000",
    "https://kommandr.com"
  ],
  credentials: true
};
app.use(cors(corsOptions));
const recommendr = axios.create({
  baseURL: config[ENVIRONMENT]["recommendr"].baseURL
});

app.use(
  "/graphql",
  bodyParser.json(),
  graphqlHTTP((req, res) => ({
    schema: graphqlSchema,
    graphiql: true,
    context: {
      req,
      mongo,
      sql,
      recommendr
    }
  }))
);

app.listen(5001, () => {
  console.log("Listening on http://localhost:5001/");
});
