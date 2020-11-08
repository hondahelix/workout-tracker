//const router = require("express").Router();
const db = require("../models");
//const Transaction = require("../seeders/seed");

module.exports = function(app) {
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
            .then(data => {
            console.log(data);
            res.json(data);
            })
            .catch(err => {
            res.status(400).json(err);
            });
    });


    app.put("/api/workouts/:id", (req, res) => {
        var body = req.body;
        db.Workout.findByIdAndUpdate( req.params.id, {$push: {exercises: req.body}})
        .then(data => {
        res.json(data);
        })
        .catch(err => {
        res.status(4e00).json(err);
        });
    });
//type: body.type, name: body.name, duration: body.duration, reps: body.reps, sets: body.sets
    app.post("/api/workouts", (req, res) => {
        // const exercise = new db(req.body);
        // //console.log(exercise);
        //console.log(JSON.stringify(req.body));
        // exercise.addExercises(req.body);
        // console.log(exercise);
        db.Workout.create(req.body)
        .then((data) => {
          res.json(data);
        })
        .catch((err) => {
          res.status(400).json(err);
        });
    });

    app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
        .then(data => {
        res.json(data);
        })
        .catch(err => {
        res.status(400).json(err);
        });
    });

};