import React from 'react';
import styled from 'styled-components';

const TodoItemContainer = styled.div`
    background: #fff;
    border-radius: 8px;
    margin-top: 8px;
    padding: 16px;
    position: relative;
    box-shadow: 0 4px 8px grey;
`;

const ButtonContainer = styled.div`
    position: absolute;
    right: 12px;
    bottom: 12px;
`; 

const Button = styled.button`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    display: inline-block;
`;

const CompletedButton = styled(Button)`
    background-color: #22ee22;
`; 

const RemoveButton = styled(Button)`
    background-color: #ee2222;
    margin-left: 8px;
`; 




const TodoListItem = ({ todo, onRemoveClick, onCompleateClick }) => (
    <TodoItemContainer>
        <h3>{ todo.text }</h3>
        <ButtonContainer>
            {!todo.isCompleted && 
                <CompletedButton
                    onClick={() => onCompleateClick(todo.id)}
                >
                    Mark as Completed
                </CompletedButton>
            }
            <RemoveButton
                onClick={() => onRemoveClick(todo.id)}
            >
                Remove
            </RemoveButton>
        </ButtonContainer>
    </TodoItemContainer>
);

export default TodoListItem;