const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
var db = require("./models");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname+'/public'));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});
//require("./seeders/seed");

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});