import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const Connection = () => {
    const MONG_URL = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.xsvuosz.mongodb.net/?retryWrites=true&w=majority`;

    mongoose.connect(MONG_URL, {useNewUrlParser: true, useUnifiedTopology: true,});

    mongoose.connection.on('connected', () => {
        console.log("Connection Established with MongoDB");
    })
    mongoose.connection.on("disconneted", () => {
        console.log("Connection Disconneted with MongoDB");

    })

    mongoose.connection.on("error", (error) => {
        console.log("Error in Connecting with MonsgoDB", error.message);
    })
}
export default Connection;