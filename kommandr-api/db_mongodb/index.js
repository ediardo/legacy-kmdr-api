import mongoose from "mongoose";
import manpage from "./models/manpage";

let db = mongoose.createConnection("mongodb://192.168.99.100/explainshell");

db.on("error", function(err) {
  if (err) throw err;
});

db.once("open", function callback() {
  console.info("MongoDB connected successfully");
});
console.log(db.collections);
var m = db.model("ManPage", manpage);
console.log(m);
m.findOne({ name: "mysqldump" }, (e, a) => console.log(e, a));

export default db;
