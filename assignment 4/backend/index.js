const express = require("express");
const connect = require("./config/db");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userController = require("./routes/user.route");

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/", userController);

app.listen(3456, async () => {
  try {
    await connect();
    console.log("i am listening on 3456");
  } catch (error) {
    return res.send(error.message);
  }
});
