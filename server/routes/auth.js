const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { registerValidation, loginValidation } = require("../utils/validation");

router.post("/register", async (req, res) => {
  const { login, email, password } = req.body;

  //Data validation before creating user
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //Check if login already exists
  const loginExist = await User.findOne({ login });
  if (loginExist) return res.status(400).send("Login already exists");

  //Check if email already exists
  const emailExist = await User.findOne({ email });
  if (emailExist) return res.status(400).send("Email already exists");

  //Hash passwords
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //Create a new user
  const user = new User({
    login,
    email,
    password: hashedPassword
  });
  try {
    const savedUser = await user.save();
    res.send({ user: user._id });
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/login", async (req, res) => {
  const { login, password } = req.body;

  //Data validation before creating user
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //Check if user exists
  const user = await User.findOne({ login });
  if (!user) return res.status(400).send("Email or password is incorrect.");

  //Check if password is correct
  const validPass = await bcrypt.compare(password , user.password);
  if(!validPass) return res.status(400).send("Email or password is incorrect.2");

  const token = jwt.sign({_id : user._id}, process.env.TOKEN_SECRET);
  res.header('auth-token',token).send(token);
});

module.exports = router;
