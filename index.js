const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const Period = require("./models/period.model");
const app = express();
const PORT = 8080;

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
  );
}

app.use(cors())
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

app.get("/api/periods/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const periods = await Period.findById(id);
    res.status(200).json(periods);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/periods/:category/:categoryFilter", async (req, res) => {
  try {
    let { category, categoryFilter } = req.params;
    
    if (category == "id") {
      category = "_" + category
    }

    titleCaseFilter = toTitleCase(categoryFilter)

    query = {[category] : titleCaseFilter}
    const period = await Period.find(query);
    res.status(200).json(period);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.put("/api/periods/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const period = await Period.findByIdAndUpdate(id, req.body)
    res.status(200).json(period)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
});

mongoose
  .connect(
    "mongodb+srv://na:mongodbpassword@schoolorganisationwebsi.dkfx1.mongodb.net/timetable?retryWrites=true&w=majority&appName=SchoolOrganisationWebsiteDB"
  )
  .then(() => {
    console.log("Connected to database");
    app.listen(PORT, () =>
      console.log(`Server is running on http://localhost:${PORT}`)
    );
  })
  .catch(() => console.log("Connection failed"));
