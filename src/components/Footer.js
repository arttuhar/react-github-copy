import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
	root: {},
}));

function Footer() {
	const classes = useStyles();
	return (
		<React.Fragment>
			<Divider />
		</React.Fragment>
	);
}

export default Footer;
