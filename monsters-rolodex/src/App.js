import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

// App is the child class (or subclass).
class App extends Component {
  // a special method which creates an object and initializes its properties
  constructor() {
    super(); // calls the constructor in the base/superclass (parent) "Component"

    // 'this' refers to the current App component object.
    this.state = {
      name: "Abbas",
    };
  }

  // a special method that returns the UI (JSX) to display.
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi {this.state.name}</p>
          <button
            onClick={() => {
              this.setState({ name: "Ahmad" });
            }}
          >
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
