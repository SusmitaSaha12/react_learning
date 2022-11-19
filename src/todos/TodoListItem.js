import React from 'react';
import './TodoListItem.css';

const TodoListItem = ({ todo, onRemoveClick }) => (
    <div className='todo-item-container'>
        <h3>{ todo.text }</h3>
        <div className='buttons-container'>
            <button className='completed-button'>Mark as Completed</button>
            <button 
                className='remove-button'
                onClick={() => onRemoveClick(todo.text)}
            >
                Remove
            </button>
        </div>
    </div>
);

export default TodoListItem;