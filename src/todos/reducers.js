import {
  CREATE_TODO,
  REMOVE_TODO,
  COMPLEATE_TODO,
  LOAD_TODOS_IN_PROGRESS,
  LOAD_TODOS_SUCCESS,
  LOAD_TODOS_FAILURE,
} from "./action";

export const isLoading = (state = false, action) => {
  const { type } = action;

  switch (type) {
    case LOAD_TODOS_IN_PROGRESS:
      return true;
    case LOAD_TODOS_SUCCESS:
    case LOAD_TODOS_FAILURE:
      return false;
    default:
      return state;
  }
};

export const todos = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO: {
      const { todo } = payload;
      return state.concat(todo);
    }
    case REMOVE_TODO: {
      const { todo: removedTodo } = payload;
      return state.filter((todo) => todo.id !== removedTodo.id);
    }
    case COMPLEATE_TODO: {
      const { text } = payload;
      return state.map((todo) =>
        todo.text === text ? { ...todo, isCompleated: true } : todo
      );
    }
    case LOAD_TODOS_SUCCESS: {
        const { todos } = payload;
        return todos;
    }
    case LOAD_TODOS_IN_PROGRESS:
    case LOAD_TODOS_FAILURE:
    default:
      return state;
  }
};
