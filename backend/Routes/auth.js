const express = require("express");
const User = require("../Models/User");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const JWT_SECRET = "Iamagoodboii$69"
const fetchuser = require("../middleware/fetchuser");
const router = express.Router();
const { body, validationResult } = require("express-validator");

//*********Route 1:Create the user*********
router.post(
  "/createUser",
  [
    body("email").isEmail(),
    body("name").isLength({ min: 2 }),
    body("password").isLength({ min: 8 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry a user with this email already exists" });
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password,salt)

      user = await User.create({
        email: req.body.email,
        name: req.body.name,
        password: secPass,
      });
      const data = {
        user:{
          id:user.id
        }
      }
      const authToken = jwt.sign(data,JWT_SECRET);
      res.json({ authToken});
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some internal server error");
    }
  }
);
//*********Route 2:Login the user*********
router.post(
  "/login",
  [
    body("email","Enter a valid email").isEmail(),
    body("password","Password cannot be blank").exists(),
  ],
  async (req, res) => {
    //Return error for bad req
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const{email,password}=req.body;
  try {
    let user = await User.findOne({email});
    if(!user){
      return res.status(400).json({ errors: "Please login with correct credentials" });
    }
    const passwordCompare = await bcrypt.compare(password,user.password);
    if(!passwordCompare){
      return res.status(400).json({ errors: "Please login with correct credentials" });
    }
    const data = {
      user:{
        id:user.id
      }
    }
    const authToken = jwt.sign(data,JWT_SECRET);
    res.json({ authToken});
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some internal server error");
  }
  })
//*********Route 3:Get User Details*********
router.post("/getuser",fetchuser,async (req, res) => {
    try {
      userId = req.user.id;
      console.log(req.user.id);
      const user = await User.findById(userId).select("-password");
      res.send(user);
    }catch (error) {
      console.error(error.message);
      res.status(500).send("Some internal server error");
    }
  }
)
module.exports = router;
