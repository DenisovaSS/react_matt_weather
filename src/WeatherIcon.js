import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "CLEAR_DAY",
    "02d": "PARTLY_CLOUDY_DAY",
    "03d": "CLOUDY",
    "04d": "CLOUDY",
    "09d": "RAIN",
    "10d": "SLEET",
    "11d": "RAIN",
    "13d": "SNOW",
    "50d": "FOG",
    "01n": "CLEAR_NIGHT",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03n": "CLOUDY",
    "04n": "CLOUDY",
    "09n": "RAIN",
    "10n": "SLEET",
    "11n": "RAIN",
    "13n": "SNOW",
    "50n": "FOG",
  };

  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color="#1e1e1e"
      size={52}
      animate={true}
    />
    /* <img
      src="https://raw.githubusercontent.com/divyanshu013/react-animated-weather/HEAD/react-animated-weather.gif"
      alt={props.alt}
    />
    CLEAR_DAY
CLEAR_NIGHT
PARTLY_CLOUDY_DAY
PARTLY_CLOUDY_NIGHT
CLOUDY
RAIN
SLEET
SNOW
WIND
FOG
    
    */
  );
}
