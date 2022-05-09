const express = require("express");
const bodyParser = require("body-parser");
const router = require("./router/userRouter");
const session = require("express-session");

const app = express();

app.use(bodyParser.json());
app.use(
  session({
    secret: "valstats",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
app.use("/", router);

module.exports = app;
