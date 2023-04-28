import React from "react";

import { newAddToDo } from "../redux/actions";

import { useDispatch } from "react-redux";

const MiniForm = () => {
    const [formData, setFormData] = React.useState({
        toDoTask:"",
    })

    const dispatch = useDispatch();

    // function to handle changes in the form
    const handleChange = (event) => {
        const {name,value,type,checked} = event.target
        setFormData(prevData => {
            return{
                ...prevData,
                [name] : type === "checkbox" ?  checked : value
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault();
        dispatch(newAddToDo(formData.toDoTask));
        setFormData(prevData => ({...prevData, toDoTask:""}));
        
    }

    return (
        <form className="form--section"
            onSubmit={handleSubmit}
            >
            <input type="text" 
            placeholder="Add a todo..."
            onChange={handleChange}
            name="toDoTask"
            value={formData.toDoTask}/>
        </form>
    )
}
export default MiniForm;