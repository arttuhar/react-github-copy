import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import Input from "@material-ui/core/Input";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
	navbarContainer: {
		backgroundColor: "#242a2d",
		height: "60px",
		justifyContent: "center",
		fontFamily: "sans-serif",
	},
	navbarIcon: {
		color: "#fff",
		fontSize: "2.1rem",
		paddingLeft: "0.5rem",
		"&:hover": {
			color: "#cccdce",
		},
	},
	navbarSearch: {
		paddingLeft: "1rem",
		justifyContent: "center",
	},
	searchInput: {
		height: "30px",
		border: "1px solid #797c7f",
		width: "270px",
		borderRadius: "6px",
		backgroundColor: "transparent",
		"& ::-webkit-input-placeholder": {
			color: "#cccdce",
			fontSize: "14px",
			letterSpacing: 0,
			opacity: 1,
			cursor: "auto",
			paddingLeft: "12px",
		},
	},
	navbarLinks: {
		flex: 1,
	},
	linksItem: {
		paddingLeft: "1rem",
		color: "#fff",
		fontWeight: "bold",
		cursor: "pointer",
		"&:hover": {
			color: "#cccdce",
		},
	},
	navbarMenuNew: {
		width: "40px",
	},
	menuNewButton: {
		color: "#fff",
		fontSize: "20px",
		cursor: "pointer",
		"&:hover": {
			color: "#cccdce",
		},
	},
	menuNewIcon: {
		fontSize: "12px",
		paddingLeft: "4px",
		paddingTop: "6px",
	},
	navbarMenuProfile: {
		width: "45px",
	},
	menuProfileButton: {
		cursor: "pointer",
		color: "#fff",
		"&:hover": {
			color: "#cccdce",
		},
	},
	buttonAvatar: {
		width: "20px",
		height: "20px",
		borderRadius: "50%",
	},
	menuProfileIcon: {
		fontSize: "12px",
		paddingLeft: "4px",
		paddingTop: "6px",
	},
}));

function Navbar(props) {
	const classes = useStyles();
	return (
		<React.Fragment>
			<AppBar className={classes.navbarContainer}>
				<Toolbar>
					<Link to="/" className={classes.navbarIcon}>
						<i class="fab fa-github"></i>
					</Link>
					<Box className={classes.navbarSearch}>
						<Input
							className={classes.searchInput}
							type="text"
							disableUnderline={true}
							placeholder="Search or jump to..."
						/>
					</Box>
					<Box className={classes.navbarLinks}>
						<Link to="/" underline="none" className={classes.linksItem}>
							Pulls
						</Link>
						<Link to="/" underline="none" className={classes.linksItem}>
							Issues
						</Link>
						<Link to="/" underline="none" className={classes.linksItem}>
							Marketplace
						</Link>
						<Link to="/" underline="none" className={classes.linksItem}>
							Explore
						</Link>
					</Box>

					<Box className={classes.navbarMenuNew}>
						<Button className={classes.menuNewButton} disableRipple={true}>
							+
							<Box className={classes.menuNewIcon}>
								<i class="fas fa-caret-down"></i>
							</Box>
						</Button>
					</Box>
					<Box className={classes.navbarMenuProfile}>
						<Button className={classes.menuProfileButton} disableRipple={true}>
							<img
								src="/images/avatar.png"
								alt="avatar"
								className={classes.buttonAvatar}
							/>
							<Box className={classes.menuProfileIcon}>
								<i class="fas fa-caret-down"></i>
							</Box>
						</Button>
					</Box>
				</Toolbar>
			</AppBar>
		</React.Fragment>
	);
}

export default Navbar;
