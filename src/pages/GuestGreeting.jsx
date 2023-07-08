import React from 'react'
import Button from '../components/Button'

function GuestGreeting() {
  const [isAuth, setIsAuth] = React.useState(false);
  let title = "Login"

  if(isAuth) {
    title ="Logout"
  } 

  return (
    <div>
      <h2>{isAuth ? 'Please sign up' : 'Welcome to Tony'}</h2>
      <Button 
        buttonText= {title}
        onClick={() => setIsAuth(prevState => !prevState)} // toggle action 
      />
    </div>
  )
}

export default GuestGreeting

