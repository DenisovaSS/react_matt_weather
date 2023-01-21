import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
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
