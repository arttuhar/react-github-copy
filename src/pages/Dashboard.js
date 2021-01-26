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
import Popover from "@material-ui/core/Popover";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
	dashboardContainer: {
		display: "flex",
		minHeight: "100vh",
		backgroundColor: "#f6f8fa",
		marginTop: "60px",
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
		padding: "24px",
		paddingTop: "32px",
		[theme.breakpoints.down(768)]: {
			paddingLeft: "16px",
			paddingRight: "16px",
		},
	},
	repositoriesHeader: {
		padding: 0,
		paddingBottom: "8px",
		cursor: "default",
		"&:hover": {
			backgroundColor: "#fff",
		},
		[theme.breakpoints.down(768)]: {
			paddingBottom: "4px",
			"&:hover": {
				backgroundColor: "#f6f8fa",
			},
		},
	},
	repositoriesText: {
		flex: 1,
		fontSize: "14px",
		fontWeight: "bold",
		[theme.breakpoints.down(768)]: {
			fontSize: "16px",
			fontWeight: "normal",
		},
	},
	repositoriesNewButton: {
		height: "28px",
		borderRadius: "6px",
		backgroundColor: "#2ea44f",
		border: "1px solid rgba(27, 31, 35, 0.15)",
		transition: "none",
		"&:hover": {
			backgroundColor: "#2c974b",
		},
		[theme.breakpoints.down(768)]: {
			display: "none",
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
	repositoriesMobile: {
		[theme.breakpoints.down(768)]: {
			border: "1px solid #eaecef",
			borderRadius: "6px",
			backgroundColor: "#fff",
			paddingTop: "12px",
			paddingLeft: "8px",
			paddingRight: "8px",
		},
	},
	repositoriesInput: {
		backgroundColor: "#fafbfc",
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
		[theme.breakpoints.down(768)]: {
			marginBottom: "4px",
		},
	},
	repositoriesListItem: {
		padding: 0,
		paddingBottom: "8px",
		"&:hover": {
			backgroundColor: "#fff",
			textDecoration: "underline",
			textDecorationColor: "#0366d6",
		},
		[theme.breakpoints.down(768)]: {},
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
	repositoryPopoverContainer: {
		pointerEvents: "none",
		transition: "none",
		[theme.breakpoints.down(768)]: {
			display: "none",
		},
	},
	popoverHeader: {
		padding: 0,
		"&:hover": {
			backgroundColor: "#fff",
		},
	},
	popoverHeaderIcon: {
		fontSize: "14px",
		color: "#586069",
		marginRight: "8px",
	},
	popoverHeaderText: {
		fontSize: "14px",
		fontWeight: "bold",
	},
	popoverText: {
		fontSize: "14px",
		color: "#586069",
		paddingTop: "8px",
		paddingBottom: "8px",
	},
	popoverFooter: {
		padding: 0,
	},
	popoverFooterLanguageIcon: {
		fontSize: "12px",
		color: "#f1e05a",
		marginRight: "4px",
	},
	popoverFooterLanguageText: {
		fontSize: "12px",
		color: "#586069",
		marginRight: "20px",
	},
	popoverFooterUpdated: {
		fontSize: "12px",
		color: "#586069",
	},
	repositoriesDivider: {
		[theme.breakpoints.down(768)]: {
			display: "none",
		},
	},
	repositoriesTeamContainer: {
		marginTop: "16px",
		[theme.breakpoints.down(768)]: {
			display: "none",
		},
	},
	repositoriesTeamHeader: {
		fontSize: "14px",
		fontWeight: "bold",
		paddingBottom: "4px",
	},
	repositoriesTeamText: {
		fontSize: "14px",
		color: "#586069",
		letterSpacing: 0.2,
		paddingBottom: "10px",
	},
	repositoriesTeamButton: {
		fontSize: "12px",
		fontWeight: "bold",
		color: "#0366d6",
		textTransform: "none",
		letterSpacing: 0.1,
		backgroundColor: "#fafbfc",
		border: "1px solid rgba(27, 31, 35, 0.15)",
		borderRadius: "6px",
		height: "28px",
		boxShadow: "0 1px 0 rgba(27, 31, 35, 0.04)",
		transition: "0.2 cubic-bezier(0.3, 0, 0.5, 1)",
		"&:hover": {
			backgroundColor: "#0366d6",
			color: "#fff",
			boxShadow: "0 1px 0 rgba(27, 31, 35, 0.1)",
		},
	},
	gridMain: {
		paddingTop: "32px",
		[theme.breakpoints.down(768)]: {
			paddingTop: 0,
		},
	},
	mainContainer: {
		backgroundColor: "#fff",
		border: "1px solid #eaecef",
		borderRadius: "6px",
		marginLeft: "16px",
		marginRight: "16px",
		padding: "32px",
		[theme.breakpoints.down(768)]: {
			marginTop: 0,
		},
	},
	mainHeader: {
		fontSize: "24px",
		fontWeight: "bold",
		lineHeight: 1.25,
		letterSpacing: 0.1,
		paddingBottom: "8px",
	},
	mainText: {
		fontSize: "16px",
		color: "#586069",
		paddingBottom: "16px",
	},
	mainTextLink: {
		color: "#0366d6",
		cursor: "pointer",
		"&:hover": {
			textDecoration: "underline",
			textDecorationColor: "#0366d6",
		},
	},
	mainButton: {
		height: "32px",
		fontSize: "14px",
		fontWeight: "bold",
		textTransform: "none",
		backgroundColor: "#fafbfc",
		border: "1px solid rgba(27, 31, 35, 0.15)",
		borderRadius: "6px",
		color: "#0366d6",
		boxShadow: "0 1px 0 rgba(27, 31, 35, 0.04)",
		transition: "0.2 cubic-bezier(0.3, 0, 0.5, 1)",
		"&:hover": {
			backgroundColor: "#0366d6",
			color: "#fff",
			boxShadow: "0 1px 0 rgba(27, 31, 35, 0.1)",
		},
	},
	mainUnder: {
		padding: "20px",
		marginBottom: "300px",
	},
	mainUnderTip: {
		display: "flex",
		marginBottom: "8px",
	},
	mainUnderTipIcon: {
		display: "inline-block",
		marginRight: "6px",
		fontSize: "16px",
	},
	mainUnderTipText: {
		display: "inline-block",
		fontSize: "13px",
		color: "#586069",
	},
	mainUnderTipLink: {
		color: "#0366d6",
		cursor: "pointer",
		"&:hover": {
			textDecoration: "underline",
			textDecorationColor: "#0366d6",
		},
	},
	mainUnderSubscribe: {
		display: "flex",
		cursor: "pointer",
	},
	mainUnderSubscribeIcon: {
		display: "inline-block",
		marginRight: "6px",
		fontSize: "14px",
	},
	mainUnderSubscribeText: {
		display: "inline-block",
		fontSize: "13px",
		color: "#586069",
		"&:hover": {
			color: "#0366d6",
			textDecoration: "underline",
			textDecorationColor: "#0366d6",
		},
	},
	mainFooter: {
		padding: "16px",
		paddingBottom: "0",
	},
	footerGridLogo: {
		[theme.breakpoints.down(960)]: {
			display: "none",
		},
	},
	footerItemLogo: {
		display: "flex",
		alignItems: "center",
		"&:hover": {
			textDecoration: "none",
		},
	},
	footerItemLogoIcon: {
		display: "inline-block",
		marginRight: "8px",
		fontSize: "24px",
		color: "#d1d5da",
		"&:hover": {
			color: "#586069",
		},
	},
	footerItemLogoText: {
		display: "inline-block",
		color: "#586069",
		fontSize: "13px",
		cursor: "pointer",
	},
	footerItem: {
		fontSize: "13px",
		color: "#586069",
		cursor: "pointer",
		"&:hover": {
			color: "#0366d6",
			textDecoration: "underline",
			textDecorationColor: "#0366d6",
		},
	},
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
	const [anchorElPopover, setAnchorElPopover] = React.useState(null);
	const openPopover = Boolean(anchorElPopover);

	// Open and close repository popover on hover

	const handleHoverPopover = event => {
		setAnchorElPopover(event.currentTarget);
	};

	const handleClosePopover = () => {
		setAnchorElPopover(null);
	};

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
								<Box className={classes.repositoriesMobile}>
									<Input
										className={classes.repositoriesInput}
										disableUnderline={true}
										placeholder="Find a repository..."
									/>
									<Box className={classes.repositoriesList}>
										<MenuItem
											className={classes.repositoriesListItem}
											disableRipple={true}
											aria-owns={openPopover ? "repositoryPopover" : undefined}
											aria-haspopup="true"
											onMouseEnter={handleHoverPopover}
											onMouseLeave={handleClosePopover}
										>
											<Box className={classes.repositoriesListItemIcon}>
												<i class="far fa-bookmark"></i>
											</Box>
											<Typography className={classes.repositoriesListItemText}>
												username/repository
											</Typography>
										</MenuItem>
										<Popover
											className={classes.repositoryPopoverContainer}
											id="repositoryPopover"
											open={openPopover}
											anchorEl={anchorElPopover}
											anchorOrigin={{
												vertical: "top",
												horizontal: "center",
											}}
											transformOrigin={{
												vertical: "bottom",
												horizontal: "left",
											}}
											PaperProps={{
												style: {
													width: "360px",
													padding: "16px",
													boxShadow: "0 8px 24px rgba(149, 157, 165, 0.2)",
													border: "1px solid #eaecef",
													borderRadius: "6px",
												},
											}}
											onClose={handleClosePopover}
											disableRestoreFocus
											transitionDuration="100"
										>
											<MenuItem
												className={classes.popoverHeader}
												disableRipple={true}
											>
												<Box className={classes.popoverHeaderIcon}>
													<i class="far fa-bookmark"></i>
												</Box>
												<Typography className={classes.popoverHeaderText}>
													username/repository
												</Typography>
											</MenuItem>
											<Typography className={classes.popoverText}>
												This is placeholder description for repository.
											</Typography>
											<MenuItem
												className={classes.popoverFooter}
												disableRipple={true}
											>
												<Box className={classes.popoverFooterLanguageIcon}>
													<i class="fas fa-circle"></i>
												</Box>
												<Typography
													className={classes.popoverFooterLanguageText}
												>
													JavaScript
												</Typography>
												<Typography className={classes.popoverFooterUpdated}>
													Updated yesterday
												</Typography>
											</MenuItem>
										</Popover>
										<MenuItem
											className={classes.repositoriesListItem}
											disableRipple={true}
											aria-owns={openPopover ? "repositoryPopover" : undefined}
											aria-haspopup="true"
											onMouseEnter={handleHoverPopover}
											onMouseLeave={handleClosePopover}
										>
											<Box className={classes.repositoriesListItemIcon}>
												<i class="far fa-bookmark"></i>
											</Box>
											<Typography className={classes.repositoriesListItemText}>
												username/repository
											</Typography>
										</MenuItem>
										<Popover
											className={classes.repositoryPopoverContainer}
											id="repositoryPopover"
											open={openPopover}
											anchorEl={anchorElPopover}
											anchorOrigin={{
												vertical: "top",
												horizontal: "center",
											}}
											transformOrigin={{
												vertical: "bottom",
												horizontal: "left",
											}}
											PaperProps={{
												style: {
													width: "360px",
													padding: "16px",
													boxShadow: "none",
													border: "1px solid #eaecef",
													borderRadius: "6px",
												},
											}}
											onClose={handleClosePopover}
											disableRestoreFocus
											transitionDuration="100"
										>
											<MenuItem
												className={classes.popoverHeader}
												disableRipple={true}
											>
												<Box className={classes.popoverHeaderIcon}>
													<i class="far fa-bookmark"></i>
												</Box>
												<Typography className={classes.popoverHeaderText}>
													username/repository
												</Typography>
											</MenuItem>
											<Typography className={classes.popoverText}>
												This is placeholder description for repository.
											</Typography>
											<MenuItem
												className={classes.popoverFooter}
												disableRipple={true}
											>
												<Box className={classes.popoverFooterLanguageIcon}>
													<i class="fas fa-circle"></i>
												</Box>
												<Typography
													className={classes.popoverFooterLanguageText}
												>
													JavaScript
												</Typography>
												<Typography className={classes.popoverFooterUpdated}>
													Updated yesterday
												</Typography>
											</MenuItem>
										</Popover>
										<MenuItem
											className={classes.repositoriesListItem}
											disableRipple={true}
											aria-owns={openPopover ? "repositoryPopover" : undefined}
											aria-haspopup="true"
											onMouseEnter={handleHoverPopover}
											onMouseLeave={handleClosePopover}
										>
											<Box className={classes.repositoriesListItemIcon}>
												<i class="far fa-bookmark"></i>
											</Box>
											<Typography className={classes.repositoriesListItemText}>
												username/repository
											</Typography>
										</MenuItem>
										<Popover
											className={classes.repositoryPopoverContainer}
											id="repositoryPopover"
											open={openPopover}
											anchorEl={anchorElPopover}
											anchorOrigin={{
												vertical: "top",
												horizontal: "center",
											}}
											transformOrigin={{
												vertical: "bottom",
												horizontal: "left",
											}}
											PaperProps={{
												style: {
													width: "360px",
													padding: "16px",
													boxShadow: "none",
													border: "1px solid #eaecef",
													borderRadius: "6px",
												},
											}}
											onClose={handleClosePopover}
											disableRestoreFocus
											transitionDuration="100"
										>
											<MenuItem
												className={classes.popoverHeader}
												disableRipple={true}
											>
												<Box className={classes.popoverHeaderIcon}>
													<i class="far fa-bookmark"></i>
												</Box>
												<Typography className={classes.popoverHeaderText}>
													username/repository
												</Typography>
											</MenuItem>
											<Typography className={classes.popoverText}>
												This is placeholder description for repository.
											</Typography>
											<MenuItem
												className={classes.popoverFooter}
												disableRipple={true}
											>
												<Box className={classes.popoverFooterLanguageIcon}>
													<i class="fas fa-circle"></i>
												</Box>
												<Typography
													className={classes.popoverFooterLanguageText}
												>
													JavaScript
												</Typography>
												<Typography className={classes.popoverFooterUpdated}>
													Updated yesterday
												</Typography>
											</MenuItem>
										</Popover>
										<MenuItem
											className={classes.repositoriesListItem}
											disableRipple={true}
											aria-owns={openPopover ? "repositoryPopover" : undefined}
											aria-haspopup="true"
											onMouseEnter={handleHoverPopover}
											onMouseLeave={handleClosePopover}
										>
											<Box className={classes.repositoriesListItemIcon}>
												<i class="far fa-bookmark"></i>
											</Box>
											<Typography className={classes.repositoriesListItemText}>
												username/repository
											</Typography>
										</MenuItem>
										<Popover
											className={classes.repositoryPopoverContainer}
											id="repositoryPopover"
											open={openPopover}
											anchorEl={anchorElPopover}
											anchorOrigin={{
												vertical: "top",
												horizontal: "center",
											}}
											transformOrigin={{
												vertical: "bottom",
												horizontal: "left",
											}}
											PaperProps={{
												style: {
													width: "360px",
													padding: "16px",
													boxShadow: "none",
													border: "1px solid #eaecef",
													borderRadius: "6px",
												},
											}}
											onClose={handleClosePopover}
											disableRestoreFocus
											transitionDuration="100"
										>
											<MenuItem
												className={classes.popoverHeader}
												disableRipple={true}
											>
												<Box className={classes.popoverHeaderIcon}>
													<i class="far fa-bookmark"></i>
												</Box>
												<Typography className={classes.popoverHeaderText}>
													username/repository
												</Typography>
											</MenuItem>
											<Typography className={classes.popoverText}>
												This is placeholder description for repository.
											</Typography>
											<MenuItem
												className={classes.popoverFooter}
												disableRipple={true}
											>
												<Box className={classes.popoverFooterLanguageIcon}>
													<i class="fas fa-circle"></i>
												</Box>
												<Typography
													className={classes.popoverFooterLanguageText}
												>
													JavaScript
												</Typography>
												<Typography className={classes.popoverFooterUpdated}>
													Updated yesterday
												</Typography>
											</MenuItem>
										</Popover>
										<MenuItem
											className={classes.repositoriesListItem}
											disableRipple={true}
											aria-owns={openPopover ? "repositoryPopover" : undefined}
											aria-haspopup="true"
											onMouseEnter={handleHoverPopover}
											onMouseLeave={handleClosePopover}
										>
											<Box className={classes.repositoriesListItemIcon}>
												<i class="far fa-bookmark"></i>
											</Box>
											<Typography className={classes.repositoriesListItemText}>
												username/repository
											</Typography>
										</MenuItem>
										<Popover
											className={classes.repositoryPopoverContainer}
											id="repositoryPopover"
											open={openPopover}
											anchorEl={anchorElPopover}
											anchorOrigin={{
												vertical: "top",
												horizontal: "center",
											}}
											transformOrigin={{
												vertical: "bottom",
												horizontal: "left",
											}}
											PaperProps={{
												style: {
													width: "360px",
													padding: "16px",
													boxShadow: "none",
													border: "1px solid #eaecef",
													borderRadius: "6px",
												},
											}}
											onClose={handleClosePopover}
											disableRestoreFocus
											transitionDuration="100"
										>
											<MenuItem
												className={classes.popoverHeader}
												disableRipple={true}
											>
												<Box className={classes.popoverHeaderIcon}>
													<i class="far fa-bookmark"></i>
												</Box>
												<Typography className={classes.popoverHeaderText}>
													username/repository
												</Typography>
											</MenuItem>
											<Typography className={classes.popoverText}>
												This is placeholder description for repository.
											</Typography>
											<MenuItem
												className={classes.popoverFooter}
												disableRipple={true}
											>
												<Box className={classes.popoverFooterLanguageIcon}>
													<i class="fas fa-circle"></i>
												</Box>
												<Typography
													className={classes.popoverFooterLanguageText}
												>
													JavaScript
												</Typography>
												<Typography className={classes.popoverFooterUpdated}>
													Updated yesterday
												</Typography>
											</MenuItem>
										</Popover>
										<MenuItem
											className={classes.repositoriesListItem}
											disableRipple={true}
											aria-owns={openPopover ? "repositoryPopover" : undefined}
											aria-haspopup="true"
											onMouseEnter={handleHoverPopover}
											onMouseLeave={handleClosePopover}
										>
											<Box className={classes.repositoriesListItemIcon}>
												<i class="far fa-bookmark"></i>
											</Box>
											<Typography className={classes.repositoriesListItemText}>
												username/repository
											</Typography>
										</MenuItem>
										<Popover
											className={classes.repositoryPopoverContainer}
											id="repositoryPopover"
											open={openPopover}
											anchorEl={anchorElPopover}
											anchorOrigin={{
												vertical: "top",
												horizontal: "center",
											}}
											transformOrigin={{
												vertical: "bottom",
												horizontal: "left",
											}}
											PaperProps={{
												style: {
													width: "360px",
													padding: "16px",
													boxShadow: "none",
													border: "1px solid #eaecef",
													borderRadius: "6px",
												},
											}}
											onClose={handleClosePopover}
											disableRestoreFocus
											transitionDuration="100"
										>
											<MenuItem
												className={classes.popoverHeader}
												disableRipple={true}
											>
												<Box className={classes.popoverHeaderIcon}>
													<i class="far fa-bookmark"></i>
												</Box>
												<Typography className={classes.popoverHeaderText}>
													username/repository
												</Typography>
											</MenuItem>
											<Typography className={classes.popoverText}>
												This is placeholder description for repository.
											</Typography>
											<MenuItem
												className={classes.popoverFooter}
												disableRipple={true}
											>
												<Box className={classes.popoverFooterLanguageIcon}>
													<i class="fas fa-circle"></i>
												</Box>
												<Typography
													className={classes.popoverFooterLanguageText}
												>
													JavaScript
												</Typography>
												<Typography className={classes.popoverFooterUpdated}>
													Updated yesterday
												</Typography>
											</MenuItem>
										</Popover>
										<MenuItem
											className={classes.repositoriesListItem}
											disableRipple={true}
											aria-owns={openPopover ? "repositoryPopover" : undefined}
											aria-haspopup="true"
											onMouseEnter={handleHoverPopover}
											onMouseLeave={handleClosePopover}
										>
											<Box className={classes.repositoriesListItemIcon}>
												<i class="far fa-bookmark"></i>
											</Box>
											<Typography className={classes.repositoriesListItemText}>
												username/repository
											</Typography>
										</MenuItem>
										<Popover
											className={classes.repositoryPopoverContainer}
											id="repositoryPopover"
											open={openPopover}
											anchorEl={anchorElPopover}
											anchorOrigin={{
												vertical: "top",
												horizontal: "center",
											}}
											transformOrigin={{
												vertical: "bottom",
												horizontal: "left",
											}}
											PaperProps={{
												style: {
													width: "360px",
													padding: "16px",
													boxShadow: "none",
													border: "1px solid #eaecef",
													borderRadius: "6px",
												},
											}}
											onClose={handleClosePopover}
											disableRestoreFocus
											transitionDuration="100"
										>
											<MenuItem
												className={classes.popoverHeader}
												disableRipple={true}
											>
												<Box className={classes.popoverHeaderIcon}>
													<i class="far fa-bookmark"></i>
												</Box>
												<Typography className={classes.popoverHeaderText}>
													username/repository
												</Typography>
											</MenuItem>
											<Typography className={classes.popoverText}>
												This is placeholder description for repository.
											</Typography>
											<MenuItem
												className={classes.popoverFooter}
												disableRipple={true}
											>
												<Box className={classes.popoverFooterLanguageIcon}>
													<i class="fas fa-circle"></i>
												</Box>
												<Typography
													className={classes.popoverFooterLanguageText}
												>
													JavaScript
												</Typography>
												<Typography className={classes.popoverFooterUpdated}>
													Updated yesterday
												</Typography>
											</MenuItem>
										</Popover>
										<MenuItem
											className={classes.repositoriesListItem}
											disableRipple={true}
											aria-owns={openPopover ? "repositoryPopover" : undefined}
											aria-haspopup="true"
											onMouseEnter={handleHoverPopover}
											onMouseLeave={handleClosePopover}
										>
											<Box className={classes.repositoriesListItemIcon}>
												<i class="far fa-bookmark"></i>
											</Box>
											<Typography className={classes.repositoriesListItemText}>
												username/repository
											</Typography>
										</MenuItem>
										<Popover
											className={classes.repositoryPopoverContainer}
											id="repositoryPopover"
											open={openPopover}
											anchorEl={anchorElPopover}
											anchorOrigin={{
												vertical: "top",
												horizontal: "center",
											}}
											transformOrigin={{
												vertical: "bottom",
												horizontal: "left",
											}}
											PaperProps={{
												style: {
													width: "360px",
													padding: "16px",
													boxShadow: "none",
													border: "1px solid #eaecef",
													borderRadius: "6px",
												},
											}}
											onClose={handleClosePopover}
											disableRestoreFocus
											transitionDuration="100"
										>
											<MenuItem
												className={classes.popoverHeader}
												disableRipple={true}
											>
												<Box className={classes.popoverHeaderIcon}>
													<i class="far fa-bookmark"></i>
												</Box>
												<Typography className={classes.popoverHeaderText}>
													username/repository
												</Typography>
											</MenuItem>
											<Typography className={classes.popoverText}>
												This is placeholder description for repository.
											</Typography>
											<MenuItem
												className={classes.popoverFooter}
												disableRipple={true}
											>
												<Box className={classes.popoverFooterLanguageIcon}>
													<i class="fas fa-circle"></i>
												</Box>
												<Typography
													className={classes.popoverFooterLanguageText}
												>
													JavaScript
												</Typography>
												<Typography className={classes.popoverFooterUpdated}>
													Updated yesterday
												</Typography>
											</MenuItem>
										</Popover>
									</Box>
								</Box>
								<Divider className={classes.repositoriesDivider} />
								<Box className={classes.repositoriesTeamContainer}>
									<Typography className={classes.repositoriesTeamHeader}>
										Working with a team?
									</Typography>
									<Typography className={classes.repositoriesTeamText}>
										GitHub is built for collaboration. Set up an organization to
										improve the way your team works together, and get access to
										more features.
									</Typography>
									<Button
										variant="outlined"
										className={classes.repositoriesTeamButton}
										disableRipple={true}
									>
										Create an organization
									</Button>
								</Box>
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
						>
							<Box className={classes.mainContainer}>
								<Typography className={classes.mainHeader}>
									Discover interesting projects and people to populate your
									personal news feed.
								</Typography>
								<Typography className={classes.mainText}>
									Your news feed helps you keep up with recent activity on
									repositories you{" "}
									<Link to="/" className={classes.mainTextLink}>
										watch
									</Link>{" "}
									and people you{" "}
									<Link to="/" className={classes.mainTextLink}>
										follow
									</Link>
									.
								</Typography>
								<Button variant="outlined" className={classes.mainButton}>
									Explore GitHub
								</Button>
							</Box>
							<Box className={classes.mainUnder}>
								<Box className={classes.mainUnderTip}>
									<Typography className={classes.mainUnderTipText}>
										<Box className={classes.mainUnderTipIcon}>
											<i class="far fa-lightbulb"></i>
										</Box>
										<b>ProTip!</b> The feed shows you events from people you{" "}
										<Link to="/" className={classes.mainUnderTipLink}>
											follow
										</Link>{" "}
										and repositories you{" "}
										<Link to="/" className={classes.mainUnderTipLink}>
											watch
										</Link>
										.
									</Typography>
								</Box>
								<Box className={classes.mainUnderSubscribe}>
									<Link to="/">
										<Typography className={classes.mainUnderSubscribeText}>
											<Box className={classes.mainUnderSubscribeIcon}>
												<i class="fas fa-rss"></i>
											</Box>
											Subscribe to your news feed
										</Typography>
									</Link>
								</Box>
							</Box>
							<Box className={classes.mainFooter}>
								<Grid container>
									<Grid
										item
										md={6}
										lg={6}
										xl={6}
										className={classes.footerGridLogo}
									>
										<Box>
											<Link to="/" className={classes.footerItemLogo}>
												<Box className={classes.footerItemLogoIcon}>
													<i class="fab fa-github"></i>
												</Box>
												<Typography className={classes.footerItemLogoText}>
													© 2021 GitHub, Inc.
												</Typography>
											</Link>
										</Box>
									</Grid>
									<Grid item xs={4} sm={4} md={2} lg={2} xl={2}>
										<Box>
											<Link to="/" className={classes.footerItem}>
												Blog
											</Link>
										</Box>
										<Box>
											<Link to="/" className={classes.footerItem}>
												About
											</Link>
										</Box>
										<Box>
											<Link to="/" className={classes.footerItem}>
												Shop
											</Link>
										</Box>
										<Box>
											<Link to="/" className={classes.footerItem}>
												Contact GitHub
											</Link>
										</Box>
										<Box>
											<Link to="/" className={classes.footerItem}>
												Pricing
											</Link>
										</Box>
									</Grid>
									<Grid item xs={4} sm={4} md={2} lg={2} xl={2}>
										<Box>
											<Link to="/" className={classes.footerItem}>
												API
											</Link>
										</Box>
										<Box>
											<Link to="/" className={classes.footerItem}>
												Training
											</Link>
										</Box>
										<Box>
											<Link to="/" className={classes.footerItem}>
												Status
											</Link>
										</Box>
										<Box>
											<Link to="/" className={classes.footerItem}>
												Security
											</Link>
										</Box>
									</Grid>
									<Grid item xs={4} sm={4} md={2} lg={2} xl={2}>
										<Box>
											<Link to="/" className={classes.footerItem}>
												Terms
											</Link>
										</Box>
										<Box>
											<Link to="/" className={classes.footerItem}>
												Privacy
											</Link>
										</Box>
										<Box>
											<Link to="/" className={classes.footerItem}>
												Docs
											</Link>
										</Box>
									</Grid>
								</Grid>
							</Box>
						</Grid>
						<Grid item md={3} lg={3} className={classes.gridExplore}></Grid>
					</Grid>
				</ThemeProvider>
			</Box>
		</React.Fragment>
	);
}

export default Dashboard;
