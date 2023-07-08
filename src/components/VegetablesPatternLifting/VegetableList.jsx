/* eslint-disable react/prop-types */
import React from 'react';

function VegetableList({ vegetables }) {
  return (
    <div>
      <h5>VegetableList</h5>
      Total List: {vegetables.length}
    </div>
  )
}

export default VegetableList