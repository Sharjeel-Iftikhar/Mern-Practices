
import React from "react";
import { useDispatch } from 'react-redux';
import {toggleTab}from '../redux/actions/index.js';



import {TABS} from '../redux/actions/constType.js';
const Tabs = ({currentTab}) => {
    const dispatch = useDispatch();
    return(
        TABS.map(tabs => (
         <button 
         className = {tabs === currentTab ? 'button--section selected' : 'button--section'}
         onClick = {() => dispatch(toggleTab(tabs))}>
                {tabs}
         </button>   
        ))
    )
}
export default Tabs;