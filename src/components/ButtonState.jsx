import React from "react";

// stateful component
function ButtonState() {
  const [count, setCount] = React.useState(0);
  const [isAuth, setIsAuth] = React.useState(false);

  function handleIncrement() {
    const newValue = count + 1;
    setCount(newValue);
  }

  return (
    <div>
      <button
        className="button_primary"
        type="button"
        onClick={handleIncrement}
      >
        Increment {count}
      </button>
    </div>
  );
}

export default ButtonState;
