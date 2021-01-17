import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import Input from "@material-ui/core/Input";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
	navbarContainer: {
		backgroundColor: "#242a2d",
		height: "60px",
		justifyContent: "center",
		fontFamily: "sans-serif",
		boxShadow: "none",
	},
	navbarIcon: {
		color: "#fff",
		fontSize: "2.1rem",
		paddingLeft: "0.5rem",
		cursor: "pointer",
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
		marginRight: "5px",
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
	menuNewItem: {
		padding: "4px 8px 4px 16px",
		fontSize: "14px",
		color: "#24292e",
		transition: "none",
		"&:hover": {
			backgroundColor: "#036dd6",
			color: "#fff",
		},
	},
	navbarMenuProfile: {
		width: "45px",
		marginRight: "5px",
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
	profileLinkContainer: {
		width: "100%",
		justifyContent: "center",
		textAlign: "center",
		paddingBottom: "8px",
		outline: "none",
	},
	profileLink: {
		cursor: "pointer",
		color: "#24292e",
	},
	statusButton: {
		width: "150px",
		height: "30px",
		marginLeft: "15px",
		marginTop: "8px",
		marginBottom: "8px",
		borderRadius: "6px",
		textTransform: "none",
		fontSize: "12px",
		justifyContent: "flex-start",
		paddingLeft: "8px",
		color: "#586069",
		border: "1px solid #e1e4e8",
		transition: "none",
		"&:hover": {
			backgroundColor: "transparent",
			color: "#0366d6",
		},
	},
	statusIcon: {
		fontSize: "16px",
		paddingRight: "8px",
	},
	menuProfileItem: {
		padding: "4px 8px 4px 16px",
		fontSize: "14px",
		color: "#24292e",
		transition: "none",
		"&:hover": {
			backgroundColor: "#036dd6",
			color: "#fff",
		},
	},
	profileItemsPrimary: {
		marginTop: "8px",
		marginBottom: "8px",
	},
	profileItemsSecondary: {
		marginTop: "8px",
	},
}));

