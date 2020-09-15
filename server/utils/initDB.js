//import models
const Story = require("../models/Story");
const ServiceCard = require("../models/ServiceCard");
const Service = require("../models/Service");
//import ORM
const mongoose = require("mongoose");
//import env variables
const dotenv = require("dotenv");
dotenv.config();

async function initDB() {
  console.log("[server] db initialization");
  //Connect to DB
  mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("[server] connected to db")
  );

  //init stories
  await new Story({
    title: "My amazing experience in BarberLand!",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum
        explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate.
         Voluptatum ducimus voluptates voluptas`,
    imgpath: "/img/story-1.jpg",
    imgalt: "hairstyle example",
    name: "Jena Jackson",
  }).save();

  await new Story({
    title: "Hairstyle you have never seen before",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum
        explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate.
         Voluptatum ducimus voluptates voluptas`,
    imgpath: "/img/story-2.jpg",
    imgalt: "hairstyle example",
    name: "Peter Jackson",
  }).save();

  //init service cards
  await new ServiceCard({
    title: "exceptional hairstyle",
    price: "10",
    styleType: "1",
    features: [
      "proffesional stylist",
      "unique hairstyle",
      "comfort",
      "affordable price",
      "cookies!",
    ],
    slug: "hairstyle",
  }).save();

  await new ServiceCard({
    title: "beard trimming",
    price: "15",
    styleType: "2",
    features: [
      "proffesional stylist",
      "fashionable beard",
      "friendly atmosphere",
      "free drinks",
      "cookies!",
    ],
    slug: "beard",
  }).save();

  await new ServiceCard({
    title: "straight razor shave",
    price: "20",
    styleType: "3",
    features: [
      "experienced barber",
      "extra clean shaving",
      "friendly atmosphere",
      "free drinks",
      "cookies!",
    ],
    slug: "shaving",
  }).save();

  //init services
  await new Service({
    title: "exceptional hairstyle",
    imgpath: "/img/card-1.jpg",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum
        explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate.
         Voluptatum ducimus voluptates voluptas`,
    slug: "hairstyle",
  }).save();

  await new Service({
    title: "beard trimming",
    imgpath: "/img/card-2.jpg",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum
        explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate.
         Voluptatum ducimus voluptates voluptas`,
    slug: "beard",
  }).save();

  await new Service({
    title: "straight razor shave",
    imgpath: "/img/card-3.jpg",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum
        explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate.
         Voluptatum ducimus voluptates voluptas`,
    slug: "shaving",
  }).save();

  //Close db connection
  mongoose.disconnect(() => console.log("[server] db connection closed"));
}
initDB();
