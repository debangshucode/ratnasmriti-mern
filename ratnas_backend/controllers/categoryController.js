// controllers/categoryController.js
import MainCategory from "../models/MainCategory.js";
import SubCategory from "../models/SubCategory.js";
import Post from "../models/Post.js";

// Get products by category
export const getCategoryProducts = async (req, res) => {
  try {
    const main_category = await MainCategory.findById(req.params.id);
    if (!main_category) return res.status(404).json({ message: "Category not found" });

    const sub_categories = await SubCategory.find({ main_category: main_category._id });
    const cmb = await MainCategory.find();
    // const recommended = await Post.find({ section: "Recommended", status: "1" }).sort({ _id: -1 }).limit(4);

    res.json({ main_category, sub_categories });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get sub-category (product description)
export const getSubCategoryDetails = async (req, res) => {
  try {
    const sub_category = await SubCategory.findById(req.params.id);
    if (!sub_category) return res.status(404).json({ message: "Product not found" });

    res.json(sub_category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// ===== Main Category CRUD =====
export const createMainCategory = async (req, res) => {
  try {
    let imagePath = "";
    if (req.file) {
      // Save only relative path instead of full Windows path
      imagePath = `uploads/${req.file.filename}`;
    }
    const category = new MainCategory({
      Name: req.body.Name,
      Image: imagePath,
    });
    const saved = await category.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMainCategories = async (req, res) => {
  try {
    const cats = await MainCategory.find().sort({ _id: -1 });
    res.json(cats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// ===== Sub Category CRUD =====
export const createSubCategory = async (req, res) => {
  try {
    let imagePath = "";
    if (req.file) {
      // Save only relative path instead of full Windows path
      imagePath = `uploads/${req.file.filename}`;
    }
    
    const sub = new SubCategory({
      main_category: req.body.main_category,
      Name: req.body.Name,
      Image: imagePath,
      product_name: req.body.product_name,
      price: req.body.price,
      discount_price: req.body.discount_price,
      Description: req.body.Description,
      product_information: req.body.product_information,
    });
    const saved = await sub.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getSubCategories = async (req, res) => {
  try {
    const subs = await SubCategory.find().populate("main_category").sort({ _id: -1 });
    res.json(subs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};