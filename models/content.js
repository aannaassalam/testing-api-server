const Mongoose = require("mongoose");
const { Schema } = Mongoose;

// Content Schema
const ContentSchema = new Schema({
  _id: {
    type: Schema.ObjectId,
    auto: true,
  },

  title:{
    type: String
  },
  contentImg: {
    type: String,
  },

  cloudinary_id: {
    type: String,
  },
  content: {
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

module.exports = Mongoose.model("Content", ContentSchema);
