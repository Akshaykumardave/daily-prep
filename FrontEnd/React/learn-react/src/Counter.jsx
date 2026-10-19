import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [rCount, setRCount] = useState(count);

  function resetCount() {
    setCount(0);
    setRCount(0);
  }

  return (
    <>
      <h1>Counter: {count}</h1>
      <h1>RCounter: {rCount}</h1>
      <button onClick={() => setCount(count + 1)}>Click here to count</button>
      <br/>
      <button onClick={() => setRCount(count - 1)}>Click here to reverse the count..</button>
      <br/>
      <button onClick={resetCount}>Reset both counts</button>
    </>
  );
};

export default Counter;
