/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import { connect } from 'react-redux';
import InputText from '../components/InputText'
import Button from '../components/Button';

import { addTodo } from '../states/todo.action';

const mapDispatchToProps = {
  addTodo
}

function UseImperativeHandle({ addTodo }) {
  const inputRef = React.useRef(null);

  function handleInputText() {
    inputRef.current.onFocus();
    inputRef.current.openModal();
  }

  console.log('render UseImperativeHandle')

  return (
    <div>
      <h4>UseImperativeHandle</h4>
      <InputText ref={inputRef} />

      <Button buttonText="Demo Imperative Handle" onClick={() => {
        handleInputText();
        const todos = [
          {
           id: 1,
           title: 'javascript'
          },
          {
           id: 2,
           title: 'angular'
          }
         ]
        addTodo(todos)
      }} />
    </div>
  )
}

export default connect(null, mapDispatchToProps)(UseImperativeHandle)