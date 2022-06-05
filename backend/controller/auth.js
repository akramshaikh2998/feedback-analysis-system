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

  User.findOne({ email: email }, (err, result) => {
    if (email === result.email && password === result.password) {
      res.render("dashbord", { name: result.name });
    } else {
      console.log(err);
    }
  });
}

module.exports = {
  register,
  login,
};
