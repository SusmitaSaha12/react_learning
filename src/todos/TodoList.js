import React from 'react';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { connect } from 'react-redux';
import { removeTodo, compleateTodo } from './action';
import './TodoList.css';


const TodoList = ({ todos = [], onRemoveClick, onCompleateClick}) => {
  return (
    <div className="list-wrapper">
      <NewTodoForm />
      <br />
      {todos.map((todo) => (
        <TodoListItem key={todo.text} todo={todo} 
          onRemoveClick={onRemoveClick}
          onCompleateClick={onCompleateClick}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onRemoveClick: text => dispatch(removeTodo(text)),
  onCompleateClick: text => dispatch(compleateTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);