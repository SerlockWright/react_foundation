import React from 'react'
import Button from '../components/Button';

function createInitialTodo() {
  console.log('createInitialTodo')
  return [
    { title: 'javascript' , id: 1}
  ]
}

function StateHook() {
  const [, setForceUpdate] = React.useState(Date.now());
  // const [todos, setTodos] = React.useState(createInitialTodo()); // Passing the initial state directly: createInitialTodos() is only used for the initial render, you’re still calling this function on every render

  const [todos, setTodos] = React.useState(createInitialTodo); // Passing the initializer function: you’re passing createInitialTodos, which is the function itself. If you pass a function to useState, React will only call it during initialization.

  console.log('StateHook ------------>', todos)
  return (
    <div>
      <h5>Test force update</h5>
      <Button buttonText='Force Update' onClick={() => setForceUpdate(Date.now())} />

      <h5>Closure  useState</h5>
      <div>Refer:
        Js: https://codesandbox.io/s/closure-javascript-dtoutl?file=/src/index.js <br />
        React: https://codesandbox.io/s/usestate-array-async-f4bubk?file=/src/App.js
      </div>

    </div>
  )
}

export default StateHook