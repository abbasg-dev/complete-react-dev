import { Component } from "react";

import CardList from "./components/card-list/card-list.component";
import "./App.css";

// App is the child class (or subclass).
class App extends Component {
  // a special method which creates an object and initializes its properties
  constructor() {
    super(); // calls the constructor in the base/superclass (parent) "Component"

    // 'this' refers to the current App component object.
    this.state = {
      monsters: [],
      searchField: "",
    };
    console.log("constructor");
  }

  // React lifecycle method that runs once after render to fetch data and update state
  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  // a special method that returns the UI (JSX) to display.
  render() {
    console.log("render");

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={onSearchChange}
        />
        <CardList />
        {/* {filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })} */}
      </div>
    );
  }
}

export default App;
