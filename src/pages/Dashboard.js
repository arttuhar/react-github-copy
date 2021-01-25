import React from "react";
import {
	makeStyles,
	createMuiTheme,
	ThemeProvider,
} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
	dashboardContainer: {
		display: "flex",
		minHeight: "100vh",
		backgroundColor: "#f6f8fa",
	},
	gridRepositories: {
		backgroundColor: "#fff",
		borderRight: "1px solid #eaecef",
		[theme.breakpoints.down(768)]: {
			backgroundColor: "#f6f8fa",
			borderRight: "none",
		},
	},
	repositoriesContainer: {
		marginTop: "60px",
		padding: "24px",
		paddingTop: "32px",

		"&:hover": {
			backgroundColor: "#fff",
		},
	},
	repositoriesHeader: {
		padding: 0,
		paddingBottom: "8px",
		cursor: "default",
		"&:hover": {
			backgroundColor: "#fff",
		},
	},
	repositoriesText: {
		flex: 1,
		fontSize: "14px",
		fontWeight: "bold",
	},
	repositoriesNewButton: {
		height: "30px",
		borderRadius: "6px",
		backgroundColor: "#2ea44f",
		border: "1px solid rgba(27, 31, 35, 0.15)",
		transition: "none",
		"&:hover": {
			backgroundColor: "#2c974b",
		},
	},
	repositoriesNewButtonIcon: {
		marginRight: "4px",
		color: "#fff",
	},
	repositoriesNewButtonText: {
		fontSize: "12px",
		color: "#fff",
		textTransform: "none",
		fontWeight: "bold",
		letterSpacing: 0.1,
	},
	repositoriesInput: {
		backgroundColor: "#f6f8fa",
		width: "100%",
		height: "32px",
		borderRadius: "6px",
		border: "1px solid #e1e4e8",
		paddingLeft: "12px",
		fontSize: "14px",
		"& ::-webkit-input-placeholder": {
			color: "#586069",
			fontSize: "14px",
			letterSpacing: 0,
			opacity: 1,
		},
	},
	repositoriesList: {
		marginTop: "16px",
		marginBottom: "16px",
	},
	repositoriesListItem: {
		padding: 0,
		paddingBottom: "8px",
		"&:hover": {
			backgroundColor: "#fff",
			textDecoration: "underline",
			textDecorationColor: "#0366d6",
		},
	},
	repositoriesListItemIcon: {
		marginRight: "10px",
		fontSize: "14px",
		color: "#6a737d",
	},
	repositoriesListItemText: {
		fontSize: "14px",
		fontWeight: "bold",
		color: "#0366d6",
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
						>
							<Box className={classes.repositoriesContainer}>
								<MenuItem
									className={classes.repositoriesHeader}
									disableRipple={true}
								>
									<Typography className={classes.repositoriesText}>
										Repositories
									</Typography>
									<Button
										variant="outlined"
										className={classes.repositoriesNewButton}
										disableRipple={true}
									>
										<Box className={classes.repositoriesNewButtonIcon}>
											<i class="far fa-bookmark"></i>
										</Box>
										<Box className={classes.repositoriesNewButtonText}>New</Box>
									</Button>
								</MenuItem>
								<Input
									className={classes.repositoriesInput}
									disableUnderline={true}
									placeholder="Find a repository..."
								/>
								<Box className={classes.repositoriesList}>
									<MenuItem
										className={classes.repositoriesListItem}
										disableRipple={true}
									>
										<Box className={classes.repositoriesListItemIcon}>
											<i class="far fa-bookmark"></i>
										</Box>
										<Typography className={classes.repositoriesListItemText}>
											username/repository
										</Typography>
									</MenuItem>
									<MenuItem
										className={classes.repositoriesListItem}
										disableRipple={true}
									>
										<Box className={classes.repositoriesListItemIcon}>
											<i class="far fa-bookmark"></i>
										</Box>
										<Typography className={classes.repositoriesListItemText}>
											username/repository
										</Typography>
									</MenuItem>
									<MenuItem
										className={classes.repositoriesListItem}
										disableRipple={true}
									>
										<Box className={classes.repositoriesListItemIcon}>
											<i class="far fa-bookmark"></i>
										</Box>
										<Typography className={classes.repositoriesListItemText}>
											username/repository
										</Typography>
									</MenuItem>
									<MenuItem
										className={classes.repositoriesListItem}
										disableRipple={true}
									>
										<Box className={classes.repositoriesListItemIcon}>
											<i class="far fa-bookmark"></i>
										</Box>
										<Typography className={classes.repositoriesListItemText}>
											username/repository
										</Typography>
									</MenuItem>
									<MenuItem
										className={classes.repositoriesListItem}
										disableRipple={true}
									>
										<Box className={classes.repositoriesListItemIcon}>
											<i class="far fa-bookmark"></i>
										</Box>
										<Typography className={classes.repositoriesListItemText}>
											username/repository
										</Typography>
									</MenuItem>
									<MenuItem
										className={classes.repositoriesListItem}
										disableRipple={true}
									>
										<Box className={classes.repositoriesListItemIcon}>
											<i class="far fa-bookmark"></i>
										</Box>
										<Typography className={classes.repositoriesListItemText}>
											username/repository
										</Typography>
									</MenuItem>
									<MenuItem
										className={classes.repositoriesListItem}
										disableRipple={true}
									>
										<Box className={classes.repositoriesListItemIcon}>
											<i class="far fa-bookmark"></i>
										</Box>
										<Typography className={classes.repositoriesListItemText}>
											username/repository
										</Typography>
									</MenuItem>
									<MenuItem
										className={classes.repositoriesListItem}
										disableRipple={true}
									>
										<Box className={classes.repositoriesListItemIcon}>
											<i class="far fa-bookmark"></i>
										</Box>
										<Typography className={classes.repositoriesListItemText}>
											username/repository
										</Typography>
									</MenuItem>
								</Box>
								<Divider />
							</Box>
						</Grid>
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
