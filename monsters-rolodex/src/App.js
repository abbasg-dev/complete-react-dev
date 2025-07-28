import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

// App is the child class (or subclass).
class App extends Component {
  constructor() {
    super(); // calls the constructor in the base/superclass (parent) "Component"

    // 'this' refers to the current App component object.
    this.state = {
      name: "Abbas",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi {this.state.name}</p>
          <button>Change Name</button>
        </header>
      </div>
    );
  }
}

export default App;
