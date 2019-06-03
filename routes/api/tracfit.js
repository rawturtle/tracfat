const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
var models = require('../../models/tracfit')

// @route GET api/exercise
// @desc Get all exercises
// @access public
router.get('/exercise', (req, res) => {
    models.Exercise.find()
        .then(exercise => res.json(exercise))
});

// @route POST api/exercise
// @desc Create an Exercise
// @access Public
router.post('/exercise', (req, res) => {
    const newExercise = new models.Exercise({
        name: req.body.name,
        type: req.body.type,
        reps: req.body.reps,
        time: req.body.time,
        user: req.body.userID
    });

    newExercise.save()
        .then(exercise => res.json(exercise))
        .catch(err => res.json(err))
});



// @route DELETE api/exercise/:id
// @desc Delete an Exercise
// @access Public
router.delete('/exercise/:id', (req, res) => {
    Exercise.findById(req.params.id).then(exercise =>
        exercise.remove().then(() => res.json({success: true}))
    ).catch(err => res.status(404).json({success: false}));
});



// @route POST api/exercise
// @desc Create an Exercise
// @access Public
router.post('/user', (req, res) => {
    const newUser = new models.User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,

    });
    newUser.save()
        .then(user => res.json(user))
        .catch(err => res.status(404).json({error: err.message}))
});

// Get user ID for auth
router.get('/user', (req, res) => {
    models.User.findOne({ email: req.headers.email })
    .then(user => {
        bcrypt.compare(req.headers.password, user.password, function (err, result) {
        if (result === true) {
            res.json(user)
        } else {
            res.status(404).json({error: err.message})
        }
      })
    })
    .catch(err => res.status(404).json({error: err.message}))
});

module.exports = router;