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
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
	// Navigation bar
	navbarContainer: {
		backgroundColor: "#242a2d",
		height: "60px",
		justifyContent: "center",
		fontFamily: "sans-serif",
		boxShadow: "none",
		[theme.breakpoints.down(768)]: {
			display: "flex",
		},
	},

	// Mobile size menu
	navbarMenuMobile: {
		display: "none",
		marginLeft: "-28px",
		[theme.breakpoints.down(768)]: {
			display: "flex",
			flex: 1,
		},
	},
	menuMobileIcon: {
		color: "#fff",
		fontSize: "24px",
		"&:hover": {
			color: "#cccdce",
		},
	},
	menuMobileContainer: {
		[theme.breakpoints.up(768)]: {
			display: "none",
		},
	},
	mobileList: {
		paddingTop: "4px",
		paddingBottom: "14px",
	},
	menuMobileSearch: {
		marginLeft: "16px",
		marginRight: "16px",
		paddingBottom: "16px",
	},
	menuMobileSearchInput: {
		border: "1px solid #586069",
		borderRadius: "6px",
		height: "28px",
		width: "100%",
		paddingLeft: "12px",
		"& ::-webkit-input-placeholder": {
			color: "#cccdce",
			opacity: 1,
			fontSize: "14px",
			letterSpacing: 0,
		},
	},
	menuMobileSearchContainer: {
		[theme.breakpoints.up(768)]: {
			display: "none",
		},
	},
	mobileListSearch: {
		paddingTop: "0",
		paddingBottom: "0",
	},
	menuMobileSearchActive: {
		backgroundColor: "#fafbfc",
		height: "28px",
		width: "100%",
		paddingLeft: "12px",
		"& ::-webkit-input-placeholder": {
			color: "#586069",
			opacity: 1,
			fontSize: "14px",
			letterSpacing: 0,
		},
	},
	menuMobileSearchItem: {
		paddingTop: "8px",
		paddingBottom: "8px",
		minHeight: "44px",
		paddingRight: "0",
		transition: "none",
		"&:hover": {
			backgroundColor: "#036dd6",
			color: "#fff",
			"& $menuMobileSearchIcon": {
				color: "#fff",
			},
			"& $mobileSearchButton": {
				display: "flex",
			},
		},
	},
	menuMobileSearchIcon: {
		paddingRight: "12px",
		color: "#586069",
		fontSize: "16px",
	},
	mobileSearchText: {
		flex: 1,
		fontSize: "14px",
	},
	mobileSearchButton: {
		height: "24px",
		maxWidth: "76px",
		marginRight: "8px",
		borderRadius: "6px",
		textTransform: "none",
		fontSize: "12px",
		boxShadow: "none",
		textAlign: "center",
		backgroundColor: "#fafbfc",
		border: "1px solid #e1e4e8",
		color: "#586069",
		display: "none",
		"&:hover": {
			boxShadow: "none",
			backgroundColor: "#fafbfc",
		},
	},
	mobileMenuItem: {
		color: "#fff",
		fontWeight: "bold",
		letterSpacing: 0,
		fontSize: "14px",
		paddingTop: "8px",
		paddingBottom: "8px",
		"&:hover": {
			color: "#cccdce",
			backgroundColor: "transparent",
		},
	},
	mobileMenuDivider: {
		backgroundColor: "#586069",
		marginLeft: "16px",
		marginRight: "16px",
	},
	mobileIcon: {
		fontSize: "16px",
		paddingRight: "4px",
		marginLeft: "4px",
	},
	mobileText: {
		fontSize: "14px",
		fontWeight: "bold",
	},
	mobileAvatar: {
		width: "20px",
		height: "20px",
		borderRadius: "50%",
		marginRight: "4px",
	},

	// Logo
	navbarIcon: {
		color: "#fff",
		fontSize: "2.1rem",
		paddingLeft: "0.5rem",
		cursor: "pointer",
		"&:hover": {
			color: "#cccdce",
		},
		[theme.breakpoints.down(768)]: {
			marginLeft: "28px",
		},
	},
	empty: {
		[theme.breakpoints.down(768)]: {
			flex: 1,
		},
	},

	// Navigation bar search input
	navbarSearch: {
		paddingLeft: "1rem",
		justifyContent: "center",
		[theme.breakpoints.down(768)]: {
			display: "none",
		},
	},
	searchInput: {
		height: "28px",
		border: "1px solid #797c7f",
		width: "270px",
		borderRadius: "6px",
		backgroundColor: "transparent",
		paddingLeft: "12px",
		"& ::-webkit-input-placeholder": {
			color: "#cccdce",
			fontSize: "14px",
			letterSpacing: 0,
			opacity: 1,
		},
	},
	menuSearchContainer: {
		[theme.breakpoints.down(768)]: {
			display: "none",
		},
	},
	searchList: {
		paddingTop: "0",
		paddingBottom: "0",
	},
	menuSearchInput: {
		height: "28px",
		backgroundColor: "#fafbfc",
		paddingTop: 0,
		width: "100%",
		paddingLeft: "12px",
		"& ::-webkit-input-placeholder": {
			color: "#586069",
			opacity: 1,
			fontSize: "14px",
			letterSpacing: 0,
		},
	},
	menuSearchItem: {
		paddingTop: "8px",
		paddingBottom: "8px",
		minHeight: "44px",
		paddingRight: "0",
		transition: "none",
		"&:hover": {
			backgroundColor: "#036dd6",
			color: "#fff",
			"& $menuSearchIcon": {
				color: "#fff",
			},
			"& $menuSearchButton": {
				display: "flex",
			},
		},
	},
	menuSearchIcon: {
		paddingRight: "12px",
		color: "#586069",
		fontSize: "16px",
	},
	searchText: {
		flex: 1,
		fontSize: "14px",
	},
	menuSearchButton: {
		height: "24px",
		maxWidth: "76px",
		marginRight: "8px",
		borderRadius: "6px",
		textTransform: "none",
		fontSize: "12px",
		boxShadow: "none",
		textAlign: "center",
		backgroundColor: "#fafbfc",
		border: "1px solid #e1e4e8",
		color: "#586069",
		display: "none",
		"&:hover": {
			boxShadow: "none",
			backgroundColor: "#fafbfc",
		},
	},

	//Navigation bar links
	navbarLinks: {
		flex: 1,
		[theme.breakpoints.down(768)]: {
			display: "none",
		},
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

	// Navigation bar new/+ menu
	navbarMenuNew: {
		width: "40px",
		marginRight: "5px",
		[theme.breakpoints.down(768)]: {
			display: "none",
		},
	},
	menuNewContainer: {
		[theme.breakpoints.down(768)]: {
			display: "none",
		},
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

	// Navigation bar profile menu
	navbarMenuProfile: {
		width: "45px",
		marginRight: "5px",
		[theme.breakpoints.down(768)]: {
			display: "none",
		},
	},
	menuProfileContainer: {
		[theme.breakpoints.down(768)]: {
			display: "none",
		},
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
	statusModalContainer: {
		backgroundColor: "#fff",
		width: "448px",
		border: "1px solid #e1e4e8",
		borderRadius: "6px",
		left: "50%",
		transform: "translateX(-50%)",
		position: "fixed",
		margin: "10vh auto",
		outline: "none",
	},
	statusModalHeader: {
		padding: "16px",
		backgroundColor: "#f6f8fa",
		borderRadius: "4px",
		cursor: "default",
		"&:hover": {
			backgroundColor: "#f6f8fa",
		},
	},
	statusModalHeaderText: {
		flex: 1,
		fontSize: "14px",
		fontWeight: "bold",
	},
	statusModalHeaderIcon: {
		fontSize: "14px",
		color: "#586069",
		cursor: "pointer",
		"&:hover": {
			color: "#036dd6",
		},
	},
	statusModalInputContainer: {
		padding: "16px",
		cursor: "default",
		"&:hover": {
			backgroundColor: "#fff",
		},
	},
	statusModalIconButton: {
		height: "32px",
		minWidth: "42px",
		borderRadius: "6px 0 0 6px",
		backgroundColor: "#f6f8fa",
		border: "1px solid #e1e4e8",
		transition: "none",
		"&:hover": {
			backgroundColor: "#036dd6",
			"& $statusModalIcon": {
				color: "#fff",
			},
		},
	},
	statusModalIcon: {
		justifyContent: "center",
		alignItems: "center",
		fontSize: "16px",
		color: "#586069",
	},
	statusModalInput: {
		backgroundColor: "#f6f8fa",
		width: "100%",
		height: "32px",
		paddingLeft: "12px",
		border: "1px solid #e1e4e8",
		borderLeft: "none",
		borderRadius: "0 6px 6px 0",
		"& ::-webkit-input-placeholder": {
			color: "#586069",
			fontSize: "14px",
			letterSpacing: 0,
			opacity: 1,
		},
	},
	statusModalSuggestions: {
		paddingLeft: "16px",
		paddingRight: "16px",
		paddingBottom: "16px",
	},
	statusModalSuggestionsText: {
		fontSize: "13px",
		paddingBottom: "16px",
	},
	statusModalSuggestionsGrid: {
		marginLeft: "16px",
	},
	statusModalSuggestionsItem: {
		fontSize: "13px",
		color: "#586069",
		cursor: "pointer",
		"&:hover": {
			color: "#036dd6",
		},
	},
	statusModalSuggestionsIcon: {
		marginRight: "4px",
	},
}));

