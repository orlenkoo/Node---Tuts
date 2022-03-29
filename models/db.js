const mongoose = require("mongoose");

mongoose.set("useCreateIndex", true); // This prevents collection.ensureIndex depreciation warning
mongoose.set("useFindAndModify", false); // This prevents current mongoose depreciation warning
mongoose.connect("mongodb://localhost:27017/myCovidApp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
