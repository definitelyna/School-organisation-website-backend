const mongoose = require("mongoose")

const PeriodSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter name"],
  },

  day: {
    type: String,
    required: [true, "Please enter day"],
  },

  startTime: {
    type: String,
    required: [true, "Please enter start time"],
  },

  endTime: {
    type: String,
    required: [true, "Please enter end time"],
  },

  note: {
    type: String,
    required: false,
  },
});

const Period = mongoose.model("Period", PeriodSchema);

module.exports = Period;
