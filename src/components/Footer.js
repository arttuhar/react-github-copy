import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
	footerContainer: {},
}));

function Footer() {
	const classes = useStyles();
	return (
		<React.Fragment>
			<Divider />
			<Box className={classes.footerContainer}></Box>
		</React.Fragment>
	);
}

export default Footer;
