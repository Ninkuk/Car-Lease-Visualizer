import {Paper, Typography, makeStyles, Container, TextField, Grid,} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
	card: {
		borderRadius: "15px",
		display: "block",
		color: "white",
	},
	cardContent: {
		padding: "20px",
	},
	progressBar: {
		background: "linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)",
		borderRadius: "15px",
		padding: "5px 20px",
		color: "#212121",
		fontWeight: "500",
		fontSize: "smaller",
	},
	input: {
		color: "white"
	}
}));

export default function OverviewCard(props) {
	const classes = useStyles();

	return (
		<Container style={{marginBottom: "30px"}}>
			<Paper className={classes.card} elevation={5} style={{backgroundColor: `${props.color}`}}>
				<Grid container justify="space-between" alignItems="center" className={classes.cardContent}>
					<Grid item>
						<Typography
							variant="h2"
							style={{fontSize: "xx-large", fontWeight: "700"}}>
							{props.title}
						</Typography>
					</Grid>
					<Grid item>

					</Grid>
				</Grid>
				<div className={classes.progressBar} style={{width: `${props.milesPercentage}%`}}>
					{Math.round(props.milesPercentage)}% driven
				</div>
			</Paper>
		</Container>
	);
}
