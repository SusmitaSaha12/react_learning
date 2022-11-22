import { createStore, combineReducers, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import { todos, isLoading } from './todos/reducers';


const reducers = {
    todos,
    isLoading,
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