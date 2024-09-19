import { useState } from "react";

import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  // let counter = 0;
  const addValue = () => {
    if (counter === 20) {
      setCounter(counter);
    } else {
      setCounter(counter + 1);
    }
  };
  const decreaseValue = () => {
    if (counter === 0) {
      setCounter(counter);

      console.log(counter);
    } else {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1>Counter App</h1>

      <h2>Counter :{counter}</h2>
      <button onClick={addValue}>Add</button>
      <br />
      <button onClick={decreaseValue}>Decrease</button>
    </>
  );
}

export default App;
