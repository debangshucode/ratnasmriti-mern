// models/Blog.js
import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String },
  content: { type: String, required: true },
  date: { type: Date, default: Date.now },
  author: { type: String }
});

export default mongoose.model("Blog", BlogSchema);
