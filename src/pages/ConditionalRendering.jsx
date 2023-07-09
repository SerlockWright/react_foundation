import React from 'react'
import Button from '../components/Button';

function LoginButton() {
  return (
    <Button buttonText='Login' />
  )
}

function LogoutButton() {
  return (
    <Button buttonText='Logout' />
  )
}


function ConditionalRendering() {
  const [isAuth, setIsAuth] = React.useState(true);
  const [, setNumber] = React.useState(0);
  let RenderButton = LoginButton // element type

  if(isAuth) {
    RenderButton = LogoutButton // element type
  } 

  function renderButton() {
    return (
      <Button buttonText='Render with function' />
    )
  }

  console.log('ConditionalRendering: ')
  return (
    <div>
      User: {isAuth && (
        <div>Loginded jsx</div>
      )} 

      <br />
      isAuth: {isAuth || 'please login'}

      <br /><br />
      isAuth: {isAuth ? 'if else' : null}

      <br />
      Element Variable: {<RenderButton />}

      <br />
      Functional: {renderButton()}

      <br />
      <Button 
        buttonText='Login' 
        onClick={() => {
          setIsAuth(prevState => !prevState);
          setNumber(1)
        }} // toggle action 
      />
    </div>
  )
}

export default ConditionalRendering
