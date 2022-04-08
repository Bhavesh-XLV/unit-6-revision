const express = require("express");
const { route } = require("express/lib/application");
const {
  getAllRestaurant,
  addRestaurant,
} = require("../controllers/restaurant.controller");
const router = express.Router();

router.route("/").get(getAllRestaurant);
router.route("/addRestaurant").post(addRestaurant);

module.exports = router;
