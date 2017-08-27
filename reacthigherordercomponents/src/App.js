import React from 'react';

const withTodosNull = Component => props =>
  !props.todos ? null : <Component {...props} />;
const withTodosEmpoty = Component => props =>
  !props.todos.length
    ? <div>
        <p>You have no Todos.</p>
      </div>
    : <Component {...props} />;

const withLoadingIndicator = Component => ({
  isLoadingTodos,
  ...others
}) =>
  isLoadingTodos
    ? <div>
        <p>Loading todos ...</p>
      </div>
    : <Component {...others} />;

const TodoListOne = withTodosEmpty(TodoList);
const TodoListTwo = withTodosNull(TodoListOne);
const TodoListThree = withLoadingIndicator(TodoListTwo);

function TodoList({ todos, isLoadingTodos }) {
  return (
    <div>
      {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
    </div>
  );
}

function App(props) {
  return (
    <TodoList
      todos={props.todos}
      isLoadingTodos={props.isLoadingTodos}
    />
  );
}