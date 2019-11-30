const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    imgpath: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    }
  },
  { collection: "service" }
);

module.exports = mongoose.model("Service", serviceSchema);
