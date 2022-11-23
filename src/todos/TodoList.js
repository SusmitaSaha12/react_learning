import React, { useEffect } from 'react';
import styled from 'styled-components';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { connect } from 'react-redux';
import { getTodosLoading, getCompletedTodos, getIncompletedTodos } from './selectors';
import { loadTodos, deletTodo, compleateTodoRequest } from './thunks';

const ListWrapper = styled.div`
  max-width: 700px;
  margin: auto;
`;

const TodoList = ({ incompletedTodos, completedTodos, onRemoveClick, onCompleateClick, isLoading, startLoadingTodos }) => {
  useEffect(() => {
    startLoadingTodos();
  }, []);

  return (
    isLoading ? <div>Loading Todos...</div> :
    <ListWrapper>
      <NewTodoForm />
      <br />
      <h1>Incompleted Todos : </h1>
      {incompletedTodos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} 
          onRemoveClick={onRemoveClick}
          onCompleateClick={onCompleateClick}
        />
      ))}
      <br/>
      <h1>Completed Todos : </h1>
      {completedTodos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} 
          onRemoveClick={onRemoveClick}
          onCompleateClick={onCompleateClick}
        />
      ))}
    </ListWrapper>
  );
};

const mapStateToProps = (state) => ({
  isLoading: getTodosLoading(state),
  completedTodos: getCompletedTodos(state),
  incompletedTodos: getIncompletedTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
  onRemoveClick: id => dispatch(deletTodo(id)),
  onCompleateClick: id => dispatch(compleateTodoRequest(id)),
  startLoadingTodos: () => dispatch(loadTodos()),
  // onDisplayAlertClicked: text => dispatch(displayAlert(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);