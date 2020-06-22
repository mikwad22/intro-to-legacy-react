import React from 'react';
 // if exporting a functional component in same line it can not be an arrow function
export default function CounterDisplay(props) {
    console.log(props)
    return(
        <div>
            <p>{props.count}</p>
           <button onClick={props.decrement}>Decrement</button>
           <button onClick={props.increment}>Increment</button>
        </div>
    )
}