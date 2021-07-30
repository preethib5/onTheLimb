const express = require("express");
const router = express.Router();
const fs = require("fs");
const uniqid = require("uniqid");

const exerciseDetails = () => {
    const exerciseDetailsData = fs.readFileSync("./data/exercise.json");
    const parsedExerciseDetailsData = JSON.parse(exerciseDetailsData)
    return parsedExerciseDetailsData;
}

router.get('/', (req, res) => {
    const exerciseList = exerciseDetails();
    res.status(200).json(exerciseList);
    //console.log("Hello")
})

module.exports = router;