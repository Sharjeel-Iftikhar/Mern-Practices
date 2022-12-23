const Workout = require('../models/workoutmodel.js')
const mongoose = require('mongoose')
//To  get all WorkOuts
const getAllworkouts = async(req,res)=>{
    const workouts =await Workout.find({})

    res.status(200).json(workouts)
}

// To get single workout
const getworkout = async(req,res)=>{
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:error.message})

    }
    const {id} = req.params
    console.log(id);
    const workout = await Workout.findById({_id:id})

    if(!workout){
        return res.status(404).json({error:'No such workout found'})
    }
    res.status(200).json(workout)
}
// To Post a New WorkOut
 const createWorkout = async(req,res)=>{
    const{title,reps,load} = req.body
    try{
        const workout = await Workout.create({title,reps,load})
        res.status(200).json(workout)

    }catch(error)
    {
        res.status(400).json({error:error.message})

    }
 }

 // To Delete a workout
 const deleteworkout = async(req,res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:error.message})

    }
    const workout = await Workout.findOneAndDelete({_id:id})
    if(!workout){
        return res.status(400).json({error:'No such workout found'})
    }
    res.status(200).json(workout)
 }


module.exports = {
    createWorkout,
    getAllworkouts,
    getworkout,
    deleteworkout
 }