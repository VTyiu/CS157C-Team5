const express = require("express");
const UserModel = require("../models/Users");
const router = express.Router();

router.post("/auth/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findUser(email, password);
  if (user) {
    req.session.user = user._id;
    res.json({
      message: "Login success",
      auth: true,
    });
  } else {
    res.json({
      message: "Login fail",
      auth: false,
    });
  }
});

router.post("/auth/createUser", (req, res) => {
  const user = new UserModel(req.body);
  req.session.user = user._id;
  user
    .save()
    .then((result) => {
      res.json({
        message: "Create User success",
        auth: true,
      });
    })
    .catch((err) => {
      res.json({
        message: "Create User fail",
        auth: false,
      });
    });
});

router.get("/auth/hasLogged", (req, res) => {
  if (req.session.user) {
    res.json({
      auth: true,
      message: "You are logged in!",
    });
  }
  return res.json({
    auth: false,
    message: "Not logged in",
  });
});
module.exports = router;
