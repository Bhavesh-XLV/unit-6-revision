const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    cost_for_two: { type: Number, required: true },
    rating: { type: Number, required: true },
    vote: { type: Number, required: true },
    img: { type: String, required: true },
    payment: [
      {
        cash: { type: String },
        card: { type: String },
        upi: { type: String },
      },
    ],
  },
  { versionKey: false }
);

module.exports = mongoose.model("restaurants", restaurantSchema);
