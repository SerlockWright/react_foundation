/* eslint-disable react/prop-types */
import React from 'react'
import { Navigate } from 'react-router-dom';

function GuestRouter({ children }) {
  // code logic 
  const accessToken = window.localStorage.getItem('accessToken');

  if(accessToken) {
    return <Navigate to="/compose-component"/>
  }

  return (
    <div>{children}</div>
  )
}

export default GuestRouter