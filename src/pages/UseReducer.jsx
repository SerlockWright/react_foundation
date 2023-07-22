import React from 'react'
import Button from '../components/Button';

// reducer
import { reducer, initialState } from '../reducers/counterReducer';
import { increment, decrement, showLoading, hideLoading } from '../actions/counterActions';

function UseReducer() {
  const [{ count, isLoading }, dispatch] = React.useReducer(reducer, initialState)

  function handleIncrement() {
    dispatch(showLoading()) ;
    
    setTimeout(() => {
      dispatch(increment(10)) ;
      dispatch(hideLoading()) ;
    }, 1000) 

    // setIsLoading(true);

    // setTimeout(() => {
    //   setCount(count + 1);
    //   setIsLoading(false);
    // }, 1000) 
  }

  function handleDerement() {
    dispatch(showLoading()) ;
    
    setTimeout(() => {
      dispatch(decrement(5)) ;
      dispatch(hideLoading()) ;
    }, 1000) 

    // setIsLoading(true);

    // setTimeout(() => {
    //   setCount(count - 1);
    //   setIsLoading(false);
    // }, 1000)
  }

  return (
    <div>
      UseReducer
      <br />
      Count: {isLoading ? "...Loading" : count}<br />
      
      <Button buttonText='Increase' onClick={handleIncrement} />
      <Button buttonText='Decrement' onClick={handleDerement} />

    </div>
  )
}

export default UseReducer