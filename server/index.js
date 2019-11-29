const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require('cors');
const app = express();

dotenv.config();

//Import Routes
const authRoute = require("./routes/auth");
const profileRoute = require("./routes/profile");
const storiesRoute = require("./routes/stories");

//Connect to DB
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to db")
);

let corsOptions = {
  exposedHeaders: "auth-token"
}

//Middleware
app.use(express.json());
app.use(cors(corsOptions));


//Route Middlewares
app.use("/api/user", authRoute);
app.use("/api/profile", profileRoute);
app.use("/api/stories", storiesRoute);

app.listen(3000, () => console.log("server up and running"));
