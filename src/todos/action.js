export const CREATE_TODO = 'CREATE_TODO';
export const createTodo = text => ({
    type: CREATE_TODO,
    payload: { text },
}); 

export const REMOVE_TODO = 'REMOVE_TODO';
export const removeTodo = text => ({
    type: REMOVE_TODO,
    payload: { text },
}); 

export const COMPLEATE_TODO = 'COMPLEATE_TODO';
export const compleateTodo = text => ({
    type: COMPLEATE_TODO,
    payload: { text },
});