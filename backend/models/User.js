const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  first_name: {
    type: String,
    required: true,
    lowercase: true,
  },
  last_name: {
    type: String,
    required: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    default: "default.jpg",
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  info: {
    age: Number,
    skill: String,
    bio: String,
    phone: String,
  },
});


// middleware run before save or create
userSchema.pre("save", async function (next) {
  // Only run this function if password is actually modified
  if (!this.isModified("password")) return next();

  // Hash the password
  this.password = await bcrypt.hash(this.password, 12);

  next();
});

module.exports = mongoose.model("User", userSchema);
