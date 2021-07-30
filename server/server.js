const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8080;
const exercise = require("./routes/exercise");

app.use(cors());
app.use(express.json());


app.use("/exercise", exercise);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})