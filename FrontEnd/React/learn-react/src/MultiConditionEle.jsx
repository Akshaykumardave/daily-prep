import { useState } from "react";

function MultiConditionEle() {
  const [count, setCount] = useState(0);

  return (
    <>
    <button onClick={() => setCount(count + 1)}>Click to change counter</button>
      {count == 0 ? (
        <h1>Counter 1</h1>
      ) : count == 1 ? (
        <h1> Counter 2</h1>
      ) : count == 2 ? (
        <h1> Counter 3</h1>
      ) : null}
    </>
  );
}

export default MultiConditionEle;