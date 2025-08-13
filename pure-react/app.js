const Person = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.occupation),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { class: "title" }, "React IS rendered"),
    React.createElement(
      Person,
      {
        name: "Abbas",
        occupation: "Front-end Engineer",
      },
      null
    ),
    React.createElement(
      Person,
      {
        name: "Abdul",
        occupation: "UI UX Designer",
      },
      null
    ),
    React.createElement(
      Person,
      {
        name: "Ahmad",
        occupation: "Tech Lead",
      },
      null
    ),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
