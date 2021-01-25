import React from "react";
import {
	makeStyles,
	createMuiTheme,
	ThemeProvider,
} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
	dashboardContainer: {
		display: "flex",
		minHeight: "100vh",
		backgroundColor: "#f6f8fa",
	},
	gridRepositories: {
		backgroundColor: "#fff",
		borderRight: "1px solid black",
	},
	gridMain: {},
	gridExplore: {},
}));

const theme = createMuiTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 768,
			md: 960,
			lg: 1280,
			xl: 1920,
		},
	},
});

function Dashboard() {
	const classes = useStyles();
	return (
		<React.Fragment>
			<Box className={classes.dashboardContainer}>
				<ThemeProvider theme={theme}>
					<Grid container>
						<Grid
							item
							xs={12}
							sm={4}
							md={3}
							lg={3}
							xl={3}
							className={classes.gridRepositories}
						></Grid>
						<Grid
							item
							xs={12}
							sm={8}
							md={6}
							lg={6}
							xl={6}
							className={classes.gridMain}
						></Grid>
						<Grid item md={3} lg={3} className={classes.gridExplore}></Grid>
					</Grid>
				</ThemeProvider>
			</Box>
		</React.Fragment>
	);
}

export default Dashboard;
