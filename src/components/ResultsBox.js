import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
	resultsBoxContainer: {
		border: "1px solid #e1e4e8",
		borderRadius: "6px",
		display: "flex",
	},
	resultsBoxHeader: {
		height: "48px",
		backgroundColor: "#f6f8fa",
		borderRadius: "6px",
		width: "100%",
	},
	headerLinks: {
		justifyContent: "center",
	},
}));

function ResultsBox() {
	const classes = useStyles();
	return (
		<React.Fragment>
			<Box className={classes.resultsBoxContainer}>
				<Box className={classes.resultsBoxHeader}>
					<Box className={classes.headerLinks}>
						<Link to="/">Open</Link>
						<Link to="/">Closed</Link>
					</Box>
				</Box>
				<Divider />
			</Box>
		</React.Fragment>
	);
}

export default ResultsBox;
