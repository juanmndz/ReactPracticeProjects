First what happens when your todos are null? You would apply a conditonal rendering to opt-out earlier from your rendering

function TodoList({ todos }) {
  if (!todos) {
    return null;
  }

  return (
    <div>
      {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
    </div>
  );
}


Second what happens when your todos are not null but empty? You would show a message in conditonal rendering to give your app better UX
  if (!todos.length) {
    return (
      <div>
        <p>You have no Todos.</p>
      </div>
    );
  }


Third, since the todos arrive asynchronously from your backend, you want to show a loading indicator in case the todos are still in a pending request. You would get one more property, such as ‘isLoadingTodos’, to know about the loading state.

function TodoList({ todos, isLoadingTodos }) {
  if (isLoadingTodos) {
    return (
      <div>
        <p>Loading todos ...</p>
      </div>
    );
  }


There are a lot of edge cases for conditonal rendering can aadd up in a single component. Higher order components can solve this issue.Edge cases as reusueable functionalities.

Entering React's Higher Order Components

Higher Order components take a component and optional arguments and return and enhance component of the input component.

Takes an input and returns another function. Returning a stateless function.
As mentioned, the enhanced component doesn’t render anything. Let’s add the rendered output of the enhanced component.

First the conditonal rendering with the tenary operator. It decides if to show or not. 

Props are passed to the component tree to the input component.
