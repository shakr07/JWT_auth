// Routes/auth.js
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User=require('../Models/User');
const verifyToken=require('../middleware/authMiddleware');
const cors = require("cors");




router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

//protectedRoute

router.get("/", verifyToken, (req, res) => {
   res.status(200).json({ message: "Protected route accessed" });
 });


// User registration
router.post("/register", async (req, res) => {
  try {
    const { username,email, password } = req.body;
    // console.log( username);
    
    const hashedPassword = await bcrypt.hash(password, 10);
   // console.log(hashedPassword);
    
    const user = new User({ username,email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "Registration failed" });
  }
});



// User login

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    // console.log(username,'+',password);
    
    const user = await User.findOne({ email });
    if (!user) {
      
      return res.status(401).json({ error: "Authentication failed User not BRo" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Authentication failed password not matched" });
    }
    const token = jwt.sign({ userId: user._id }, "shashank", {
      expiresIn: "1h",
    });
   
    
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: "Login failed" });
  }
});



module.exports = router;

