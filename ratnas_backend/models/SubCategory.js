// models/SubCategory.js
import mongoose from "mongoose";

const SubCategorySchema = new mongoose.Schema({
  main_category: { type: mongoose.Schema.Types.ObjectId, ref: "MainCategory" },
  Name: { type: String, required: true },
  Image: { type: String },
  product_name: { type: String },
  price: { type: Number },
  discount_price: { type: Number },
  Description: { type: String },
  product_information: { type: String } // Rich text as string
});

export default mongoose.model("SubCategory", SubCategorySchema);
