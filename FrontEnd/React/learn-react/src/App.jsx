import Header from "./Header";

function App() {
  return (
    <>
      <div>
        <h1>First Component {sum()}</h1>
        <Fruits/>
      </div>
    </>
  );
}

function Fruits() {
  return (
    <>
      <h1>Apple</h1>
    </>
  );
}


function sum() {
  return 10+10;
}
export default App;
