const express = require("express");
const mongoose = require("mongoose");
const Period = require("./models/period.model");
const app = express();
const PORT = 8080;

app.use(express.json());

app.post("/api/periods", async (req, res) => {
  try {
    const period = await Period.create(req.body);
    res.status(200).json(period);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/periods", async (req, res) => {
  try {
    const periods = await Period.find({});
    res.status(200).json(periods);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(
    "mongodb+srv://na:mongodbpassword@schoolorganisationwebsi.dkfx1.mongodb.net/?retryWrites=true&w=majority&appName=SchoolOrganisationWebsiteDB"
  )
  .then(() => {
    console.log("Connected to database");
    app.listen(PORT, () =>
      console.log(`Server is running on http://localhost:${PORT}`)
    );
  })
  .catch(() => console.log("Connection failed"));
