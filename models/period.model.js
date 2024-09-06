const mongoose = require("mongoose");

const PeriodSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter period name"],
  },

  time: {
    type: String,
    required: [true, "Please enter time of period"],
  },

  day: {
    type: String,
    required: [true, "Please enter day of period"],
  },

  note: {
    type: String,
    required: false,
  },
});

const Period = mongoose.model("Period", PeriodSchema);

module.exports = Period;
