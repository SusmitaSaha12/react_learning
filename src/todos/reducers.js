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

const initialState = {
  isLoading: false,
  data: [],
};

export const todos = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO: {
      const { todo } = payload;
      return {
        ...state,
        data: state.data.concat(todo),
      };
    }
    case REMOVE_TODO: {
      const { todo: removedTodo } = payload;
      return {
        ...state,
        data: state.data.filter((todo) => todo.id !== removedTodo.id),
      }
    }
    case COMPLEATE_TODO: {
      const { todo: compleatedTodo } = payload;
      return {
        ...state,
        data: state.data.map((todo) =>
          todo.id === compleatedTodo.id ? { ...todo, isCompleted: true } : todo
        ),
      };
    }
    case LOAD_TODOS_SUCCESS: {
        const { todos } = payload;
        return {
          ...state,
          isLoading: false,
          data: todos
        }
    }
    case LOAD_TODOS_IN_PROGRESS: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case LOAD_TODOS_FAILURE: {
      return {
        ...state,
        isLoading: false,
      }
    }
    default:
      return state;
  }
};
