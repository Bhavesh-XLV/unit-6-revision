const express = require("express");
const { postClass, getClass } = require("../controllers/classController");
const {
  addTeacher,
  allTeacher,
  sortHigh,
  sortLow,
  filMale,
  filFemale,
  search,
} = require("../controllers/teacherController");
const { registerUser, loginUser } = require("../controllers/userController");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/addteacher/:_id", addTeacher);
router.get("/:school_id", allTeacher);
router.get("/:school_id/search/:name", search);
router.get("/male/:school_id", filMale);
router.get("/female/:school_id", filFemale);
router.get("/high/:school_id", sortHigh);
router.get("/low/:school_id", sortLow);
router.post("/addClass/:teacher_id", postClass);
router.get("/getClass/:teacher_id", getClass);

module.exports = router;
