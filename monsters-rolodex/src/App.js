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
      monsters: [
        {
          name: "Sara",
        },
        {
          name: "Ahmad",
        },
        {
          name: "Fadi",
        },
        {
          name: "Andrei",
        },
      ],
    };
  }

  // a special method that returns the UI (JSX) to display.
  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return <h1>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
