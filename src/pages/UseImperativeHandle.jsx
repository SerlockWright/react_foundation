import React from 'react'
import InputText from '../components/InputText'
import Button from '../components/Button';

function UseImperativeHandle() {
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

      <Button buttonText="Demo Imperative Handle" onClick={handleInputText} />
    </div>
  )
}

export default UseImperativeHandle