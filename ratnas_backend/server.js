
// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import adminRouter from "./routes/adminRoutes.js";
import adminPostRoutes from "./routes/adminPostRoutes.js"
import adminCategoryRoutes from "./routes/adminCategoryRoutes.js"
import adminBlogRoutes from "./routes/adminBlogRoutes.js"
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// MongoDB connection
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
// .then(() => console.log("MongoDB connected"))
// .catch(err => console.error(err));

connectDB();


// Routes
app.use("/api/auth", adminRouter);
app.use("/api/admin/posts",adminPostRoutes)
app.use("/api/admin/categories",adminCategoryRoutes)
app.use("/api/admin/blogs", adminBlogRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
