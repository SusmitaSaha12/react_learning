import React from 'react';
import './TodoListItem.css';

const TodoListItem = ({ todo, onRemoveClick, onCompleateClick }) => (
    <div className='todo-item-container'>
        <h3>{ todo.text }</h3>
        <div className='buttons-container'>
            {!todo.isCompleted && 
                <button 
                    className='completed-button'
                    onClick={() => onCompleateClick(todo.id)}
                >
                    Mark as Completed
                </button>
            }
            <button 
                className='remove-button'
                onClick={() => onRemoveClick(todo.id)}
            >
                Remove
            </button>
        </div>
    </div>
);

export default TodoListItem;