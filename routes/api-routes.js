const { response } = require("express");
const db = require("../models");
//const Transaction = require("../seeders/seed");

module.exports = function(app) {
    app.get("/api/workouts", (req, res) => {
        db.find({})
            .then(data => {
            res.json(data);
            })
            .catch(err => {
            res.status(400).json(err);
            });
    });
    app.put("/api/workouts/:id", (req, res) => {
        var body = req.body;
    db.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(data => {
        res.json(data);
        })
        .catch(err => {
        res.status(400).json(err);
        });
    });

    app.post("/api/workouts", ({ body }, res) => {
        db.create(body)
        .then(data => {
        res.json(data);
        })
        .catch(err => {
        res.status(400).json(err);
        });
    });

    app.get("/api/workouts/range", (req, res) => {
    db.find({})
        .then(data => {
        res.json(data);
        })
        .catch(err => {
        res.status(400).json(err);
        });
    });

};