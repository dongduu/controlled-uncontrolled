import logo from "./logo.svg";
import "./App.css";
import ControlledComponent from "./components/ControlledComponent";
import UncontrolledCoponent from "./components/UncontrolledComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ControlledComponent />
        <UncontrolledCoponent />
      </header>
    </div>
  );
}

export default App;
