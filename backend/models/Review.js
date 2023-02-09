const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    by: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    note: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Review", reviewSchema);
