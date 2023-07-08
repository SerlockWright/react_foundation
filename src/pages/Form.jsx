import React from 'react'
import Button from '../components/Button'

function Form() {
  const firstNameRef = React.useRef(null);
  const [form, setForm] = React.useState({
    lastName: undefined
  });

  function onChangeForm(e) {
    const { name, value } = e.target;
    setForm(prevState => ({
      ...prevState,
      [name]: value
    }))
  }


  function onSubmit() {
    console.log('onSubmit')
  }

  console.log('Form component: ', { form })


  return (
    <div>
      <h5>Uncontroller component</h5>
      First Name:
      <input id="firstName" defaultValue="default value" ref={firstNameRef} type='text' />

      <h5>Controller component</h5>
      Last Name:
      <input name="lastName" value={form.lastName || ''} type='text' onChange={onChangeForm} />

      <Button 
        buttonText='Submit'
        onClick={onSubmit}
      />

    </div>
  )
}

export default Form