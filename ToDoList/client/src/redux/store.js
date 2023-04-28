
import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {newToDoReducer} from './reducers/newToDo_reducer.js';
import {tabReducer} from './reducers/tabReducer.js';

const reducer = combineReducers({
    todo : newToDoReducer,
    currentTab: tabReducer
});
const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
    
);
export default store;