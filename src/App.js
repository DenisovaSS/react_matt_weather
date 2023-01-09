import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <h1>Weather app</h1>
      <Weather />
      <footer>
        This project was coded by Svitlana Denisova
        <a
          href="https://github.com/DenisovaSS/react_matt_weather"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          open sourced in GidHub
        </a>
      </footer>
    </div>
  );
}

export default App;
