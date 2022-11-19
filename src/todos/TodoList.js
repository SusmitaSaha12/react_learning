import React from 'react';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import './TodoList.css';


const TodoList = ({ todos = [{text: 'Hello'}] }) => {
  return (
    <div className="list-wrapper">
      <NewTodoForm />
      <br />
      {todos.map((todo) => (
        <TodoListItem todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;