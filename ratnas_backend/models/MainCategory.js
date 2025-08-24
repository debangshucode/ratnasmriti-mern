// models/MainCategory.js
import mongoose from "mongoose";

const MainCategorySchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Image: { type: String }
});

export default mongoose.model("MainCategory", MainCategorySchema);
