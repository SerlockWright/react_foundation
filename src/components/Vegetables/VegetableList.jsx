/* eslint-disable react/prop-types */
import React from 'react';

import VegetableItem from './VegetableItem';

function VegetableList({ vegetables, deleteItem }) {
  return (
    <div>
      <h5>VegetableList</h5>
      {vegetables.map(vege => <VegetableItem key={vege.id} vege={vege} deleteItem={deleteItem} />)}
    </div>
  )
}

export default VegetableList