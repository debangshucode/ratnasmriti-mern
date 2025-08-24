import express from 'express'
import authAdmin from '../middlewares/authAdmin.js';
import upload from '../middlewares/uploadMiddleware.js';
import { createPost, deletePost, getPostById, getPosts, updatePost } from '../controllers/postController.js';

const router = express.Router();

router.post("/",authAdmin,upload.single("featured_image"),createPost);
router.get("/", getPosts);
router.get("/:id",  getPostById);
router.put("/:id", authAdmin, updatePost);
router.delete("/:id", authAdmin, deletePost);

export default router