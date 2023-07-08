import React from 'react';
import { v4 as uuidv4 } from 'uuid';

// components
import VegetableForm from '../components/VegetablesPatternLifting/VegetableForm';
import VegetableList from '../components/VegetablesPatternLifting/VegetableList';
import VegetableItem from '../components/VegetablesPatternLifting/VegetableItem';

function LiftingStateUpPattern() {
  const [vegetables, setVegetables] = React.useState([]);

  function handleAdd(title) {
    setVegetables(prevState => ([...prevState, {
      id: uuidv4(),
      title
    }]))
  }

  function deleteItem(id) {
    const clonedVegetables = [...vegetables];
    const index = clonedVegetables.findIndex(vege => vege.id === id);
    clonedVegetables.splice(index, 1);
    setVegetables(clonedVegetables)
  }

  console.log('vegetables: ', vegetables)

  return (
    <div>
      <VegetableForm handleAdd={handleAdd} />

      <hr />
      <VegetableList vegetables={vegetables} />
      <hr />
      <VegetableItem vegetables={vegetables} deleteItem={deleteItem} />

    </div>
  )
}

export default LiftingStateUpPattern