/* eslint-disable react/prop-types */
import React from 'react'
import Button from '../Button'

function VegetableItem({ vegetables, deleteItem }) {
  return (
    <div>
      {vegetables.map(vege => (
        <div key={vege.id}>
          Title: {vege.title} <br />
          <Button buttonText='Delete' onClick={() => deleteItem(vege.id)} />
        </div>
      ))}
    </div>
  )
}

export default VegetableItem