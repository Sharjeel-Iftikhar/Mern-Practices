const express = require('express')
const {
    createWorkout,
    getAllworkouts,
    getworkout,
    deleteworkout
} = require('../controllers/workoutController.js')

const route = express.Router()
// To GET all workouts
route.get('/',getAllworkouts)

// To get particular ID
route.get('/:id',getworkout)

// POSt workout
route.post('/',createWorkout)

// Delete WorkOut
route.delete('/:id',deleteworkout)


module.exports = route