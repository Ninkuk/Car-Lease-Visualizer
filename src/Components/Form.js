import {Button, Container, Grid, MenuItem, TextField, Typography} from "@material-ui/core";
import {colors} from "../data/colors";
import {DatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import SaveIcon from "@material-ui/icons/Save";
import React from "react";

export default function Form(props) {
	// Form Fields
	const [make, setMake] = React.useState("");
	const [model, setModel] = React.useState("");
	const [year, setYear] = React.useState("");
	const [colorUsed, setColor] = React.useState('#121212');
	const [selectedDate, handleDateChange] = React.useState(new Date());
	const [leaseTerm, setLeaseTerm] = React.useState();
	const [mileageAllowance, setMileageAllowance] = React.useState();
	const [startOdometer, setStartOdometer] = React.useState();
	const [currentOdometer, setCurrentOdometer] = React.useState();

	const updateMake = (event) => setMake(event.target.value);
	const updateModel = (event) => setModel(event.target.value);
	const updateYear = (event) => setYear(event.target.value);
	const updateColor = (event) => setColor(event.target.value);
	const updateLeaseTerm = (event) => setLeaseTerm(event.target.value);
	const updateMileageAllowance = (event) => setMileageAllowance(event.target.value);
	const updateStartOdometer = (event) => setStartOdometer(event.target.value);
	const updateCurrentOdometer = (event) => setCurrentOdometer(event.target.value);

	function handleFormSubmission() {
		// get the number of cars stored
		let carsCount = Number(localStorage.getItem('carsCount'));

		const carInfo = {
			make: make,
			model: model,
			year: year,
			colorUsed: colorUsed,
			selectedDate: selectedDate,
			leaseTerm: leaseTerm,
			mileageAllowance: mileageAllowance,
			startOdometer: startOdometer,
			currentOdometer: currentOdometer
		}

		// add car info to local storage
		localStorage.setItem(`car${carsCount}`, JSON.stringify(carInfo));

		// update the number of cars stored
		localStorage.setItem('carsCount', carsCount + 1);

		props.onSubmitForm();
	}

	return (
		<div style={{background: "#EDF1F5", height: "100%", padding: "20px"}}>
			<Container>
				<Typography variant="h1" gutterBottom
				            style={{fontSize: "xxx-large", fontWeight: "700", marginTop: "20px"}}>
					Add a new car
				</Typography>
				<form>
					<Grid container>
						<Typography variant="h2" gutterBottom
						            style={{fontSize: "large", fontWeight: "700", marginTop: "20px"}}>
							Vehicle Appearance
						</Typography>
						<Grid container spacing={2}>
							<Grid item>
								<TextField id="make" label="Make" variant="outlined" onBlur={updateMake}/>
							</Grid>
							<Grid item>
								<TextField label="Model" variant="outlined" onBlur={updateModel}/>
							</Grid>
							<Grid item>
								<TextField id="year" label="Year" variant="outlined" onBlur={updateYear}/>
							</Grid>
							<Grid item>
								<TextField
									id="color"
									select
									label="Color"
									value={colorUsed}
									onChange={updateColor}
									variant="outlined">
									{colors.map((option) => (
										<MenuItem key={option.value} value={option.value}>
											{option.label}
										</MenuItem>
									))}
								</TextField>
							</Grid>
						</Grid>

						<Typography variant="h2" gutterBottom
						            style={{fontSize: "large", fontWeight: "700", marginTop: "30px"}}>
							Lease Information
						</Typography>
						<Grid container spacing={2}>
							<Grid item>
								<MuiPickersUtilsProvider utils={DateFnsUtils}>
									<DatePicker
										label="Lease start date"
										inputVariant="outlined"
										disableFuture
										openTo="year"
										format="MM/dd/yyyy"
										views={["year", "month", "date"]}
										value={selectedDate}
										onChange={handleDateChange}
									/>
								</MuiPickersUtilsProvider>
							</Grid>
							<Grid item>
								<TextField label="Lease Term" variant="outlined"
								           helperText="In months" type="number" onBlur={updateLeaseTerm}/>
							</Grid>
							<Grid item>
								<TextField label="Mileage Allowance" variant="outlined"
								           helperText="In miles" type="number" onBlur={updateMileageAllowance}/>
							</Grid>
						</Grid>

						<Typography variant="h2" gutterBottom
						            style={{fontSize: "large", fontWeight: "700", marginTop: "25px"}}>
							Odometer Details
						</Typography>
						<Grid container spacing={2}>
							<Grid item>
								<TextField id="startOdometerReading" label="Start Odometer Reading"
								           variant="outlined" helperText="In miles" type="number"
								           onBlur={updateStartOdometer}/>
							</Grid>
							<Grid item>
								<TextField id="startOdometerReading" label="Current Odometer Reading"
								           variant="outlined" helperText="In miles" type="number"
								           onBlur={updateCurrentOdometer}/>
							</Grid>
						</Grid>

						<Button style={{margin: "69px auto", textAlign: "center"}} variant="contained" color="primary"
						        onClick={handleFormSubmission}
						        startIcon={<SaveIcon/>}>
							save
						</Button>
					</Grid>
				</form>
			</Container>
		</div>
	);
}
