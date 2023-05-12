const mongoose = require("mongoose");
const AccountSchema = mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Account", AccountSchema);
