import { useState } from "react";
import Card from "./components/card";

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
      <h1 className=" text-3xl font-bold">Counter App</h1>

      <h2>Counter :{counter}</h2>
      <button className="rounded-xl bg-slate-500 my-3" onClick={addValue}>
        Add
      </button>
      <br />
      <button className="rounded-xl bg-slate-500 " onClick={decreaseValue}>
        Decrease
      </button>
    </>
  );
}

export default App;
