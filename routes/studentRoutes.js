const express = require("express");
const router = express.Router();

const studentController = require("../controllers/studentController");

// router.post("/", studentController.student_index);
router.post("/register", studentController.student_post);
router.get("/:id", studentController.student_get);
router.put("/update/:id", studentController.student_put);
router.delete("/:id", studentController.student_delete);

router.post("/profile/theme", studentController.profile_preference_post);
router.get("/profile/theme", studentController.profile_preference_get);

module.exports = router;
