const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
  _id: ObjectId,
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
