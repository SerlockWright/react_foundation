import React from 'react'

import Button from '../components/Button'

function EffectHook() {
  const [count, setCount] = React.useState(Date.now())
  const [todos, setTodos] = React.useState([])

  React.useEffect(() => {
    console.log('useEffect dont have dependency');
    document.title = `You clicked ${count} times`;

    return () => {
      console.log('useEffect cleanup function dont have dependency')
    }
  })

  React.useEffect(() => {
    console.log('useEffect empty dependency')
    // call api
    // fetch('https://jsonplaceholder.typicode.com/todos')
    // .then(response => response.json())
    // .then(json => setTodos(json))

    return () => {
      console.log('useEffect cleanup function empty dependency')
    }
  }, []); // empty dependency array


  React.useEffect(() => {
    console.log('useEffect has dependency')

    return () => {
      console.log('useEffect cleanup function has dependency')
    }

  }, [count]); // dependency array


  React.useLayoutEffect(() => {
    console.log('useLayoutEffect dont have dependency');

    return () => {
      console.log('useLayoutEffect cleanup function dont have dependency')
    }
  })

  React.useLayoutEffect(() => {
    console.log('useLayoutEffect has dependency')

    return () => {
      console.log('useLayoutEffect cleanup function has dependency')
    }

  }, [count]); // dependency array

  React.useLayoutEffect(() => {
    console.log('useLayoutEffect empty dependency')
    // call api
    // fetch('https://jsonplaceholder.typicode.com/todos')
    // .then(response => response.json())
    // .then(json => setTodos(json))

    return () => {
      console.log('useLayoutEffect cleanup function empty dependency')
    }
  }, []); // empty dependency array


  console.log('---------------------------')
  console.log('render EffectHook')
  return (
    <div>
      
      Cout: {count} <br />
      Todo TItle: {todos[0]?.title} <br />
      <Button buttonText='Force Update' onClick={() => setCount(Date.now())} />

    </div>
  )
}

export default EffectHook