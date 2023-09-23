import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function User() {
  return (
    <div>
      First Name: tony <br />
      Last Name: Nguyen <br />

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