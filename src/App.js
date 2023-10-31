import logo from "./logo.svg";
import "./App.css";
import Challenge from "./challenge";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Challenge></Challenge>
      </header>
    </div>
  );
}

export default App;
