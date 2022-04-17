const express = require("express");
const { postClass, getClass } = require("../controllers/classController");
const {
  addTeacher,
  allTeacher,
  sortHigh,
  sortLow,
  filMale,
  filFemale,
} = require("../controllers/teacherController");
const { registerUser, loginUser } = require("../controllers/userController");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/addteacher/:_id", addTeacher);
router.get("/:_id", allTeacher);
router.get("/male/:_id", filMale);
router.get("/female/:_id", filFemale);
router.get("/high/:_id", sortHigh);
router.get("/low/:_id", sortLow);
router.post("/addClass/:_id", postClass);
router.get("/getClass/:_id", getClass);

module.exports = router;
