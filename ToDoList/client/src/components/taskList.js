import React from "react";
import { useDispatch } from 'react-redux';
import { getToEdit } from '../redux/actions/index.js';
import {UpateTask} from '../redux/actions/index.js';
import {DeleteTask}from '../redux/actions/index.js'; 


const AlltoDos = (props) => {
    const dispatch = useDispatch();

    const [edit, setEdit] = React.useState(false);
    const[editText,setEditText] = React.useState(props.toDo.data);

    // styles element to add a line upon the task on clicking means its cmplted
    //styles elemet to hide the ToDotask text on clicking edit icon

    const styles = {
        display: edit ? "none" : "",
        textDecoration: props.toDo.status ? "line-through" : ""
    }

    function handleChange(event){
        const {value} = event.target;
        setEditText(value);
    }

    function handleSubmit(event){
        event.preventDefault();
        setEdit(prevState => !prevState);

        dispatch(UpateTask(props.toDo._id,editText));
        console.log(editText);
    }
    // console.log(props.toDo.data)
    return (

        <li className="toDolist--section"
        >
            <span style={styles}
            onClick={() => (dispatch(getToEdit(props.toDo._id)))}
            className="task--text"
            > 
                <div className="task--text">{props.toDo.data}</div>
            </span>
            <form
            style={{display: edit ? "inline" : "none"}}
            onSubmit={handleSubmit}
            >
                <input
                    type="input"
                    name="editText"
                    value={editText}
                    onChange={handleChange}
                    className="task--edit"
                />
            </form>

            <span className="icon"  onClick={()=> setEdit(prevState => !prevState)}>

                <i className="fa fa-pencil"></i>
            </span>
            <span className="icon" onClick={()=> dispatch(DeleteTask(props.toDo._id))}>
                <i className="fa fa-trash"></i>
            </span>
        </li>
    )
}
export default AlltoDos;