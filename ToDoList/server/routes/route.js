import express from "express";

import {addNewToDo,getAllTodo,getTaskToEdit,updateTask,deleteTask} from "../controllers/newToDo-controller.js";

const router = express.Router();

// this call back function in async so we can not use this our bussiness logic here 
// we have to use controller for this

// to add new task
router.post('/todo', addNewToDo);
// to fetch all tasks
router.get('/todo', getAllTodo)
// to fetch data by id to edit
router.get('/todo/:id',getTaskToEdit)
// to update data by id
router.put('/todo/:id',updateTask)
// to delete data by id
router.delete('/todo/:id',deleteTask)


export default router;