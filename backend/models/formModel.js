const mongoose = require("mongoose");

const formSchema = mongoose.Schema({
  name: { type: String },
  description: { type: String },
  price: { type: String },
  image: { type: String },
});

module.exports = mongoose.model("userForm", formSchema);