function Navbar() {
	const classes = useStyles();
	const [anchorElNew, setAnchorElNew] = React.useState(null);
	const [anchorElProfile, setAnchorElProfile] = React.useState(null);

	const handleClickNew = event => {
		setAnchorElNew(event.currentTarget);
	};

	const handleCloseNew = () => {
		setAnchorElNew(null);
	};

	const handleClickProfile = event => {
		setAnchorElProfile(event.currentTarget);
	};

	const handleCloseProfile = () => {
		setAnchorElProfile(null);
	};

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
						<Button
							className={classes.menuNewButton}
							disableRipple={true}
							aria-controls="newMenu"
							aria-haspopup="true"
							onClick={handleClickNew}
						>
							+
							<Box className={classes.menuNewIcon}>
								<i class="fas fa-caret-down"></i>
							</Box>
						</Button>
						<Menu
							className={classes.menuNewContainer}
							id="newMenu"
							anchorEl={anchorElNew}
							transitionDuration={0}
							keepMounted
							open={Boolean(anchorElNew)}
							onClose={handleCloseNew}
							PaperProps={{
								style: {
									backgroundColor: "#fff",
									marginTop: "32px",
									marginLeft: "-58px",
									width: "160px",
									paddingTop: 0,
									paddingBottom: 0,
									borderRadius: "6px",
									border: "1px solid #cccdce",
									boxShadow: "0 8px 24px rgba(149, 157, 165, 0.2)",
								},
							}}
						>
							<MenuItem
								className={classes.menuNewItem}
								disableRipple={true}
								onClick={handleCloseNew}
							>
								New repository
							</MenuItem>
							<MenuItem
								className={classes.menuNewItem}
								disableRipple={true}
								onClick={handleCloseNew}
							>
								Import repository
							</MenuItem>
							<MenuItem
								className={classes.menuNewItem}
								disableRipple={true}
								onClick={handleCloseNew}
							>
								New gist
							</MenuItem>
							<MenuItem
								className={classes.menuNewItem}
								disableRipple={true}
								onClick={handleCloseNew}
							>
								New organization
							</MenuItem>
							<MenuItem
								className={classes.menuNewItem}
								disableRipple={true}
								onClick={handleCloseNew}
							>
								New Project
							</MenuItem>
						</Menu>
					</Box>
					<Box className={classes.navbarMenuProfile}>
						<Button
							className={classes.menuProfileButton}
							disableRipple={true}
							aria-controls="profileMenu"
							aria-haspopup="true"
							onClick={handleClickProfile}
						>
							<img
								src="/images/avatar.png"
								alt="avatar"
								className={classes.buttonAvatar}
							/>
							<Box className={classes.menuProfileIcon}>
								<i class="fas fa-caret-down"></i>
							</Box>
						</Button>
						<Menu
							className={classes.menuProfileContainer}
							id="profileMenu"
							anchorEl={anchorElProfile}
							transitionDuration={0}
							keepMounted
							open={Boolean(anchorElProfile)}
							onClose={handleCloseProfile}
							PaperProps={{
								style: {
									backgroundColor: "#fff",
									marginTop: "32px",
									marginLeft: "-8px",
									width: "180px",
									paddingTop: 0,
									paddingBottom: 0,
									borderRadius: "6px",
									border: "1px solid #cccdce",
									boxShadow: "0 8px 24px rgba(149, 157, 165, 0.2)",
								},
							}}
						>
							<Box className={classes.profileLinkContainer}>
								<Link to="/" underline="none" className={classes.profileLink}>
									Signed in as <b>username</b>
								</Link>
							</Box>
							<Divider />
							<Box classname={classes.statusButtonContainer}>
								<Button
									variant="outlined"
									disableRipple={true}
									className={classes.statusButton}
									onClick={handleCloseProfile}
								>
									<Box className={classes.statusIcon}>
										<i class="far fa-smile"></i>
									</Box>
									Set status
								</Button>
							</Box>
							<Divider />
							<Box className={classes.profileItemsPrimary}>
								<MenuItem
									className={classes.menuProfileItem}
									disableRipple={true}
									onClick={handleCloseProfile}
								>
									Your profile
								</MenuItem>
								<MenuItem
									className={classes.menuProfileItem}
									disableRipple={true}
									onClick={handleCloseProfile}
								>
									Your repositories
								</MenuItem>
								<MenuItem
									className={classes.menuProfileItem}
									disableRipple={true}
									onClick={handleCloseProfile}
								>
									Your projects
								</MenuItem>
								<MenuItem
									className={classes.menuProfileItem}
									disableRipple={true}
									onClick={handleCloseProfile}
								>
									Your Stars
								</MenuItem>
								<MenuItem
									className={classes.menuProfileItem}
									disableRipple={true}
									onClick={handleCloseProfile}
								>
									Your gists
								</MenuItem>
							</Box>
							<Divider />
							<Box className={classes.profileItemsSecondary}>
								<MenuItem
									className={classes.menuProfileItem}
									disableRipple={true}
									onClick={handleCloseProfile}
								>
									Upgrage
								</MenuItem>
								<MenuItem
									className={classes.menuProfileItem}
									disableRipple={true}
									onClick={handleCloseProfile}
								>
									Feature Preview
								</MenuItem>
								<MenuItem
									className={classes.menuProfileItem}
									disableRipple={true}
									onClick={handleCloseProfile}
								>
									Help
								</MenuItem>
								<MenuItem
									className={classes.menuProfileItem}
									disableRipple={true}
									onClick={handleCloseProfile}
								>
									Settings
								</MenuItem>
								<MenuItem
									className={classes.menuProfileItem}
									disableRipple={true}
									onClick={handleCloseProfile}
								>
									Sign out
								</MenuItem>
							</Box>
						</Menu>
					</Box>
				</Toolbar>
			</AppBar>
		</React.Fragment>
	);
}

export default Navbar;
