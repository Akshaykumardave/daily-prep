function fruitCall() { // this outside function is called only when the inner function is not defined.
    alert("outside");
  }

function EventsTest() {
  function fruitCall() {
    console.log("inside");

    alert("Apple");
  }

  function countOfFruit(count) {
    alert(count);
  }
  // in react with onClick event function definition is used for funciton without argument
  // if there is function with argument then () => 'arrow function is used'
  return (
    <div>
      <button onClick={fruitCall}>Fruits</button> 
      <button onClick={() => countOfFruit(100)}>Count</button>
    </div>
  );
}

export default EventsTest;
