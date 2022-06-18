const jwt = require("jsonwebtoken");
const User = require("../models/User");

async function register(req, res) {
  try {
    const { name, number, email, branch, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.json({ ok: false, error: "Password does not match" });
    }

    const userWithEmail = await User.findOne({ email });
    if (userWithEmail && email === userWithEmail.email) {
      throw "User with email already exists";
    }

    const user = new User({
      name,
      number,
      email,
      branch,
      password,
    });
    await user.save();

    return res.json({ ok: true });
  } catch (error) {
    return res.json({ ok: false, error });
  }
}

async function login(req, res) {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ ok: false, error: "User not found" });
  }

  if (user.password !== password) {
    return res.json({ ok: false, error: "Incorrect password" });
  }

  const token = jwt.sign({ user }, process.env.SECRET_KEY, {
    noTimestamp: true,
  });

  return res.json({ ok: true, token });
}

module.exports = {
  register,
  login,
};
