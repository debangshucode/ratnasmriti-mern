import express from "express";
import authAdmin from "../middlewares/authAdmin.js";
import {
  createMainCategory,
  createSubCategory,
  getMainCategories,
  getSubCategories,
} from "../controllers/categoryController.js";
import upload from "../middlewares/uploadMiddleware.js";

const router = express.Router();

// Main Category
router.post("/main", authAdmin, upload.single("Image"), createMainCategory);
router.get("/main", authAdmin, getMainCategories);

// Sub Category
router.post("/sub", authAdmin, upload.single("Image"), createSubCategory);
router.get("/sub", authAdmin, getSubCategories);

//public
router.get("/pub-sub", getSubCategories);

export default router;
