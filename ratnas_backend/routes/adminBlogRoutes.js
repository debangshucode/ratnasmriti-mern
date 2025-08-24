import express from "express";
import upload from "../middlewares/uploadMiddleware.js";
import authAdmin from "../middlewares/authAdmin.js";
import { createBlog, getBlogs } from "../controllers/blogController.js";

const router = express.Router();

router.post("/", authAdmin, upload.single("image"), createBlog);
router.get("/",  getBlogs);


export default router;