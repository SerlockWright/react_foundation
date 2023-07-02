import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Button from '../components/Button';

function List() {
  const [title, setTitle] = React.useState('');
  const [todos, setTodos] = React.useState([
    { title: 'learn javascript'}
  ])
  // const dataTodo = todos.map(todo => ({
  //   ...todo,
  //   id: uuidv4()
  // }));

  function onChangeTitle(e) {
    const { value } = e.target;
    setTitle(value)
  }

  function handleAddTodo() {
    console.log("handleAddTodo", title)
    setTodos(prevState => {
      const item = {
        title,
        id: uuidv4()
      }
      return [...prevState, item]; 
    })
  }

  return (
    <div>
      <input type="text" onChange={onChangeTitle} />
      <Button 
        buttonText='Add Todo' 
        onClick={handleAddTodo}
      />
      {todos.length > 0 ? (
        <>
          {todos
            .map(todo => ({
              ...todo,
              id: uuidv4()
            }))
            .map((todo, index) => {
              return (
                <div key={todo.id}>
                  Title: {todo.title} - {todo.id}
                </div>
              )
          })}
        </>
      ) : (
        <>no data</>
      )}
    </div>
  )
}

export default List
// array: 1 2 3 4 5
// index: 0 1 2 3
// UI:    1 2 3 4