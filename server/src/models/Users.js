const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    password: { type: String },
    role: { type: String },

  },
  { collection: "peoples" }
);
module.exports = mongoose.model("Users", usersSchema);
