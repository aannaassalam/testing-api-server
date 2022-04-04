const Mongoose = require("mongoose");
const { Schema } = Mongoose;

// ramzanTimeTable Schema
const RamzanTimeTableSchema = new Schema({
  _id: {
    type: Schema.ObjectId,
    auto: true,
  },
  islamicYear: {
    type: String,
    required: true,
  },

  englishYear: {
    type: String,
    required: true,
  },

  islamicMonthName: {
    type: String,
    required: true,
  },

  englishMonthName: {
    type: String,
    required: true,
  },

  day: {
    type: String,
    required: true,
  },

  dayName: {
    type: String,
    required: true,
  },

  sehri: {
    type: String,
    required: true,
  },

  iftari: {
    type: String,
    required: true,
  },

  isActive: {
    type: Boolean,
    default: true,
  },

  updated: Date,
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Mongoose.model("RamzanTimeTable", RamzanTimeTableSchema);
