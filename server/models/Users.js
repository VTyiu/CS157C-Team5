const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");

// use both embedded documents and subset pattern
// most recent 5 entries will be stored in match in user schema but all other matches will be in
// match collection where all matches are stored and each match will contain a reference to the user that entered it

// create match schema
// const matchSchema = mongoose.Schema({
//     map: {
//         type: String,
//         required: true,
//     },
//     agent: {
//         type: String,
//         required: true,
//     },
// });

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // rank: {
  //   type: String,
  //   required: true,
  // },
  //match: [matchSchema],
  //   matches: [
  //     {
  //       match_id: {
  //         type: Number,
  //         required: true,
  //       },
  //       map: {
  //         type: String,
  //         required: true,
  //       },
  //       agent: {
  //         type: String,
  //         required: true,
  //       },
  //       gun: {
  //         type: String,
  //         required: true,
  //       },
  //     },
  //   ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.statics.findUser = async function (email, password) {
  const user = await model.findOne({ email, password });
  // const user = await model.findOne({ email });
  // if (!user) {
  //   return;
  // }

  // const isMatch = await bcrypt.compare(password, user.password);

  // if (!isMatch) {
  //   return;
  // }

  if (user) {
    return user;
  } else {
    return;
  }

  // return user;
};

// UserSchema.pre("save", async function (next) {
//   const user = this;
//   if (user.isModified("password")) {
//     user.password = await bcrypt.hash(user.password, 8);
//   }
//   next();
// });
const model = mongoose.model("users", UserSchema);

module.exports = model;

// const UserModel = mongoose.model("users", UserSchema);
// module.exports = UserModel;
