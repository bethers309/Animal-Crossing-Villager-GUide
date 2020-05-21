const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const DataSchema = new Schema(
  {
    name: String,
    gender: String,
    personality: String,
    species: String,
    bday: String,
    phrase: String,
    pic: String
  },
  { timestamps: true }
);
// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Data", DataSchema);