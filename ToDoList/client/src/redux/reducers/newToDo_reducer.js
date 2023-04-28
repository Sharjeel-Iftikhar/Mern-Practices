import { NEW_ADD_TODO,GET_ALL_TODO,GET_TO_EDIT,UPDATE_TODO,DELETE_TODO} from "../actions/constType.js";

export const newToDoReducer = (state =[] , action) =>{
    switch(action.type){
        case NEW_ADD_TODO:
            return[action.payload, ...state];

        case GET_ALL_TODO:
            return action.payload; 

        case GET_TO_EDIT:
            return state.map(todo => (todo._id===action.payload._id ? {...todo, status : !todo.status}: todo))
        case UPDATE_TODO:
            return state.map(todo =>(todo._id === action.payload._id ? {...todo, data : action.payload.data}:todo))  
        case DELETE_TODO:
            return state.filter(todo => todo._id !== action.payload._id)  
            
        default:
            return state;
    }
}
