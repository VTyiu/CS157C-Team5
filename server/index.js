const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Users");
const MatchModel = require("./models/Matches");
const MapModel = require("./models/Maps");
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
app.post("/loginUser", (req, res) => {
  const user = UserModel.findOne(
    {
      email: req.body.email,
      password: req.body.password,
    },
    function (err, results) {
      if (!results) {
        console.log(results);
        res.json({ status: 404 }); // Error no matching user;
      } else {
        console.log("pass");
        res.json({ status: 100, user_id: results._id, username: results.name });
      }
    }
  );
});

app.post("/createUser", async (req, res) => {
  try {
    const username = req.body.name;
    const mail = req.body.email;
    const pass = req.body.password;
    const user = new UserModel({
      // user represents data we wanna send to database
      name: username,
      email: mail,
      password: pass,
    });
    await user.save();
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

app.get("/getMaps", (req, res) => {
  MapModel.find({}, (err, result) => {
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
  res.send(newMatch);
  // res.json(match);
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

app.put("/updateMatch", (req, res) => {
  // .put is used to update stuff
  const newKills = req.body.kills;
  const newDeaths = req.body.deaths;
  const newMap = req.body.mapName;
  const newAgent = req.body.agent;
  const newGun = req.body.gun;
  const newComments = req.body.comments;
  const _id = req.body._id;
  try {
      MatchModel.findById(_id, (error, matchToUpdate) => {
      matchToUpdate.kills = newKills;
      matchToUpdate.deaths = newDeaths;
      matchToUpdate.mapName = newMap;
      matchToUpdate.agent = newAgent;
      matchToUpdate.gun = newGun;
      matchToUpdate.comments = newComments;
      matchToUpdate.save();
    });
  } catch (err) {
    console.log(err);
  }
  res.send("updated");
});

app.delete("/deleteMatch/:id", async (req, res) => {
  const id = req.params.id;
  await MatchModel.findByIdAndRemove(id).exec();
  res.send("itemdeleted");
})

app.listen(3001, () => {
  console.log("SERVER RUNS PERFECTLY!");
});
