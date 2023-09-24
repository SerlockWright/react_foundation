import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

function User() {
  const navigate = useNavigate();

  return (
    <div>
      First Name: tony <br />
      Last Name: Nguyen <br />
      Go to Detail: <button onClick={() => navigate('/user/123')}>View Detaiil</button>

      <br />

      <ul>
        <Link to="profile">Profile</Link>
        <li>|</li>
        <Link to="account">Account</Link>
        <li>|</li>
        <Link to="cart">Cart</Link>
      </ul>


      <div className='userContent'>
        <Outlet />
      </div>

     
    </div>
  )
}

export default User