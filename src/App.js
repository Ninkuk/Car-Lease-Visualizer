import './styles/App.css';
import {ThemeProvider} from "@material-ui/core";
import VehicleAnalyticsPage from "./Components/VehicleAnalyticsPage";
import {theme} from "./styles/Theme"
import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import DashboardPage from "./Components/DashboardPage";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Route exact path="/" component={DashboardPage}/>
				<Route exact path="/vehicle/:vehicleId" component={VehicleAnalyticsPage}/>
			</Router>
		</ThemeProvider>
	);
}

export default App;
