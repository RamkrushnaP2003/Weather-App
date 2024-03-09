import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
  let [WeatherInfo, setWeatherInfo] = useState({
    city: "pune",
    feelsLikes: 28.9,
    humidity: 32,
    temp: 29.99,
    tempMax: 29.99,
    tempMin: 29.99,
    weather: "smoke",
  });

  function updateInfo(newInfo) {
    setWeatherInfo(newInfo);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather Widget</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={WeatherInfo} />
    </div>
  );
}
