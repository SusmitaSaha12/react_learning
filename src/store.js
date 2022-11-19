import { createStore, combineReducers} from "redux";

const reducers = {};

const rootReducers = combineReducers(reducers);

export const configureStore = () => createStore(rootReducers);