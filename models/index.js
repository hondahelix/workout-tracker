module.exports = {
    Workout: require("./Workout"),
}
// const mongoose = require("mongoose");

// const Schema = mongoose.Schema;

// const workoutSchema = new Schema({
//     date: {
//         type: Date,
//         default: Date.now
//     },
//     exercises:[{
//         type: {type: String, required:true},
//         name: {type: String, required:true},
//         duration: {type: Number},
//         weight: {type: Number},
//         reps: {type: Number},
//         sets: {type: Number}
//     }]
// });

// // workoutSchema.methods.addExercises = function(body) {
// //     console.log("---------");
// //     console.log(this.exercises);
// //     console.log(body);
// //     console.log("---------");
// //     //this.exercises = [{type: body.type, name: body.name, duration: body.duration, weight: body.weight, reps: body.reps, sets: body.sets}];
// //     //this.exercises.push([body.type, body.name, body.duration, body.weight, body.reps, body.sets]);
// //     this.exercises = [body];
// //     return this.exercises;
// //   };


// module.exports = mongoose.model("Workout", workoutSchema);