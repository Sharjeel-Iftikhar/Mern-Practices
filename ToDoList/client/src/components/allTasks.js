import React,{useEffect} from "react";
import {getAllToDo} from '../redux/actions/index.js'; 
import { useDispatch, useSelector } from 'react-redux';
import  AlltoDos  from "./taskList.js";
//compoenents
import Tabs from './tabs.js';

import { ALL_TODOS,ACTIVE_TODOS,COMPLETED_TODOS } from "../redux/actions/constType.js";


const AllTasks = () => {

    const dispatch = useDispatch();


    const uss = useSelector(state => state.todo);
    const currentTab = useSelector(state => state.currentTab);

    const getTasks= ()=> {
        if(currentTab === ALL_TODOS){
            return uss;
        }
        else if(currentTab === ACTIVE_TODOS){
            return uss.filter(todo => !todo.status);
        }
        else if(currentTab === COMPLETED_TODOS){
            return uss.filter(todo => todo.status);// jaha status true hoga wha show krega
        }
    }

    useEffect(() => {
        dispatch(getAllToDo());
    }, [])


    return (
        <article>
            <div className="button-area">
                <Tabs currentTab = {currentTab}/>

            </div>
            <ul>
                {getTasks().map(todo => (
                    
                        <AlltoDos 
                        key={todo._id}
                        toDo={todo}/> 
                      
                        ))
                }
            </ul>
            </article>
    )
}

export default AllTasks;