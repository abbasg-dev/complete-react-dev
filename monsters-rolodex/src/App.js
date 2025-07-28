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
      name: { firstName: "Abbas", lastName: "Ghaith" },
      company: "ZTM",
    };
  }

  // a special method that returns the UI (JSX) to display.
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name.firstName} {this.state.name.lastName}, I'm
            student at {this.state.company}
          </p>
          <button
            onClick={() => {
              this.setState({
                name: { firstName: "Ahmad", lastName: "Matar" },
              });
              console.log(this.state);
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
