import React from "react";

//? Child component using destructuring in the function parameter
//* then we can directly use the prop names without 'props.' prefix

// function GreetChild({name, age}){
//     return(
//         <h3> Hello, {name}! You are {age} years old.</h3>
//     );
// } 

//? or we can simply use props and access each prop using props.propName in parant and child components
// function GreetChild(props){
//     return(
//         <h3> Hello, {props.name}! You are {props.age} years old.</h3>
//     );
// }

// function GreetProp(){
//     return(
//         <div>
//             <h2>Greetings using Props:</h2>
//             <GreetChild name="Mayank Pandey" age={21} />
//             <GreetChild name="John Doe" age={30} />
//         </div>
//     );
// }

//? Here we will create a UserProfile component that accepts various types of props and define them directly in the app.jsx file
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
                <h3 className="bg-red-500">Address:</h3>
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