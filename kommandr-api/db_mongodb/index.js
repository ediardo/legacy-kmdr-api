import mongoose from "mongoose";
import manpage from "./models/manpage";

mongoose.connect("mongodb://192.168.99.100/explainshell").then(
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
