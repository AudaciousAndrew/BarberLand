const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();

dotenv.config();

//Import Routes
const authRoute = require("./routes/auth");
const profileRoute = require("./routes/profile");
const storiesRoute = require("./routes/stories");
const serviceCardsRoute = require("./routes/serviceCards");
const servicesRoute = require("./routes/services");
const subscriptionRoute = require("./routes/subscriptions");

const PORT = process.env.PORT || 8080;

//Connect to DB
mongoose.connect(
  process.env.MONGODB_URI || process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () =>
    console.log(
      `[server] connected to ${
        process.env.MONGODB_URI || process.env.DB_CONNECT
      }`
    )
);

let corsOptions = {
  exposedHeaders: "auth-token",
};

//Middleware
app.use(express.json());
app.use(cors(corsOptions));

//Route Middlewares
app.use("/api/user", authRoute);
app.use("/api/service", servicesRoute);
app.use("/api/subscription", subscriptionRoute);
app.use("/api/services/cards", serviceCardsRoute);
app.use("/api/profile", profileRoute);
app.use("/api/stories", storiesRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("../client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
  });
}

app.listen(PORT, () =>
  console.log(`[server] server up and running at port:${PORT}`)
);
