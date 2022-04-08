const express = require("express");
const connect = require("./src/configs/db");
const app = express();
const cors = require("cors");
const restaurantRoute = require("./src/routes/restaurantRoute");

app.use(express.json());
app.use(cors());

app.use("/", restaurantRoute);

app.listen(2345, async () => {
  try {
    await connect();
    console.log("listening on 2345");
  } catch (error) {
    console.log(error.message);
  }
});
