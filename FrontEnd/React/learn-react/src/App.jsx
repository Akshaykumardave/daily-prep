// import EventsTest from "./Events";

import { useState } from "react";
import Counter from "./Counter";

// function App() {
//   const name = 'Akshay Kumar Dave';
//   const age = 2026-1995;
//   function fruit () {
//     return 'Apple';
//   }

//   function sum(a, b) {
//     return a + b;
//   }

//   function opeartion(a, b, op) {
//     return op == '+' ? a + b : a - b;
//   }

//   const userObj = {
//     name: 'akshay',
//     age: '31',
//     mail: 'Akshay.@gmail.com'
//   }

//   return (
//     <>
//       <div>
//         <h1>JSX with Curly Braces</h1>
//         <h1>{name}</h1>
//         <h1>{'age is:' + age}</h1>
//         <h1>{fruit()}</h1>
//         <h1>{sum(10, 20)}</h1>
//         <h1>{opeartion(100, 200, '+')}</h1>
//         <h1>{userObj.name + ' - ' + userObj.age + ' - ' + userObj.mail}</h1>
//         <EventsTest/>
//       </div>
//     </>
//   );
// }

// export default App;


function App() {
  let fruit = 'Apple';
  const[fName, setFname] = useState('Apple');

  function changeFoodName(fName) {
    setFname(fName);
  }

  return (
    <>
      <h2>States in React..!!</h2>
      <h5>{fName}</h5>
      <button onClick={() => changeFoodName('banana')}>
        Click here to change
      </button>

      <Counter/>
    </>
  );
}

export default App;