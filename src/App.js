const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      animal: "Dog",
      name: "Sushi",
      breed: "Shitsu",
    }),
    React.createElement(Pet, {
      animal: "Dog",
      name: "Noodle",
      breed: "Fluffy",
    }),
    React.createElement(Pet, {
      animal: "Cat",
      name: "Willow",
      breed: "Munchkin",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
