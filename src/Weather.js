import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);

  function showTemperature(response) {
    //console.log(response.data);
    setTemperature(response.data.main.temp);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter your city"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>Dnipro</h1>
        <ul>
          <li>Wensday 07:00</li>
          <li>Nosty Cloudy</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
              alt="cloudy"
            />{" "}
            <span className="temperature">{temperature}</span>
            <span className="unit">C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 15%</li>
              <li>Humidity: 72%</li>
              <li>Wind: 13km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "9c340174dce0d0c11428fd78107dfdf3";
    let city = "Dnipro";
    let units = "metric";
    // let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showTemperature);

    return "Loading...";
  }
}
