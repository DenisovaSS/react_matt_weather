import "./App.css";
import Weather from "./Weather";
//https://astonishing-treacle-5d25f4.netlify.app/
function App() {
  return (
    <div className="App">
      <h1>Weather app</h1>
      <Weather searchCity="Dnipro" />
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
