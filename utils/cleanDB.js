//import models
const Story = require("../models/Story");
const ServiceCard = require("../models/ServiceCard");
const User = require("../models/User");
const Service = require("../models/Service");
const Subscriptions = require("../models/Subscriptions");
//import ORM
const mongoose = require("mongoose");
//import env variables
const dotenv = require("dotenv");
dotenv.config();

async function cleanDB() {
  //Connect to DB
  mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("[server] connected to db")
  );

  //Drop collections
  await Story.collection.drop();
  await ServiceCard.collection.drop();
  await User.collection.drop();
  await Service.collection.drop();
  await Subscriptions.collection.drop();

  console.log("[server] collections has been dropped");

  //Close db connection
  mongoose.disconnect(() => console.log("[server] db connection closed"));
}
cleanDB();
