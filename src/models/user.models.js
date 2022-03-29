const mongoose = require("mongoose");

// USER SCHEMA
// Step 1 :- creating the schema
const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: false },
    gender: { type: String, required: true, unique: true },
    DOB: { type: Date, required: true },
    type:{type:String, enum:["student", "admin", "instructor"], required:true}
  },
  {
    versionKey: false,
    timestamps: true, 
  }
);

// Step 2 : creating the model
const User = mongoose.model("user", userSchema); // user => users

module.exports = User;
