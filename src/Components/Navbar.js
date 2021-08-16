import {Grid, makeStyles, Container, Button} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
	navBar: {
		flexGrow: 1,
		padding: "20px",
	},
}));

export default function Navbar() {
	const classes = useStyles();

	return (
		<nav className={classes.navBar}>
			<Container>
				<Grid container spacing={3} justify="flex-end" alignItems="center">
					<Grid item>
						Export
					</Grid>
					<Grid item>
						Import
					</Grid>
				</Grid>
			</Container>
		</nav>
	);
}
