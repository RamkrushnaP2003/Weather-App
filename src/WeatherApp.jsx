import { useState } from "react";
import Infobox from "./infobox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
	const [weatherInfo, setWeatherinfo] = useState({
		city: "Solapur",
		feelslike: 24.84,
		temp: 25.84,
		tempMin: 25.05,
		tempMax: 25.05,
		humidity: 47,
		weather: "haze",
	});

	let updateInfo = (result) => {
		setWeatherinfo(result);
	};

	return (
		<div style={{ textAlign: "center" }}>
			<h1>Weather App</h1>
			<SearchBox updateInfo={updateInfo} />
			<Infobox info={weatherInfo} />
		</div>
	);
}
