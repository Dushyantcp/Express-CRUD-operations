const mongoose = require("mongoose");

const AppSchema = mongoose.Schema({
  message: String,
  name: {
    type: String,
    required: true
  },
  age: Number,
});

module.exports = mongoose.model("App", AppSchema);