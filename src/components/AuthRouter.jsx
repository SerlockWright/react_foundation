/* eslint-disable react/prop-types */
import React from 'react'
import { useNavigate } from 'react-router-dom';

function AuthRouter({ children }) {
  console.log('AuthRoute')
  const navigate = useNavigate();
  // code logic 
  const accessToken = window.localStorage.getItem('accessToken');

  if(!accessToken) {
    return (
      <>
        Please login
        <button onClick={() => {
           window.localStorage.setItem('accessToken', 123);
           navigate('/user/profile')
        }}>Login</button>
      </>
    )
  }

  return (
    <div>{children}</div>
  )
}

export default AuthRouter