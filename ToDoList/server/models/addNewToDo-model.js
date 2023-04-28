import mongoose from "mongoose";

const newToDoSchema = mongoose.Schema({
    data:{
        type: String,
        required: true
    },
    status:{
        type : Boolean,
        default : false
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

// model receive first arugument as collection name and second argument as schema
const newToDoModel = mongoose.model("newToDo", newToDoSchema);

export default newToDoModel;