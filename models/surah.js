const Mongoose = require("mongoose");
const { Schema } = Mongoose;

// Surah Schema
const SurahSchema = new Schema({
  _id: {
    type: Schema.ObjectId,
    auto: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },

  content: {
    type: String,
    required: true,
  },

  language: {
    type: Schema.ObjectId,
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

module.exports = Mongoose.model("Surah", SurahSchema);
