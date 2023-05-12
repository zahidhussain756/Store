const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  name: {
    type: String,
    // require: true,
  },
  description: {
    type: String,
    // require: true,
  },
  price: {
    type: String,
    // require: true,
  },
  image: {
    type: String,
  },
});
module.exports = mongoose.model("products", productSchema);
