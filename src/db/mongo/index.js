import mongoose from "mongoose";
import manpage from "./models/manpage";
import config from "../../config/db.mongo";

const ENVIRONMENT = process.env.NODE_ENV || "development";

mongoose
  .connect(
    `mongodb://${config[ENVIRONMENT]["host"]}:${config[ENVIRONMENT]["port"]}/${
      config[ENVIRONMENT]["database"]
    }`
  )
  .then(
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
