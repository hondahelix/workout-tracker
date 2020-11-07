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

// routes
//require("./seeders/seed")
//app.use(require("./routes/api.js"));
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);
// app.use(require("./routes/html.js"));
//app.use(require("./public/api.js"));


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});