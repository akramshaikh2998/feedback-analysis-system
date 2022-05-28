const User = require("../models/User");

async function register(req, res) {
  try {
    const { name, number, email, password, cpassword } = req.body;

    if (password !== cpassword) {
      res.json({ ok: false });
    }

    const user = new User({
      name,
      number,
      email,
      password,
    });

    user.save((error) => {
      if (error) {
        return res.json({ ok: false, error });
      }
    });

    const userWithEmail = await User.findOne({ email });
    if (email === userWithEmail.email) {
      res.render("register", {
        title: "",
        password: "",
        email: "Email is Already there plz chose different one",
      });
    } else {
      console.log("err");
    }
  } catch (error) {
    res.json({ ok: false, error });
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
