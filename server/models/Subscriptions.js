const mongoose = require("mongoose");

const subscriptionsSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: true
    },
    firstname: {
      type: String,
      required: true
    },
    lastname: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    master: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    userId: {
      type: String
    }
  },
  { collection: "subscriptions" }
);

module.exports = mongoose.model("Subscriptions", subscriptionsSchema);
