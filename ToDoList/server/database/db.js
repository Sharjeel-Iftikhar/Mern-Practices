import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DB_USER = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {
    console.log("DB_USER", DB_USER);
    const MOONSE_URI = `mongodb://${DB_USER}:${DB_PASSWORD}@ac-smq4szt-shard-00-00.ign1o2g.mongodb.net:27017,ac-smq4szt-shard-00-01.ign1o2g.mongodb.net:27017,ac-smq4szt-shard-00-02.ign1o2g.mongodb.net:27017/?ssl=true&replicaSet=atlas-24tlye-shard-0&authSource=admin&retryWrites=true&w=majority`

    mongoose.connect( MOONSE_URI, {useNewUrlParser : true});

    mongoose.connection.on("connected", () => {
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