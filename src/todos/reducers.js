import { CREATE_TODO, REMOVE_TODO, COMPLEATE_TODO, loadTodosinProgress, loadTodosSuccess, loadTodosFailure, LOAD_TODOS_IN_PROGRESS, LOAD_TODOS_SUCCESS, LOAD_TODOS_FAILURE } from "./action";

export const isLoading = ( state = false, action) => {
    const { type } = action;

    switch(type) {
        case LOAD_TODOS_IN_PROGRESS:
            return true;
        case LOAD_TODOS_SUCCESS:
        case LOAD_TODOS_FAILURE:
            return false;
        default:
            return state;
    }
}

export const todos = (state = [], action) => {
    const {type, payload} = action;

    switch(type) {
    case CREATE_TODO: {
        const { text } = payload;
        const newTodo = {
            text,
            isCompleated: false,
        };
        return state.concat(newTodo);
    }
    case REMOVE_TODO: {
        const { text } = payload;
        return state.filter(todo => todo.text !== text);
    }
    case COMPLEATE_TODO: {
        const { text } = payload;
        return state.map(todo => todo.text === text ? {...todo, isCompleated: true} : todo);
    }
    default: 
        return state;
    }
}
