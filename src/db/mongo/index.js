import mongoose from "mongoose";
import manpage from "./models/manpage";

mongoose.connect("mongodb://kommandr-api_mongodb/explainshell").then(
  () => {
    console.log("Connected to MongoDB");
  },
  err => {
    console.error("Error while connecting to MongoDB ", err);
  }
);
mongoose.Promise = global.Promise;
mongoose.model("ManPage", manpage);
const db = mongoose.connection;

export default db;
