import logo from './logo.svg';
import './App.css';
import HelloCullen from './HelloCullen';

// App is a Component
// Components are functions that return JSX
function App() {
  let name = "Alvin";
  let myH1 = <h1>Go home, {name}, you're drunk</h1>

  // "HTML" is actually "JSX"
  // "Javascript extended"
  // as in App.jsx
  return (
    <div className="App">
      {myH1}
      <header className="App-header">

        {/*HelloCullen is a React Component */}
        <HelloCullen />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


export default App;
