import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Chart from 'chart.js/auto';
import {Container, Paper} from "@material-ui/core";

function VehicleAnalyticsPage() {

	const {vehicleId} = useParams();
	const [vehicleInfo, setVehicleInfo] = useState(JSON.parse(localStorage.getItem(`car${vehicleId}`)));

	const labels = [
		"start lease date",
		"today's date",
		"end lease date"
	];

	const data = {
		labels: labels,
		datasets: [{
			label: 'Mileage progress so far',
			fill: false,
			borderColor: vehicleInfo.colorUsed,
			data: [
				Number(vehicleInfo.startOdometer),
				Number(vehicleInfo.currentOdometer),
				Number(vehicleInfo.startOdometer) + Number(vehicleInfo.mileageAllowance)
			],
		}, {
			label: 'Ideal Progression',
			fill: false,
			borderColor: vehicleInfo.colorUsed,
			borderDash: [5],
			data: [
				Number(vehicleInfo.startOdometer),
				Number(vehicleInfo.startOdometer) + Number(vehicleInfo.mileageAllowance)
			],
		}]
	};

	const config = {
		type: "line",
		data,
		options: {
			responsive: true
		}
	};

	useEffect(() => {
		console.log("this is called");
		const x = new Chart(
			document.getElementById('milesTrendChart'),
			config
		);
	}, [config]);


	return (
		<Container>
			<Paper elevation={3} style={{padding: "20px"}}>
				<canvas id="milesTrendChart"/>
				{vehicleInfo.selectedDate}
			</Paper>
		</Container>
	);
}

export default VehicleAnalyticsPage;
