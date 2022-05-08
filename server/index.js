const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Users");
const MatchModel = require("./models/Matches");
const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://user1:valstats@cluster0.vn2kb.mongodb.net/valstats?retryWrites=true&w=majority"
);

// app.get("/getUsers", (req, res) => {
//     UserModel.find({}, (err, result) => {
//         if (err) {
//             res.json(err);
//         } else {
//             res.json(result); // will send back result that we got from the table
//         }
//     });
// });

// req: request - get info from front end, res: response - send info from front end to back end
app.post("/loginUser", async (req, res) => {
  const user = await UserModel.findOne({
    email: req.body.email,
    password: req.body.password,
  });

  if (user) {
    res.send("Logged int");
    console.log(res.json(user));
    return res.json({ status: "ok", user: true });
  } else {
    return res.json({ status: "error", user: false }); // send error back to front end
  }
});

app.post("/createUser", async (req, res) => {
  try {
    const user = await UserModel.create({
      // user represents data we wanna send to database
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      rank: req.body.rank,
    });
    res.json(user); // won't be using this data but will send it back so we know that we got back the correct info in backend
  } catch (err) {
    res.json({ status: "error", error: "Duplicate email" });
  }
});

app.get("/getMatches", (req, res) => {
  MatchModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.get("/getUsers", (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/createMatch", async (req, res) => {
  const match = req.body;
  const newMatch = new MatchModel(match);
  await newMatch.save();
  res.json(match);
});

app.put("/update", async (req, res) => {
  // .put is used to update stuff
  const newMapName = req.body.newMapName;
  const _id = req.body._id;
  try {
    await MatchModel.findById(_id, (error, matchToUpdate) => {
      matchToUpdate.mapName = newMapName;
      matchToUpdate.save();
    });
  } catch (err) {
    console.log(err);
  }

  res.send("updated");
});

app.listen(3001, () => {
  console.log("SERVER RUNS PERFECTLY!");
});
