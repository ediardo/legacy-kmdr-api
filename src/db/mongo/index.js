import mongoose from "mongoose";
import manpage from "./models/manpage";
import config from "../../config/db.mongo";

const ENV = process.env.NODE_ENV || "development";

mongoose
  .connect(
    `mongodb://${process.env.KMDR_API_MONGODB_HOST ||
      config[ENV]["host"]}:${process.env.KMDR_API_MONGODB_PORT ||
      config[ENV]["port"]}/${config[ENV]["database"]}`
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
