import {
	Paper,
	Typography,
	makeStyles,
	Container,
	Dialog,
	Slide,
	AppBar,
	Toolbar,
	IconButton,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";
import Form from "./Form";

const useStyles = makeStyles((theme) => ({
	card: {
		background: "#EDF1F5",
		borderStyle: "dashed",
		borderRadius: "15px",
		borderWidth: "thick",
		borderColor: "#222222",
		display: "block",
		color: "#222222",
		textAlign: "center",
	},
	cardContent: {
		padding: "35px",
	}
}));

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export default function CreateCard(props) {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
		props.onDialogClose();
	};

	return (
		<div>
			<Container onClick={handleClickOpen}>
				<Paper className={classes.card} elevation={0}>
					<div className={classes.cardContent}>
						<Typography
							variant="h2"
							style={{fontSize: "200%", fontWeight: "700"}}>
							+ Add a new car
						</Typography>
					</div>
				</Paper>
			</Container>
			<Dialog
				fullScreen
				open={open}
				onClose={handleClose}
				TransitionComponent={Transition}>
				<AppBar position="relative">
					<Toolbar>
						<IconButton
							edge="start"
							color="inherit"
							onClick={handleClose}
							aria-label="close">
							<CloseIcon/>
						</IconButton>
					</Toolbar>
				</AppBar>
				<Form onSubmitForm={handleClose}/>
			</Dialog>
		</div>
	);
}
