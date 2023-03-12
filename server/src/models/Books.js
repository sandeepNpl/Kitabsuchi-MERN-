const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
  {
    bookName: { type: String },
    author : { type: String },
    price: { type:Number},

  },
  { collection: "books" }
);
module.exports = mongoose.model("Books", usersSchema);