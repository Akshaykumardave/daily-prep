import { useState } from "react"

function InputElement() {
    const[inputValue, setInputValue] = useState('');
    return (
        <div>
            <p>Get input field value</p>
            <input type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)}/>
            <button onClick={() => setInputValue('')}>Clear input</button>
            <br/>

            <p>{inputValue}</p>
        </div>
    )
}

export default InputElement;