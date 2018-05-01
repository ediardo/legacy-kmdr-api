import mongoose, { Schema } from "mongoose";

const paragraph = new Schema({
  expectargs: Boolean,
  short: Array,
  text: String,
  idx: Number,
  section: String,
  is_option: Boolean,
  nestedCommand: Boolean,
  long: Array,
  argument: String
});
export default paragraph;
