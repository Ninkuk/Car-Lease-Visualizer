import React from "react";
import {Button, Container, Link, Typography} from "@material-ui/core";
import {GitHub} from "@material-ui/icons";

export default function Footer() {
	return (
		<div style={{textAlign: "center", marginTop: "250px"}}>
			<Typography variant="p">
				Made by <Link href="https://code.ninkuk.com/" underline="none" target="_blank" rel="noopener">Ninad Kulkarni</Link>
			</Typography>
			<br/>
			<br/>
			<Button variant="outlined" startIcon={<GitHub/>}>Github</Button>
		</div>
	)
}
