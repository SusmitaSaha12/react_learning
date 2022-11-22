import { createTodo, removeTodo, compleateTodo, loadTodosinProgress, loadTodosSuccess, loadTodosFailure } from "./action";

export const loadTodos = () => async ( dispatch, getState ) => {
    try {
        dispatch(loadTodosinProgress());
        const response = await fetch('http://localhost:8080/todos');
        const todos = await response.json();
        dispatch(loadTodosSuccess(todos));
    } catch (e) {
        dispatch(loadTodosFailure());
        dispatch(displayAlert(e));
    }
}

export const addNewTodo = text => async dispatch => {
    try {
        const body = JSON.stringify({
            text 
        });
        const response = await fetch('http://localhost:8080/todos',{
            headers: {
                'Content-Type': "application/json",
            },
            method: "post",
            body,
        });
        const todo = await response.json();
        dispatch(createTodo(todo));
    } catch(e){
        dispatch(displayAlert(e));
    }
}

export const deletTodo = id => async dispatch => {
    try {
        const response = await fetch(`http://localhost:8080/todos/${id}`,{
            method: "delete",
        });
        const todo = await response.json();
        dispatch(removeTodo(todo));
    } catch(e){
        dispatch(displayAlert(e));
    }
}

export const compleateTodoRequest = id => async dispatch => {
    try {
        const response = await fetch(`http://localhost:8080/todos/${id}/completed`,{
            method: "post",
        });
        const todo = await response.json();
        dispatch(compleateTodo(todo));
    } catch(e){
        dispatch(displayAlert(e));
    }
}

export const displayAlert = text => () => {
    alert(text);
}