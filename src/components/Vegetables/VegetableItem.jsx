/* eslint-disable react/prop-types */
import React from 'react'
import Button from '../Button'

function VegetableItem({ vege, deleteItem }) {
  return (
    <div>
      Title: {vege.title} <br />

      <Button buttonText='Delete' onClick={() => deleteItem(vege.id)} />
    </div>
  )
}

export default VegetableItem