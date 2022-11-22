import React, { useEffect } from 'react';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { connect } from 'react-redux';
import { compleateTodo } from './action';
import { loadTodos, deletTodo } from './thunks';
import './TodoList.css';


const TodoList = ({ todos = [], onRemoveClick, onCompleateClick, isLoading, startLoadingTodos }) => {
  useEffect(() => {
    startLoadingTodos();
  }, []);

  return (
    isLoading ? <div>Loading Todos...</div> :
    <div className="list-wrapper">
      <NewTodoForm />
      <br />
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} 
          onRemoveClick={onRemoveClick}
          onCompleateClick={onCompleateClick}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
  isLoading: state.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  onRemoveClick: id => dispatch(deletTodo(id)),
  onCompleateClick: text => dispatch(compleateTodo(text)),
  startLoadingTodos: () => dispatch(loadTodos()),
  // onDisplayAlertClicked: text => dispatch(displayAlert(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);