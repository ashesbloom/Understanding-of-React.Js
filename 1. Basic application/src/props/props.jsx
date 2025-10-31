import React from "react";

//? Child component using destructuring in the function parameter
//* then we can directly use the prop names without 'props.' prefix

// function GreetChild({name, age}){
//     return(
//         <h3> Hello, {name}! You are {age} years old.</h3>
//     );
// } 



function UserProfile({name, age, isOnline, address, hobbies, greet}){
    return(
        <div style={{border: '1px solid #ccc', padding: '16px', borderRadius: '8px', maxWidth: '400px', margin: '16px auto'}}>
            {// String and int props
            }
            <h2>{name}</h2>
            <p>Age: {age}</p>

            {// Boolean prop 
            }
            <p>Status: {isOnline ? 'Online' : 'Offline'}</p>

            {// Object prop
            }
            <div>
                <h3>Address:</h3>
                <p>{address.city}, {address.zip}</p>
            </div>
            {// Array prop
            }
            <div>
                <h3>Hobbies:</h3>
                <ul className="hobby-list style-list disc">
                    {hobbies.map((hob, index) => (
                        <li key={index}>{hob}</li>
                    ))}
                </ul>    
            </div>
            {// Function props
            }
            <button onClick={greet}>Click here</button>
        </div>
    );
}

export default UserProfile;