const Mongoose = require("mongoose");
const { Schema } = Mongoose;

// Content Schema
const TestSchema = new Schema({
  data: {
    type: Schema.Types.Map,
    required: true,
  },
});

module.exports = Mongoose.model("Webhook_test", TestSchema);
