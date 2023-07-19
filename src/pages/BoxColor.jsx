import React from 'react'
import './BoxColor.css'

function BoxColor() {
  const [currentColor, setCurrentColor] = React.useState(null);

  const handleChangeColor = (color) => {
    if (currentColor === color) {
      setCurrentColor(null);
    } else {
      setCurrentColor(color);
    }
  };

  const getBoxColor = (color) => {
    if (currentColor === color) {
      return { backgroundColor: color };
    }
    return null;
  };

  return (
    <div className='block'>
      <div
        className={`color red ${getBoxColor('red')}`}
        onClick={() => handleChangeColor('red')}
        style={getBoxColor('red')}
      >
        <span>Red</span>
      </div>
      <div
        className={`color yellow ${getBoxColor('yellow')}`}
        onClick={() => handleChangeColor('yellow')}
        style={getBoxColor('yellow')}
      >
        <span>Yellow</span>
      </div>
      <div
        className={`color purple ${getBoxColor('purple')}`}
        onClick={() => handleChangeColor('purple')}
        style={getBoxColor('purple')}
      >
        <span>Purple</span>
      </div>
      <div
        className={`color aqua ${getBoxColor('aqua')}`}
        onClick={() => handleChangeColor('aqua')}
        style={getBoxColor('aqua')}
      >
        <span>Aqua</span>
      </div>
    </div>
  )
}

export default BoxColor

