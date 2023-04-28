import axios from 'axios';

import { NEW_ADD_TODO,GET_ALL_TODO,GET_TO_EDIT,UPDATE_TODO,DELETE_TODO,TOGGLE_TAB} from './constType.js';

const API_URI = 'http://localhost:8000';


// to Add new todo task

export const newAddToDo = (data) => async(dispatch) =>{

    try{
       const res = await axios.post(`${API_URI}/todo`, {data} );
        
       dispatch({type: NEW_ADD_TODO, payload:res.data}); 

    }
    catch(error){
        console.log('Error while calling newAddToDo API',error.message);
    }
    
}

// to fetch all data 
export const getAllToDo = () => async(dispatch) =>{

    try{
       const res = await axios.get(`${API_URI}/todo`);
        
       dispatch({type: GET_ALL_TODO, payload:res.data});

    }
    catch(error){
        console.log('Error while calling GET_ALL_TODO API',error.message);
    }
    
}

// to fectch data by id to edit
export const getToEdit = (id) => async(dispatch) =>{

    try{
       const res = await axios.get(`${API_URI}/todo/${id}`);
        
       dispatch({type: GET_TO_EDIT, payload:res.data});

    }
    catch(error){
        console.log('Error while calling GET_TO_EDIT API',error.message);
    }
    
}

// to update data by id
export const UpateTask = (id,data) => async(dispatch) =>{

    try{
       const res = await axios.put(`${API_URI}/todo/${id}`,{data});
        
       dispatch({type: UPDATE_TODO, payload:res.data});

    }
    catch(error){
        console.log('Error while calling UPDATE_TODO API',error.message);
    }
    
}

// to delete data by id
export const DeleteTask = (id) => async(dispatch) =>{

    try{
       const res = await axios.delete(`${API_URI}/todo/${id}`);
        
       dispatch({type: DELETE_TODO, payload:res.data});

    }
    catch(error){
        console.log('Error while calling DELETE_TODO API',error.message);
    }
    
}


export const toggleTab = (tab) => async(dispatch) =>{
    dispatch({type:TOGGLE_TAB,selected:tab});
}