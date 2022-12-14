import React, { useState } from "react";
import { connect } from "react-redux";
import { addNewTodo } from "./thunks";
import { getTodos } from "./selectors";
import "./NewTodoForm.css";

const NewTodoForm = ({ todos, onCreateClick}) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="new-todo-form">
      <input
        className="new-todo-input"
        placeholder="Type Your New Todo Item"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
      />
      <button 
        className="new-todo-button"
        onClick={() => {
          const isDuplicateText = 
            todos.some(todo => todo.text === inputValue);
          if(!isDuplicateText){
            onCreateClick(inputValue);
            setInputValue('');
          } 
        }}
      >Create Todo</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: getTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCreateClick: text => dispatch(addNewTodo(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
