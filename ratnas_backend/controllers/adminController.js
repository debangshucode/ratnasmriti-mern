import jwt from "jsonwebtoken";

// API for admin login
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      // Create JWT
      const token = jwt.sign({ email }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      // Set cookie
      res.cookie("token", token, {
        httpOnly: true, // not accessible via JS
        secure: false, // true if using HTTPS
        sameSite: "lax", // or 'none' if cross-domain + HTTPS
        maxAge: 60 * 60 * 1000, // 1 hour
      });

      // Return JSON response
      res.json({
        success: true,
        message: "Admin Login Successful!",
      });
    } else {
      res.json({
        success: false,
        message: "Invalid Email or Password",
      });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { adminLogin };
