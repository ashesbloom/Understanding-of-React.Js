import './App.css';
import Greeting  from './basic imports/greeating';
import Tablediv from './basic imports/table';
import UserProfile from './props/props'

//? How life-cycle of react works?

//* Mounting Phase
// 1. constructor() -> initializes state and binds methods
// 2. static getDerivedStateFromProps() -> sync state with props
// 3. render() -> returns JSX to be rendered
// 4. componentDidMount() -> side-effects like data fetching

//* Updating Phase
// 1. static getDerivedStateFromProps() -> sync state with props
// 2. shouldComponentUpdate() -> optimize re-rendering
// 3. render() -> returns JSX to be rendered
// 4. getSnapshotBeforeUpdate() -> capture info before DOM updates
// 5. componentDidUpdate() -> side-effects after updates

//* Unmounting Phase
// 1. componentWillUnmount() -> cleanup tasks


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
