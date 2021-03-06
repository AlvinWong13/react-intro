import logo from './logo.svg';
import './App.css';

// "Object destructuring"
import{useState} from 'react';

// App is a Component
// Components are functions that return JSX
function App() {
  // let name = "Alvin";

  const [name, setName] = useState('Alvin');

  let myH1 = <h1>Go home, {name}, you're drunk</h1>

  // Array destructuring
  // const returnValOfUseState = useState(1);
  // const drinkCount = returnValOfUseState[0];
  // const setDrinkCount = returnValOfUseState[1];

  // useState is a hook

  // drinkCount is the current value of my state
  // setDrinkCount lets me change the value of my state
  const [drinkCount, setDrinkCount] = useState(1);
  // let drinkCount = 1;

  const soberUp = () => {
    setDrinkCount(0);
  };

  // "HTML" is actually "JSX"
  // "Javascript extended"
  // as in App.jsx
  return (
    <div >
      <h1>Cullen Happy Hour!</h1>
      <input
        placeholder="Enter your name"
        onChange={(event) => {
          console.log('changing name', event.target.value)
          // in jQuery we would do
          //$(this).val()
          // in react:
          // event.target.value 
          setName(event.target.value)
        }}
        />
      <p>{name} has had {drinkCount} drink</p>

      <button onClick={() => setDrinkCount(drinkCount + 1)}>
        Drink Up
      </button>
      <br></br>
      <button onClick={soberUp}>
        Sober Up
      </button>
    </div>
  );
}


export default App;
