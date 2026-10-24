import { useState } from "react";

function ToggleApp() {
  const [show, setShow] = useState(false);

  function btnAction() {
    setShow((prevShow) => !prevShow);
  }

  return (
    <>
      <button onClick={btnAction}>{show ? "Hide" : "Show"}</button>
      <h1>Toggle in React</h1>
      {show ? <h6>Toggle Displayed...</h6> : null}
    </>
  );
}

export default ToggleApp;
