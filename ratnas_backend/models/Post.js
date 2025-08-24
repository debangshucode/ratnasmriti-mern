// models/Post.js
import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  featured_image: { type: String, required: true },
  Name: { type: String, required: true },
  content: { type: String, required: true }, // Rich text handled by React editor
  price: { type: Number, required: true },
  discounted_price: { type: Number },
  date: { type: Date, default: Date.now },
  status: { type: String, enum: ["0", "1"], default: "0" },
  section: { 
    type: String, 
    enum: ["Popular", "Recommended", "New_Arrival", "Top_Seller"] 
  }
});

export default mongoose.model("Post", PostSchema);
