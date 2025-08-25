import jwt from "jsonwebtoken";

// Admin authentication middleware
const authAdmin = (req, res, next) => {
  try {
    // Get token from cookie
    const token = req.cookies?.token;
    if (!token) {
      return res.json({
        success: false,
        message: "Not Authorized Login Again",
      });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Optional: check if email matches admin email
    if (decoded.email !== process.env.ADMIN_EMAIL) {
      return res.json({
        success: false,
        message: "Not Authorized Login Again",
      });
    }

    // Token is valid
    req.admin = decoded; // attach info to request if needed
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Not Authorized Login Again" });
  }
};

export default authAdmin;
