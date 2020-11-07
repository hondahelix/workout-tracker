const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema= new Schema({
    type: {type: String, required:true},
    name: {type: String, required:true},
    duration: {type: Number},
    weight: {type: Number},
    reps: {type: Number},
    sets: {type: Number}
});

module.exports = mongoose.model("Exercise", exerciseSchema);
  