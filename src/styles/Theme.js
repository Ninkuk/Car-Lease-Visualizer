import {createMuiTheme} from "@material-ui/core";
import red from "@material-ui/core/colors/red";

export const theme = createMuiTheme({
		palette: {
			primary: {
				main: "#CC0000",
			},
			secondary: {
				main: "#00bfa5",
			},
		},
		typography: {
			fontFamily: "Rubik",
			fontWeightRegular: 400,
			fontWeightMedium: 500,
			fontWeightBold: 700,
		},
	})
;
