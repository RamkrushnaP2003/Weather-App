import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
// import SearchBox from "./SearchBox.jsx";
import "./Infobox.css";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

export default function Infobox({ info }) {
	// const INIT_IMG_URL =
		// "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
	const HOT_URL =
		"https://images.unsplash.com/photo-1429277158984-614d155e0017?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
	const COLD_URL =
		"https://images.unsplash.com/photo-1622629202514-16778958f368?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA3fHxjb2xkJTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
	const RAIN_URL =
		"https://images.unsplash.com/photo-1635823288719-93f2c8ac7f3f?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
	return (
		<div className="InfoBox">
			<div className="cardContainer">
				<Card sx={{ maxWidth: 345 }}>
					<CardMedia
						sx={{ height: 140 }}
						image={
							info.humidity > 80
								? RAIN_URL
								: info.temp > 15
								? HOT_URL
								: COLD_URL
						}
						title="green iguana"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{info.city}{" "}
							{info.humidity > 80 ? (
								<ThunderstormIcon />
							) : info.temp > 15 ? (
								<WbSunnyIcon />
							) : (
								<AcUnitIcon />
							)}
						</Typography>
						<Typography
							variant="body2"
							color="text.secondary"
							component={"span"}
						>
							<p>Temprature = {info.temp}&deg;C</p>
							<p>Humiduty : {info.humidity}</p>
							<p>Min Temp = {info.tempMin}&deg;C</p>
							<p>Max Temp = {info.tempMax}&deg;C</p>
							<p>
								The weather can be described as {info.weather} <i>and</i> feels
								like {info.feelslike}&deg;C
							</p>
						</Typography>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
