import mongoose, { Schema } from "mongoose";
import paragraph from "./paragraph";

const manpage = new Schema(
  {
    source: String,
    synopsys: String,
    name: String,
    nestedCommand: Boolean,
    paragraphs: [paragraph],
    partialmatch: Boolean,
    multicommand: false,
    aliases: Array
  },
  { collection: "manpage" }
);

export default manpage;
