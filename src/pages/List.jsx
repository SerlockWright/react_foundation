import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import clsx from 'clsx';

import Button from '../components/Button';

function List() {
  const [title, setTitle] = React.useState('');
  const [todos, setTodos] = React.useState([
    { title: 'learn javascript', completed: false },
    { title: 'learn react', completed: false },
    { title: 'learn angular', completed: false },
  ])
  const dataTodo = todos.map(todo => ({
    ...todo,
    id: uuidv4()
  }));

  function onChangeTitle(e) {
    const { value } = e.target;
    setTitle(value)
  }

  function handleAddTodo() {
    console.log("handleAddTodo", title)
    setTodos(prevState => {
      const item = {
        title,
        completed: false,
        id: uuidv4()
      }
      return [...prevState, item]; 
    })
  }

  function handleUpdateCompleted(todoId) {
    const clonedTodo = JSON.parse(JSON.stringify(dataTodo)); // deep clone
    const todoIndex = clonedTodo.findIndex(todo => todo.id === todoId);
    if(todoIndex > -1) {
      clonedTodo[todoIndex].completed = !clonedTodo[todoIndex].completed;
      setTodos(clonedTodo);
    }
  }

  console.log('todos: ', todos)

  return (
    <div>
      <input type="text" onChange={onChangeTitle} />
      <Button 
        buttonText='Add Todo' 
        onClick={handleAddTodo}
      />
      {todos.length > 0 ? (
        <>
          {dataTodo.map((todo) => {
              // inline style
              const style = {
                textDecoration: todo.completed ? 'line-through' : 'none',
                fontWeight: 'bold'
              }
              return (
                <React.Fragment key={todo.id}>
                  <div >
                    <div style={style}>
                      Title: {todo.title} - {todo.id}<br />
                    </div>
                    <div 
                      // className={todo.completed ? 'box border box-solid mention' : 'box border box-solid'}
                      // className={`box border box-solid ${todo.completed ? 'mention' : ''}`}
                      className={clsx(
                        'box border box-solid',
                        todo.completed && 'mention',
                        todo.completed ? 'line-through' : 'none',
                      )}
                    >
                      Complete: {todo.completed ? 'true' : 'false'}
                    </div>
                    <Button
                      buttonText='Update Completed'
                      onClick={() => handleUpdateCompleted(todo.id)}
                    />
                    
                  </div>
                  <hr />
                </React.Fragment>
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