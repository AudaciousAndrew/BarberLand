const Story = require("../models/Story");
const ServiceCard = require("../models/ServiceCard");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

async function clearDB() {
  //Connect to DB
  mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("connected to db")
  );

  //Drop collections
  await Story.collection.drop();
  await ServiceCard.collection.drop();

  console.log("collections has been dropped");

  //Close db connection
  mongoose.disconnect(() => console.log("db connection closed"));
}
clearDB();
