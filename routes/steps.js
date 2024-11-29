const express = require("express");
const router = express.Router();

const {
getAllSteps, createSteps, getSingleStep, updateStep, deleteStep,
getYearSteps
} = require("../controllers/steps");

router.get("/", getAllSteps);
router.post("/", createSteps);
router.get("/:date", getSingleStep);
router.patch("/:date", updateStep);
router.delete("/:date", deleteStep);

router.get("/year/:year", getYearSteps);

module.exports = router;
