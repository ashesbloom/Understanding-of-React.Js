import React from "react";
import { useState } from "react";


//? State always lives upwards and is passed downwards. 
function Counter(){  // Parent Component
    const [count , setCount] = useState(0);
    {/* useState is a Hook that stores the current state of the component and provides a function to update it */}
    
    return(
        <div>
            <Child count={count} increment={() => setCount(count + 1)} />
            {/* we use arrow function so that the function is not called immediately but only when the button is clicked */}
        </div>
    )
}

function Child({count , increment}){
    return(
        <div>
            <p>Count: </p>
            <button onClick={increment}>Times clicked: {count}</button>
        </div>
    )
}

export default Counter; //always export the main/parent component in the file