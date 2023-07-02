import React from 'react'
import Button from '../components/Button';

function HandleEvent() {
  const [count, setCount] = React.useState(1);

  // way 1
  // function handeIncrement(10, newSum) {
  //   console.log("count: ", count)
  // } 

  // way 2
  // curry function (function return another function)
  // function handleIncrement() {
  //   return () => {
  //     console.log("count: ", count)
  //   }
  // }

  // way 2
  const handleIncrement = (x) => () => {
    // code logic
    const newSum = 1 + 1;
    console.log("count: ", count)
    setCount(prevState => prevState + x + newSum)
  }

  // user click 1 action -> trigger 1 action -> () => {} => handleIncrement => trigger handleIncrement()
  // user click 1 action -> trigger 1 action -> handleIncrement => trigger handleIncrement()

  return (
    <div>
      Count: {count} <br />
      <Button 
        buttonText='Increment'
        // onClick={handleIncrement(10)}
        // onClick={() => {
        //   // code logic ....
        //   const newSum = 1 + 1;
        //   handleIncrement(10, newSum)
        // }} // way 1
        onClick={handleIncrement(10)} // way 2
      />
    </div>
  )
}

export default HandleEvent