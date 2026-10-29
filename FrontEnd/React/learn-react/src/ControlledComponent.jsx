// Controlled component is a form whose input field value is controlled by React's state.
/**
 * PROS - 
 * 1. single source of truth - dedicated state for single input element
 * 2. validation and manipulation before submit
 * 3. Dynamic updates values - updating state from other state or from other events.
 */

import { useState } from "react";

function ControlledComponent() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

   function clearInputFields() {
        setName('');
        setPassword('');
        setEmail('');
    }

    return (
        <div>
            <h1>Controlled Component</h1>
            <form action="" method="get">
                <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Enter name"/> <br/>
                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter password"/> <br/>
                <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter email"/> <br/>

                <button>Submit</button>
                <button onClick={() => clearInputFields}>Clear</button>

                <h3>{name}</h3>
                <h3>{password}</h3>
                <h3>{email}</h3>
            </form>
        </div>
    )
}


export default ControlledComponent;