import React from 'react'

import Button from '../components/Button';

/*
How many ways to component re-render
- State changes
- Props changes
- Parent component re-render
- key changes (force update component)
*/

function State() {
  const [number, setNumber] = React.useState(1); // local state of component
  const [forceUpdate, setForceUpdate] = React.useState(Date.now());
  const [title, setTitle] = React.useState('');
  const [form, setForm] = React.useState({
    firstName: '',
    lastName: 'truong',
    author: {
      name: '',
      id: 1,
      year: 20
    },
    users: {
      id: 2,
      infor: {
        gender: 'gender',
        name: ''
      }
    }
  }); // memory A

  function handleIncrement() {
    // batching state update
    setNumber(number => number + 1) // next render 1
    setForceUpdate(Date.now());
    setTitle(`Title ${Date.now()}`);
  }

  function onChangeForm(e) {
    // form.firstName = e.target.value; // memory A
    // const newObject = {
    //   firstName: e.target.value
    // }  // memory XX
    // setForm(newObject); // memory XX

    // updater function
    setForm((prevState) => {
      return {
        ...prevState, // copy all properites
        firstName: e.target.value
      }
    })
  }

  function onChangeUserName(e) {
    // change user name
    const { value } = e.target;

    // code logic
    setForm((prevState) => {
      return {
        ...prevState,
        users: {
          ...prevState.users,
          infor: {
            ...prevState.users.infor,
            name: value
          }
        }
      }
    })

  }

  console.log("State Component: ", { number, form });

  return (
    <div key={forceUpdate}>
      Number: {number} <br />
      Title: {title} <br />
      LastName: {form.lastName} <br />
      <Button
        buttonText="Increment"
        onClick={handleIncrement}
      // number={number}
      />

      <h4>merge & replace object</h4>
      FirstName: <input type="text" value={form.firstName} onChange={onChangeForm} />

      User Name: <input type="text" value={form.users.infor.name} onChange={onChangeUserName} />

    </div>
  )
}

export default State

/*
const users = {
  id: 1,
  name: 'John',
}

const {name} = users;

// array
const colors = ['red', 'green', 'blue'];
const [, blue] = colors;

*/