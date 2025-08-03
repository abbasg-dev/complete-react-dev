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
          id: "12g312gi1",
        },
        {
          name: "Ahmad",
          id: "42342uh23",
        },
        {
          name: "Fadi",
          id: "4564j4h6h",
        },
        {
          name: "Andrei",
          id: "12j3i4i34",
        },
      ],
    };
  }

  // a special method that returns the UI (JSX) to display.
  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
