// controllers/blogController.js
import Blog from "../models/Blog.js";



// CREATE Blog
export const createBlog = async (req, res) => {
  try {
    let imagePath = "";
    if (req.file) {
      // Save only relative path instead of full Windows path
      imagePath = `uploads/${req.file.filename}`;
    }
    const blog = new Blog({
      title: req.body.title,
      image: imagePath,
      content: req.body.content,
      author: req.body.author,
    });
    const saved = await blog.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// READ Blogs
export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ _id: -1 });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


