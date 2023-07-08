/* eslint-disable react/prop-types */
import React from 'react'
import Button from '../Button'

function VegetableForm({ handleAdd }) {
  const [title, setTitle] = React.useState('');

  return (
    <div>
      <h5>VegetableForm</h5>
      <input type="text" onChange={e => setTitle(e.target.value)} />
      <Button 
        buttonText='Add new' 
        onClick={() => {
          handleAdd(title)
        }}
      />

    </div>
  )
}

export default VegetableForm