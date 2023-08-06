import React, { useState } from 'react'
import Button from '../components/Button'
import ButtonLike from '../components/ButtonLike';

// first render: function -> render UI 
// next render: -> function -> render UI

// global variable
let numb = 1;


const dataCheckbox = [
  { id: 1, title: 'javascript'},
  { id: 2, title: 'angular'},
  { id: 3, title: 'vue'}
]

function UseRef() {
  const [, setForceUpdate] = React.useState(0)
  // using ref
  let numbRef = React.useRef(1); // keep value during component life cycle
  const titleRef = React.useRef(() => {
    console.log('UseRef title function')
    return 'UseRef title function'
  })
  const inputRef = React.useRef(null);
  const skipRenderRef = React.useRef(true); 
  const buttonLikeRef = React.useRef(null);
  /*  
    1: true
    2: true
  */
  const [matrixs, setMatrixs] = useState({});
  const matrixRef = React.useRef({});

  function handleForceUpdate() {
    numb += 1; // 2
    numbRef.current = numbRef.current + 10; 
    setForceUpdate(Date.now());

    inputRef.current.focus();
    inputRef.current.setSelectionRange(0, inputRef.current.value.length);
  }


  React.useEffect(() => {
    buttonLikeRef.current.style.backgroundColor = 'red';

    if(skipRenderRef.current) {
      skipRenderRef.current = false;
      return;
    }
    // code logic 
    console.log('UseRef Component Did Mount');
  })

  function handleCheckBox(id) {
    const isExisted = matrixRef.current[id];
    if(isExisted) {
      delete( matrixRef.current[id]);
      return;
    }
    matrixRef.current = {
      ...matrixRef.current,
      [id]: !matrixRef.current[id],
    }
    // setMatrixs(prevState => {
    //   const isExisted = prevState[id];
    //   if(isExisted) {
    //     delete(prevState[id]);
    //     return {
    //       ...prevState,
    //     }
    //   }
    //   return {
    //     ...prevState,
    //     [id]: !prevState[id],
    //   }
    // })
  }

  function handleUpdateCheckBox() {
    console.log('handleUpdateCheckBox: ', { matrixRef });
  }

  console.log("matrix: ", matrixs)

  return (
    <div>
      <h2>UseRef</h2>
      Numb: {numb} <br />
      Using with ref: {numbRef.current} <br />
      Using with ref function:  {titleRef.current()} <br />

      <input type="text" defaultValue="tony" ref={inputRef} />
      <Button buttonText="Force Update" onClick={handleForceUpdate} />

      <br />
      <h5>forwardRef</h5>
      <ButtonLike 
        ref={buttonLikeRef} 
        text="Forward Ref"
      />

      <h4>Matrix checkbox</h4>
      {dataCheckbox.map(item =>  (
        <div key={item.id} >
          <label htmlFor={item.id}>{item.title}</label>
          <input id={item.id} type="checkbox" onChange={() => handleCheckBox(item.id)} />
        </div>
      ))}
      <br />
      <Button buttonText="Update Checkbox" onClick={handleUpdateCheckBox} />
    </div>
  )
}

export default UseRef