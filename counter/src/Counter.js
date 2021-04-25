import { useState } from "react";

const Counter = ({ appCounter, setAppCounter }) => {
    const [ counter, setCounter ] = useState(0);

    return (
        <div>
            <h1>App Counter = { appCounter }</h1>
            <h1>Component Counter = { counter }</h1>
            <button onClick={ () => setCounter(counter + 1) }>Increment</button>
            <button onClick={ () => setCounter(counter - 1) }>Decrement</button>
            <br />
            <button onClick={ () => setAppCounter(appCounter + 1) }>Increment App Counter</button>
            <button onClick={ () => setAppCounter(appCounter - 1) }>Decrement App Counter</button>
            <hr />
        </div>
    );
}
 
export default Counter;