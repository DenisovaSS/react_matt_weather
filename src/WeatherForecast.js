import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "e947cb2640f1db92e6a19005bc43b435";
  let latitude = props.coordinates.lon;
  let longitude = props.coordinates.lat;
  let IpUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(IpUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">THU</div>
          <WeatherIcon code="03d" size={35} />
          <div className="WeatherForecastTemperature">
            <span className="WeatherForecastTemperature_max">19</span>
            <span className="WeatherForecastTemperature_min">10</span>
          </div>
        </div>
      </div>
    </div>
  );
}
