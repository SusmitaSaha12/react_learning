import { createStore, combineReducers, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import { todos } from './todos/reducers';


const reducers = {
    todos
};

const rootReducers = combineReducers(reducers);

export const configureStore = () => createStore(
    rootReducers,
    // redux dev tool extension configure
    /* window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()  */
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);