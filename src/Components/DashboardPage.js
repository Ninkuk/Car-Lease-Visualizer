import React, {useEffect, useState} from 'react';
import {Button, Container, Grid, Typography} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import {Link} from "react-router-dom";
import OverviewCard from "./OverviewCard";
import CreateCard from "./CreateCard";
import Footer from "./Footer";

function DashboardPage(props) {

	const [vehicleList, setVehicleList] = useState([]);

	//Works like componentDidMount
	useEffect(() => {
		refreshList();
	}, []);

	function refreshList() {
		// get the number of cars stored
		let carsCount = Number(localStorage.getItem('carsCount'));

		// make a temporary list to push items into
		let tempVehicleList = []

		// get vehicle information through for loop
		for (let i = 0; i < carsCount; i++) {
			tempVehicleList.push(JSON.parse(localStorage.getItem(`car${i}`)));
		}

		// set main list to temporary list
		setVehicleList(tempVehicleList);
	}

	function deleteList() {
		localStorage.clear();
		refreshList();
	}

	return (
		<div>
			<Container>
				<Grid container alignItems="center" justify="space-between">
					<Grid item>
						<Typography variant="h1" gutterBottom
						            style={{fontWeight: "700", fontSize: "xxx-large", marginTop: "50px"}}>
							My Vehicles
						</Typography>
					</Grid>
					<Grid item>
						<Button variant="outlined" color="primary" startIcon={<DeleteIcon/>}
						        style={{marginTop: "40px"}} onClick={deleteList}>
							Delete all
						</Button>
					</Grid>
				</Grid>
			</Container>
			{
				vehicleList.map((value, index) => (
					<Link to={`/vehicle/${index}`}>
						<OverviewCard title={value.make + " " + value.model + " " + value.year} color={value.colorUsed}
						              milesPercentage={((value.currentOdometer - value.startOdometer) / value.mileageAllowance) * 100}/>
					</Link>
				))
			}
			<CreateCard onDialogClose={refreshList}/>
			<Footer/>
		</div>
	);
}

export default DashboardPage;
