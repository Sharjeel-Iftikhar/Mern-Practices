require('dotenv').config()
const express = require('express')
const { default: mongoose } = require('mongoose')
const workouts = require('./routes/workouts.js')

// express app
const app = express()

// middleware 

app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, res.method)
    next()
})

app.use('/api/workouts',workouts)

// connect to db
mongoose.connect(process.env.MONG_URI)
    .then(() => {
        // listen to app
        app.listen(process.env.PORT, () => {
            console.log("Connected to db & listening to port", process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })



