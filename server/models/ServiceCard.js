const mongoose = require("mongoose");

const serviceCardSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    styleType: {
      type: Number,
      required: true
    },
    features: {
      type: Array,
      required: true
    },
    slug: {
      type: String,
      required: true
    }
  },
  { collection: "serviceCards" }
);

module.exports = mongoose.model("ServiceCard", serviceCardSchema);
