const express = require("express");
const app = express();
const connect = require("./src/config/db");
const cors = require("cors");
const userRoute = require("./src/routes/userRoute");

app.use(express.json());
app.use(cors());
app.use("/", userRoute);

app.listen(4000, async () => {
  try {
    await connect();
    console.log("i am listen on 4000");
  } catch (error) {
    console.log(error.message);
  }
});
