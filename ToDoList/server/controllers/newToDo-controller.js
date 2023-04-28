import newToDoModel from "../models/addNewToDo-model.js";


export const addNewToDo = async(req,res) =>{
    try{
        const newAb = await newToDoModel.create({
            data: req.body.data,
            createdAt: Date.now()
        })
    
        await newAb.save();
    
        return res.status(200).json(newAb);
    }
    catch(error){
       return  res.status(500).json(error.message);
    }
    

}

export const getAllTodo = async(req,res) =>{
    try{
        const allTodo = await newToDoModel.find().sort({createdAt: -1});
        return res.status(200).json(allTodo);
        }
        catch(error){
            return  res.status(500).json(error.message);
    
    }
    
    }

    export const getTaskToEdit = async(req,res) =>{
        try{
            console.log(req.params.id);
            const oneToDo = await newToDoModel.findById(req.params.id);
            
            const toggle = await newToDoModel.findByIdAndUpdate(
                {_id : req.params.id},
                {status: !oneToDo.status} 
            );

            await toggle.save();

            return res.status(200).json(toggle);
            }
            catch(error){
                return  res.status(500).json(error.message);
        
        }
        
    }    

    export const updateTask = async(req,res) =>{
        try{
            
            await newToDoModel.findByIdAndUpdate(
                {_id : req.params.id},
                {data: req.body.data} 
            )

           const toggle = await newToDoModel.findById(req.params.id);
            return res.status(200).json(toggle);
            }
            catch(error){
                return  res.status(500).json(error.message);
        
        }
        
    } 

    export const deleteTask = async(req,res) =>{
        try{
            
            const del = await newToDoModel.findByIdAndDelete(req.params.id)

            return res.status(200).json(del);
            }
            catch(error){
                return  res.status(500).json(error.message);
        
        }
        
    }