function Navbar() {
	const classes = useStyles();
	const [anchorElMobile, setAnchorElMobile] = React.useState(null);
	const [anchorElMobileSearch, setAnchorElMobileSearch] = React.useState(null);
	const [anchorElSearch, setAnchorElSearch] = React.useState(null);
	const [anchorElNew, setAnchorElNew] = React.useState(null);
	const [anchorElProfile, setAnchorElProfile] = React.useState(null);
	const [statusModal, setStatusModal] = React.useState(null);

	// Open and close mobile size menu (max width 768px) on click
	const handleClickMobile = event => {
		setAnchorElMobile(event.currentTarget);
	};

	const handleCloseMobile = () => {
		setAnchorElMobile(null);
	};

	// Open and close search menu inside mobile size menu on click
	const handleClickMobileSearch = event => {
		setAnchorElMobileSearch(event.currentTarget);
	};

	const handleCloseMobileSearch = () => {
		setAnchorElMobileSearch(null);
	};

	// Open and close search menu on click
	const handleClickSearch = event => {
		setAnchorElSearch(event.currentTarget);
	};

	const handleCloseSearch = () => {
		setAnchorElSearch(null);
	};

	const handleClickNew = event => {
		setAnchorElNew(event.currentTarget);
	};

	// Open and close new/+ menu on click
	const handleCloseNew = () => {
		setAnchorElNew(null);
	};

	// Open and close profile menu on click
	const handleClickProfile = event => {
		setAnchorElProfile(event.currentTarget);
	};

	const handleCloseProfile = () => {
		setAnchorElProfile(null);
	};

	// Open and close status modal

	const handleOpenStatusModal = () => {
		setStatusModal(true);
	};

	const handleCloseStatusModal = () => {
		setStatusModal(false);
	};

	return (
		<React.Fragment>
			<AppBar className={classes.navbarContainer}>
				<Toolbar>
					<Box className={classes.navbarMenuMobile}>
						<Button
							disableRipple={true}
							aria-controls="mobileMenu"
							aria-haspopup="true"
							onClick={handleClickMobile}
						>
							<Box className={classes.menuMobileIcon}>
								<i class="fas fa-bars"></i>
							</Box>
						</Button>
						<Menu
							className={classes.menuMobileContainer}
							id="mobileMenu"
							anchorEl={anchorElMobile}
							transitionDuration={0}
							keepMounted
							open={Boolean(anchorElMobile)}
							classes={{ list: classes.mobileList }}
							onClose={handleCloseMobile}
							PaperProps={{
								style: {
									backgroundColor: "#242a2d",
									width: "100%",
									maxWidth: "unset",
									marginTop: "44px",
									boxShadow: "none",
									borderRadius: 0,
									marginLeft: "-16px",
								},
							}}
						>
							<Box className={classes.menuMobileSearch}>
								<Input
									className={classes.menuMobileSearchInput}
									type="text"
									disableUnderline={true}
									placeholder="Search or jump to..."
									aria-controls="mobileMenuSearch"
									aria-haspopup="true"
									onClick={handleClickMobileSearch}
								/>
								<Menu
									className={classes.menuMobileSearchContainer}
									id="mobileMenuSearch"
									anchorEl={anchorElMobileSearch}
									transitionDuration={0}
									keepMounted
									open={Boolean(anchorElMobileSearch)}
									classes={{ list: classes.mobileListSearch }}
									onClose={handleCloseMobileSearch}
									PaperProps={{
										style: {
											width: "100%",
											borderRadius: "6px",
											border: "1px solid #cccdce",
											boxShadow: "0 8px 24px rgba(149, 157, 165, 0.2)",
										},
									}}
								>
									<Input
										className={classes.menuMobileSearchActive}
										type="text"
										disableUnderline={true}
										placeholder="Search or jump to..."
									/>
									<Divider />
									<MenuItem
										className={classes.menuMobileSearchItem}
										disableRipple={true}
										onClick={handleCloseMobileSearch}
									>
										<Box className={classes.menuMobileSearchIcon}>
											<i class="far fa-bookmark"></i>
										</Box>
										<Typography className={classes.mobileSearchText}>
											username/repository
										</Typography>
										<Button
											className={classes.mobileSearchButton}
											variant="contained"
											disableRipple={true}
										>
											Jump to
											<span>↵</span>
										</Button>
									</MenuItem>
									<Divider />
									<MenuItem
										className={classes.menuMobileSearchItem}
										disableRipple={true}
										onClick={handleCloseMobileSearch}
									>
										<Box className={classes.menuMobileSearchIcon}>
											<i class="far fa-bookmark"></i>
										</Box>
										<Typography className={classes.mobileSearchText}>
											username/repository
										</Typography>
										<Button
											className={classes.mobileSearchButton}
											variant="contained"
											disableRipple={true}
										>
											Jump to
											<span>↵</span>
										</Button>
									</MenuItem>
									<Divider />
									<MenuItem
										className={classes.menuMobileSearchItem}
										disableRipple={true}
										onClick={handleCloseMobileSearch}
									>
										<Box className={classes.menuMobileSearchIcon}>
											<i class="far fa-bookmark"></i>
										</Box>
										<Typography className={classes.mobileSearchText}>
											username/repository
										</Typography>
										<Button
											className={classes.mobileSearchButton}
											variant="contained"
											disableRipple={true}
										>
											Jump to
											<span>↵</span>
										</Button>
									</MenuItem>
									<Divider />
									<MenuItem
										className={classes.menuMobileSearchItem}
										disableRipple={true}
										onClick={handleCloseMobileSearch}
									>
										<Box className={classes.menuMobileSearchIcon}>
											<i class="far fa-bookmark"></i>
										</Box>
										<Typography className={classes.mobileSearchText}>
											username/repository
										</Typography>
										<Button
											className={classes.mobileSearchButton}
											variant="contained"
											disableRipple={true}
										>
											Jump to
											<span>↵</span>
										</Button>
									</MenuItem>
									<Divider />
									<MenuItem
										className={classes.menuMobileSearchItem}
										disableRipple={true}
										onClick={handleCloseMobileSearch}
									>
										<Box className={classes.menuMobileSearchIcon}>
											<i class="far fa-bookmark"></i>
										</Box>
										<Typography className={classes.mobileSearchText}>
											username/repository
										</Typography>
										<Button
											className={classes.mobileSearchButton}
											variant="contained"
											disableRipple={true}
										>
											Jump to
											<span>↵</span>
										</Button>
									</MenuItem>
								</Menu>
							</Box>
							<Divider className={classes.mobileMenuDivider} />
							<MenuItem
								className={classes.mobileMenuItem}
								disableRipple={true}
								onClick={handleCloseMobile}
							>
								Dashboard
							</MenuItem>
							<Divider className={classes.mobileMenuDivider} />
							<MenuItem
								className={classes.mobileMenuItem}
								disableRipple={true}
								onClick={handleCloseMobile}
							>
								Pull requests
							</MenuItem>
							<Divider className={classes.mobileMenuDivider} />
							<MenuItem
								className={classes.mobileMenuItem}
								disableRipple={true}
								onClick={handleCloseMobile}
							>
								Issues
							</MenuItem>
							<Divider className={classes.mobileMenuDivider} />
							<MenuItem
								className={classes.mobileMenuItem}
								disableRipple={true}
								onClick={handleCloseMobile}
							>
								Marketplace
							</MenuItem>
							<Divider className={classes.mobileMenuDivider} />
							<MenuItem
								className={classes.mobileMenuItem}
								disableRipple={true}
								onClick={handleCloseMobile}
							>
								Explore
							</MenuItem>
							<Divider className={classes.mobileMenuDivider} />
							<MenuItem
								className={classes.mobileMenuItem}
								disableRipple={true}
								onClick={handleCloseMobile}
							>
								Settings
							</MenuItem>
							<Divider className={classes.mobileMenuDivider} />
							<MenuItem
								className={classes.mobileMenuItem}
								disableRipple={true}
								onClick={handleCloseMobile}
							>
								<img
									src="/images/avatar.png"
									alt="avatar"
									className={classes.mobileAvatar}
								/>
								username
							</MenuItem>
							<Divider className={classes.mobileMenuDivider} />
							<MenuItem
								className={classes.mobileMenuItem}
								disableRipple={true}
								onClick={handleCloseMobile}
							>
								<Box className={classes.mobileIcon}>
									<i class="fas fa-sign-out-alt"></i>
								</Box>
								<Typography className={classes.mobileText}>Sign out</Typography>
							</MenuItem>
						</Menu>
					</Box>
					<Link to="/" className={classes.navbarIcon}>
						<i class="fab fa-github"></i>
					</Link>
					<Box className={classes.empty}></Box>
					<Box className={classes.navbarSearch}>
						<Input
							className={classes.searchInput}
							type="text"
							disableUnderline={true}
							placeholder="Search or jump to..."
							aria-controls="searchMenu"
							aria-haspopup="true"
							onClick={handleClickSearch}
						/>
						<Menu
							className={classes.menuSearchContainer}
							id="searchMenu"
							anchorEl={anchorElSearch}
							transitionDuration={0}
							keepMounted
							autoFocus={false}
							open={Boolean(anchorElSearch)}
							onClose={handleCloseSearch}
							classes={{ list: classes.searchList }}
							PaperProps={{
								style: {
									backgroundColor: "#fff",
									width: "270px",
									borderRadius: "6px",
									border: "1px solid #cccdce",
									boxShadow: "0 8px 24px rgba(149, 157, 165, 0.2)",
								},
							}}
						>
							<Input
								className={classes.menuSearchInput}
								type="text"
								disableUnderline={true}
								placeholder="Search or jump to..."
							/>
							<Divider />
							<MenuItem
								className={classes.menuSearchItem}
								disableRipple={true}
								onClick={handleCloseSearch}
							>
								<Box className={classes.menuSearchIcon}>
									<i class="far fa-bookmark"></i>
								</Box>
								<Typography className={classes.searchText}>
									username/repository
								</Typography>
								<Button
									className={classes.menuSearchButton}
									variant="contained"
									disableRipple={true}
								>
									Jump to
									<span>↵</span>
								</Button>
							</MenuItem>
							<Divider />
							<MenuItem
								className={classes.menuSearchItem}
								disableRipple={true}
								onClick={handleCloseSearch}
							>
								<Box className={classes.menuSearchIcon}>
									<i class="far fa-bookmark"></i>
								</Box>
								<Typography className={classes.searchText}>
									username/repository
								</Typography>
								<Button
									className={classes.menuSearchButton}
									variant="contained"
									disableRipple={true}
								>
									Jump to
									<span>↵</span>
								</Button>
							</MenuItem>
							<Divider />
							<MenuItem
								className={classes.menuSearchItem}
								disableRipple={true}
								onClick={handleCloseSearch}
							>
								<Box className={classes.menuSearchIcon}>
									<i class="far fa-bookmark"></i>
								</Box>
								<Typography className={classes.searchText}>
									username/repository
								</Typography>
								<Button
									className={classes.menuSearchButton}
									variant="contained"
									disableRipple={true}
								>
									Jump to
									<span>↵</span>
								</Button>
							</MenuItem>
							<Divider />
							<MenuItem
								className={classes.menuSearchItem}
								disableRipple={true}
								onClick={handleCloseSearch}
							>
								<Box className={classes.menuSearchIcon}>
									<i class="far fa-bookmark"></i>
								</Box>
								<Typography className={classes.searchText}>
									username/repository
								</Typography>
								<Button
									className={classes.menuSearchButton}
									variant="contained"
									disableRipple={true}
								>
									Jump to
									<span>↵</span>
								</Button>
							</MenuItem>
							<Divider />
							<MenuItem
								className={classes.menuSearchItem}
								disableRipple={true}
								onClick={handleCloseSearch}
							>
								<Box className={classes.menuSearchIcon}>
									<i class="far fa-bookmark"></i>
								</Box>
								<Typography className={classes.searchText}>
									username/repository
								</Typography>
								<Button
									className={classes.menuSearchButton}
									variant="contained"
									disableRipple={true}
								>
									Jump to
									<span>↵</span>
								</Button>
							</MenuItem>
						</Menu>
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
									onClick={handleOpenStatusModal}
								>
									<Box className={classes.statusIcon}>
										<i class="far fa-smile"></i>
									</Box>
									Set status
								</Button>
								<Modal
									className={classes.statusModal}
									open={statusModal}
									onClose={handleCloseStatusModal}
								>
									<Box className={classes.statusModalContainer}>
										<MenuItem
											className={classes.statusModalHeader}
											disableRipple={true}
										>
											<Typography className={classes.statusModalHeaderText}>
												Edit status
											</Typography>
											<Box
												className={classes.statusModalHeaderIcon}
												onClick={handleCloseStatusModal}
											>
												<i class="fas fa-times"></i>
											</Box>
										</MenuItem>
										<Divider />
										<MenuItem
											className={classes.statusModalInputContainer}
											disableRipple={true}
										>
											<Button
												className={classes.statusModalIconButton}
												disableRipple={true}
											>
												<Box className={classes.statusModalIcon}>
													<i class="far fa-smile"></i>
												</Box>
											</Button>
											<Input
												className={classes.statusModalInput}
												placeholder="What's happening?"
												disableUnderline={true}
											/>
										</MenuItem>
										<Box className={classes.statusModalSuggestions}>
											<Typography
												className={classes.statusModalSuggestionsText}
											>
												Suggestions:
											</Typography>
											<Grid
												container
												className={classes.statusModalSuggestionsGrid}
											>
												<Grid
													item
													sm={6}
													className={classes.statusModalSuggestionsItem}
												>
													<Box>
														<span
															className={classes.statusModalSuggestionsIcon}
														>
															🌴
														</span>
														On vacation
													</Box>
												</Grid>
												<Grid
													item
													sm={6}
													className={classes.statusModalSuggestionsItem}
												>
													<Box>
														<span
															className={classes.statusModalSuggestionsIcon}
														>
															🏠
														</span>
														Working from home
													</Box>
												</Grid>
												<Grid
													item
													sm={6}
													className={classes.statusModalSuggestionsItem}
												>
													<Box>
														<span
															className={classes.statusModalSuggestionsIcon}
														>
															🤒
														</span>
														Out sick
													</Box>
												</Grid>
												<Grid
													item
													sm={6}
													className={classes.statusModalSuggestionsItem}
												>
													<Box>
														<span
															className={classes.statusModalSuggestionsIcon}
														>
															🎯
														</span>
														Focusing
													</Box>
												</Grid>
											</Grid>
										</Box>
										<Box className={classes.statusModalBusyContainer}>
											<Box></Box>
										</Box>
									</Box>
								</Modal>
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
