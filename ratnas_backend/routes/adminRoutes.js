import express from "express";
import { adminLogin } from "../controllers/adminController.js";
import authAdmin from "../middlewares/authAdmin.js";

const router = express.Router();

router.post("/login", adminLogin);

export default router;
