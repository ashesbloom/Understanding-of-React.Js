import './App.css';
import Greeting  from './basic imports/greeating';
import Tablediv from './basic imports/table';
import UserProfile from './props/props'

function App() {
  const userAddress = { city: "Phagwara", zip: "114441" };
  const userHobbies = ["coding" , "music"];
  const greetUser = () => alert("hello from backend!");
  return(
    <div>
      <h1>Basic Imports</h1>
      <Greeting />
      <Tablediv />
      <h1>Concept of Props</h1>
      <hr />
      <UserProfile 
        name = "Mayank Pandey"
        age = {21}
        isOnline={true}
        address={userAddress}
        hobbies={userHobbies}
        greet={greetUser}
      />
    </div>
  );
}

export default App;
