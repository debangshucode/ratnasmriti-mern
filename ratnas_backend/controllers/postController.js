// controllers/postController.js
import Post from "../models/Post.js";

// Home data (Popular + Recommended)
export const getHomeData = async (req, res) => {
  try {
    const category = await (await import("../models/MainCategory.js")).default.find().sort({ _id: -1 });
    const popular = await Post.find({ section: "Popular", status: "1" }).sort({ _id: -1 }).limit(4);
    const recommended = await Post.find({ section: "Recommended", status: "1" }).sort({ _id: -1 }).limit(4);

    res.json({ category, popular, recommended });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// CREATE Post
export const createPost = async (req, res) => {
  try {
    const { Name, content, price, discounted_price, status, section } = req.body;

    let imagePath = "";
    if (req.file) {
      // Save only relative path instead of full Windows path
      imagePath = `uploads/${req.file.filename}`;
    }

    const newPost = new Post({
      featured_image: imagePath,
      Name,
      content,
      price,
      discounted_price,
      status,
      section,
    });
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// READ all Posts
export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ _id: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// READ single Post
export const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// UPDATE Post
export const updatePost = async (req, res) => {
  try {
    const updated = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Post not found" });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// DELETE Post
export const deletePost = async (req, res) => {
  try {
    const deleted = await Post.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Post not found" });
    res.json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};