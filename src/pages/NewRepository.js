import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Link from "@material-ui/core/Link";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Paper from "@material-ui/core/Paper";
import Footer from "../components/Footer";

const useStyles = makeStyles(theme => ({
	newRepositoryContainer: {
		maxWidth: "768px",
		marginTop: "100px",
		marginBottom: "40px",
		marginLeft: "auto",
		marginRight: "auto",
		paddingLeft: "16px",
		paddingRight: "16px",
	},
	headerTextSmall: {
		fontSize: "14px",
		color: "#586069",
	},
	headerTextLarge: {
		fontSize: "24px",
		paddingTop: "16px",
		paddingBottom: "16px",
	},
	headerImportLink: {
		color: "#0366d6",
		cursor: "pointer",
		"&:hover": {
			textDecorationColor: "#0366d6",
		},
	},
	newRepositoryInfo: {
		marginTop: "40px",
	},
	infoPrimary: {
		display: "flex",
	},
	infoInputLabel: {
		fontSize: "14px",
		fontWeight: "bold",
		color: "#000",
		marginBottom: "10px",
	},
	inputRequired: {
		fontSize: "16px",
		color: "#cb2431",
	},
	ownerInput: {
		border: "1px solid #e1e4e8",
		backgroundColor: "#fafbfc",
		borderRadius: "6px",
		height: "32px",
		textTransform: "none",
	},
	ownerButtonAvatar: {
		width: "20px",
		height: "20px",
		borderRadius: "50%",
		marginLeft: "8px",
	},
	ownerButtonText: {
		paddingLeft: "8px",
		paddingRight: "4px",
		fontSize: "14px",
		fontWeight: "bold",
	},
	ownerButtonIcon: {
		fontSize: "12px",
		marginRight: "8px",
		paddingTop: "2px",
	},
	ownerMenuList: {
		paddingTop: 0,
		paddingBottom: 0,
	},
	ownerMenuItem: {
		paddingLeft: "12px",
		paddingTop: "8px",
		paddingBottom: "8px",
		transition: "none",
		"&:hover": {
			backgroundColor: "#0366d6",
			color: "#fff",
		},
	},
	ownerMenuItemIcon: {
		fontSize: "12px",
	},
	ownerMenuItemAvatar: {
		width: "20px",
		height: "20px",
		borderRadius: "50%",
		marginLeft: "8px",
		marginRight: "8px",
	},
	ownerMenuItemText: {
		fontSize: "12px",
		fontWeight: "bold",
	},
	inputSlash: {
		fontSize: "32px",
		fontweight: "bold",
		paddingTop: "16px",
		paddingLeft: "8px",
		paddingRight: "8px",
	},

	repositoryNameInput: {
		border: "1px solid #e1e4e8",
		borderRadius: "6px",
		backgroundColor: "#fafbfc",
		height: "32px",
		width: "250px",
		padding: "12px",
		fontSize: "14px",
	},
	repositoryNameSuggestion: {
		fontSize: "14px",
		marginTop: "4px",
		marginBottom: "10px",
	},
	suggestionItem: {
		fontSize: "14px",
		fontWeight: "bold",
		color: "#22863a",
		cursor: "pointer",
	},
	infoSecondary: {
		marginTop: "20px",
		marginBottom: "16px",
	},
	inputOptional: {
		fontSize: "12px",
		color: "#586069",
	},
	repositoryDescriptionInput: {
		width: "100%",
		border: "1px solid #e1e4e8",
		borderRadius: "6px",
		backgroundColor: "#fafbfc",
		height: "32px",
		padding: "12px",
		fontSize: "14px",
	},
	newRepositoryPrivacy: {
		paddingTop: "16px",
		paddingBottom: "16px",
	},
	privacyRadio: {
		"&:hover": {
			backgroundColor: "transparent",
		},
	},
	privacyRadioIcon: {
		borderRadius: "50%",
		width: "12px",
		height: "12px",
		boxShadow:
			"inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1)",
		backgroundColor: "transparent",
		"$root.Mui-focusVisible &": {
			outline: "2px auto rgba(19, 124, 189, 0.6)",
			outlineOffset: 2,
		},
	},
	privacyRadioIconChecked: {
		backgroundColor: "#959da5",
		"&:before": {
			display: "block",
			width: "12px",
			height: "12px",
			backgroundImage: "radial-gradient(#fff, #fff 28%, transparent 32%)",
			content: '""',
		},
		"input:hover ~ &": {
			backgroundcolor: "#106ba3",
		},
	},
	privacyPublic: {
		display: "flex",
		marginBottom: "12px",
	},
	privacyPublicIcon: {
		fontSize: "32px",
		marginRight: "12px",
		color: "#586069",
	},
	privacyPublicTextPrimary: {
		fontSize: "14px",
		fontWeight: "bold",
	},
	privacyPublicTextSecondary: {
		fontSize: "12px",
		color: "#586069",
	},
	privacyPrivate: {
		display: "flex",
		marginTop: "12px",
	},
	privacyPrivateIcon: {
		fontSize: "32px",
		marginRight: "12px",
		color: "#b08800",
	},
	privacyPrivateTextPrimary: {
		fontSize: "14px",
		fontWeight: "bold",
	},
	privacyPrivateTextSecondary: {
		fontSize: "12px",
		color: "#586069",
	},
	newRepositoryCheckboxes: {
		marginTop: "16px",
		marginBottom: "20px",
	},
	checkboxesHeader: {
		fontSize: "14px",
		fontWeight: "bold",
	},
	checkboxesText: {
		fontSize: "14px",
		color: "#586069",
	},
	checkboxReadmeContainer: {
		marginBottom: "12px",
		marginTop: "8px",
	},
	checkboxIgnoreContainer: {
		marginBottom: "12px",
	},
	checkboxLicenceContainer: {
		marginBottom: "24px",
	},
	checkbox: {
		"&&:hover": {
			backgroundColor: "transparent",
		},
	},
	checkboxOutline: {
		fontSize: "16px",
		color: "#959da5",
	},
	checkboxIcon: {
		fontSize: "16px",
		color: "#959da5",
	},
	checkboxLabel: {
		fontSize: "14px",
		fontWeight: "bold",
		cursor: "default",
	},
	checkboxText: {
		fontSize: "12px",
		color: "#586069",
		marginLeft: "24px",
		lineHeight: 0.5,
	},
	checkboxTextLink: {
		color: "#0366d6",
		cursor: "pointer",
		"&:hover": {
			textDecorationColor: "#0366d6",
		},
	},
	ignoreButton: {
		backgroundColor: "#fafbfc",
		border: "1px solid #e1e4e8",
		borderRadius: "6px",
		height: "28px",
		textTransform: "none",
		fontSize: "12px",
		fontWeight: "bold",
		color: "#586069",
		marginTop: "12px",
		marginLeft: "24px",
		transition: "none",
	},
	ignoreMenuList: {
		paddingTop: 0,
		paddingBottom: 0,
	},
	ignoreMenuItem: {
		fontSize: "13px",
		transition: "none",

		"&:hover": {
			backgroundColor: "#0366d6",
			color: "#fff",
		},
	},
	licenceButton: {
		backgroundColor: "#fafbfc",
		border: "1px solid #e1e4e8",
		borderRadius: "6px",
		height: "28px",
		textTransform: "none",
		fontSize: "12px",
		marginTop: "12px",
		marginLeft: "24px",
		transition: "none",
	},
	licenceMenuList: {
		paddingTop: 0,
		paddingBottom: 0,
	},
	licenceMenuItem: {
		fontSize: "13px",
		transition: "none",
		"&:hover": {
			backgroundColor: "#0366d6",
			color: "#fff",
		},
	},
	buttonValue: {
		paddingLeft: "4px",
		paddingRight: "4px",
		color: "#000",
		fontWeight: "bold",
	},
	buttonIcon: {
		color: "#000",
	},
	checkboxesInfoText: {
		fontSize: "14px",
		color: "#586069",
	},
	main: {
		backgroundColor: "#eff7ff",
		borderRadius: "6px",
		fontSize: "13px",
		color: "#586069",
		padding: "4px",
		fontFamily: "monospace",
	},
	mainLink: {
		color: "#0366d6",
		cursor: "pointer",
		"&:hover": {
			textDecorationColor: "#0366d6",
		},
	},
	newRepositoryCreate: {
		marginTop: "16px",
		marginBottom: "30px",
	},
	createButton: {
		fontSize: "14px",
		fontWeight: "bold",
		backgroundColor: "#2ea44f",
		color: "#fff",
		border: "1px solid rgba(27, 31, 35, 0.15)",
		borderRadius: "6px",
		textTransform: "none",
		height: "32px",
		transition: "none",
		"&:hover": {
			backgroundColor: "#2c974b",
		},
	},
	createButtonDisabled: {
		backgroundColor: "#94d3a2",
		border: "1px solid rgba(27, 31, 35, 0.1)",
		color: "#fff",
	},

	ignoreHeader: {
		position: "sticky",
		top: 0,
		backgroundColor: "#fff",
		zIndex: 2,
	},
	ignoreHeaderContent: {
		width: "100%",
		borderRadius: 0,
		boxShadow: "none",
	},
	ignoreHeaderTextContainer: {
		backgroundColor: "#f6f8fa",
		padding: "8px",
	},
	ignoreHeaderText: {
		fontSize: "12px",
		fontWeight: "bold",
	},
	ignoreHeaderInputContainer: {
		width: "100%",
		padding: "12px",
	},
	ignoreHeaderInput: {
		height: "32px",
		width: "100%",
		border: "1px solid #e1e4e8",
		borderRadius: "6px",
		paddingLeft: "4px",
		"& ::-webkit-input-placeholder": {
			fontSize: "14px",
			opacity: 1,
			color: "#586069",
		},
	},
	licenceHeader: {
		position: "sticky",
		backgroundColor: "#fff",
		top: 0,
		zIndex: 2,
	},
	licenceHeaderContent: {
		width: "100%",
		borderRadius: 0,
		boxShadow: "none",
	},
	licenceHeaderTextContainer: {
		backgroundColor: "#f6f8fa",
		padding: "8px",
		display: "flex",
	},
	licenceHeaderText: {
		fontSize: "12px",
		fontWeight: "bold",
		flex: 1,
	},
	licenceHeaderIcon: {
		color: "#959da5",
		marginRight: "4px",
		cursor: "pointer",
		"&:hover": {
			color: "#000",
		},
	},
}));

function NewRepository() {
	const classes = useStyles();
	const [anchorElOwner, setAnchorElOwner] = React.useState(null);
	const [privacyValue, setPrivacyValue] = React.useState("public");
	const [hideReadme, setHideReadme] = React.useState(null);
	const [hideIgnore, setHideIgnore] = React.useState(null);
	const [hideLicence, setHideLicence] = React.useState(null);
	const [repositoryName, setRepositoryName] = React.useState("");
	const [anchorElIgnore, setAnchorElIgnore] = React.useState(null);
	const [anchorElLicence, setAnchorElLicence] = React.useState(null);

	// Open and close repository owner selection menu

	const handleClickOwner = event => {
		setAnchorElOwner(event.currentTarget);
	};

	const handleCloseOwner = () => {
		setAnchorElOwner(null);
	};

	// Change repository privacy public/private

	const handleChangePrivacy = event => {
		setPrivacyValue(event.target.value);
	};

	// Show and hide readme info text

	const toggleHideReadme = () => {
		setHideReadme(prev => !prev);
	};

	// Show and hide ignore info text

	const toggleHideIgnore = () => {
		setHideIgnore(prev => !prev);
	};

	// Show and hide licence info text

	const toggleHideLicence = () => {
		setHideLicence(prev => !prev);
	};

	// Check repository name value

	const handleRepositoryName = event => {
		setRepositoryName(event.target.value);
	};

	// Open and close ignore menu

	const handleClickIgnore = event => {
		setAnchorElIgnore(event.currentTarget);
	};

	const handleCloseIgnore = () => {
		setAnchorElIgnore(null);
	};

	// Open and close licence menu

	const handleClickLicence = event => {
		setAnchorElLicence(event.currentTarget);
	};

	const handleCloseLicence = () => {
		setAnchorElLicence(null);
	};

	return (
		<React.Fragment>
			<Box className={classes.newRepositoryContainer}>
				<Box className={classes.newRepositoryHeader}>
					<Typography className={classes.headerTextSmall}>
						A repository contains all project files, including the revision
						history. Already have a project repository elsewhere?{" "}
						<Link to="/" className={classes.headerImportLink}>
							Import a repository.
						</Link>
					</Typography>
					<Typography className={classes.headerTextLarge}>
						Create a new repository
					</Typography>
				</Box>
				<Divider />
				<Box className={classes.newRepositoryInfo}>
					<Box className={classes.infoPrimary}>
						<Box className={classes.ownerInputContainer}>
							<InputLabel
								className={classes.infoInputLabel}
								htmlFor="ownerInput"
							>
								Owner <span className={classes.inputRequired}>*</span>
							</InputLabel>
							<Button
								className={classes.ownerInput}
								id="ownerInput"
								disableRipple={true}
								aria-controls="ownerMenu"
								aria-haspopup="true"
								onClick={handleClickOwner}
							>
								<img
									src="/images/avatar.png"
									alt="avatar"
									className={classes.ownerButtonAvatar}
								/>
								<Typography className={classes.ownerButtonText}>
									username
								</Typography>
								<Box className={classes.ownerButtonIcon}>
									<i class="fas fa-caret-down"></i>
								</Box>
							</Button>
							<Menu
								className={classes.ownerMenu}
								id="ownerMenu"
								transitionDuration={0}
								anchorEl={anchorElOwner}
								open={Boolean(anchorElOwner)}
								onClose={handleCloseOwner}
								classes={{ list: classes.ownerMenuList }}
								PaperProps={{
									style: {
										backgroundColor: "#fff",
										marginTop: "38px",
										width: "300px",
										boxShadow: "0 8px 24px rgba(149,157,165,0.2)",
										border: "1px solid #e1e4e8",
										borderRadius: "6px",
									},
								}}
							>
								<MenuItem
									className={classes.ownerMenuItem}
									disableRipple={true}
									onClick={handleCloseOwner}
								>
									<Box className={classes.ownerMenuItemIcon}>
										<i class="fas fa-check"></i>
									</Box>
									<img
										src="/images/avatar.png"
										alt="avatar"
										className={classes.ownerMenuItemAvatar}
									/>
									<Typography className={classes.ownerMenuItemText}>
										username
									</Typography>
								</MenuItem>
							</Menu>
						</Box>
						<Typography className={classes.inputSlash}>/</Typography>
						<Box className={classes.repositoryNameInputContainer}>
							<InputLabel
								className={classes.infoInputLabel}
								htmlFor="repositoryNameInput"
							>
								Repository name <span className={classes.inputRequired}>*</span>
							</InputLabel>
							<Input
								className={classes.repositoryNameInput}
								id="repositoryNameInput"
								disableUnderline={true}
								value={repositoryName}
								onChange={handleRepositoryName}
							/>
						</Box>
					</Box>
					<Typography className={classes.repositoryNameSuggestion}>
						Great repository names are short and memorable. Need inspiration?
						How about{" "}
						<Link to="/" className={classes.suggestionItem}>
							urban-potato
						</Link>
						?
					</Typography>
					<Box className={classes.infoSecondary}>
						<InputLabel
							className={classes.infoInputLabel}
							htmlFor="repositoryDescriptionInput"
						>
							Description{" "}
							<span className={classes.inputOptional}>(optional)</span>
						</InputLabel>
						<Input
							className={classes.repositoryDescriptionInput}
							id="repositoryDescriptionInput"
							disableUnderline={true}
						/>
					</Box>
					<Divider />
					<Box className={classes.newRepositoryPrivacy}>
						<Box className={classes.privacyPublic}>
							<Radio
								className={classes.privacyRadio}
								color="default"
								size="small"
								disableRipple={true}
								checked={privacyValue === "public"}
								onChange={handleChangePrivacy}
								value="public"
								checkedIcon={
									<span
										className={clsx(
											classes.privacyRadioIcon,
											classes.privacyRadioIconChecked
										)}
									/>
								}
								icon={<span className={classes.privacyRadioIcon} />}
							/>
							<Box className={classes.privacyPublicIcon}>
								<i class="far fa-bookmark"></i>
							</Box>
							<Box className={classes.privacyPublicText}>
								<Typography className={classes.privacyPublicTextPrimary}>
									Public
								</Typography>
								<Typography className={classes.privacyPublicTextSecondary}>
									Anyone in the internet can see this repository. You can choose
									who can commit.
								</Typography>
							</Box>
						</Box>
						<Box className={classes.privacyPrivate}>
							<Radio
								className={classes.privacyRadio}
								color="default"
								size="small"
								disableRipple={true}
								checked={privacyValue === "private"}
								onChange={handleChangePrivacy}
								value="private"
								checkedIcon={
									<span
										className={clsx(
											classes.privacyRadioIcon,
											classes.privacyRadioIconChecked
										)}
									/>
								}
								icon={<span className={classes.privacyRadioIcon} />}
							/>
							<Box className={classes.privacyPrivateIcon}>
								<i class="fas fa-lock"></i>
							</Box>
							<Box className={classes.privacyPrivateText}>
								<Typography className={classes.privacyPrivateTextPrimary}>
									Private
								</Typography>
								<Typography className={classes.privacyPrivateTextSecondary}>
									You can choose who can see and commit to this repository.
								</Typography>
							</Box>
						</Box>
					</Box>
					<Divider />
					<Box className={classes.newRepositoryCheckboxes}>
						<Typography className={classes.checkboxesHeader}>
							Initialize this repository with:
						</Typography>
						<Typography className={classes.checkboxesText}>
							Skip this step if you’re importing an existing repository.
						</Typography>

						<Box className={classes.checkboxReadmeContainer}>
							<FormControlLabel
								className={classes.checkboxControl}
								control={
									<Checkbox
										className={classes.checkbox}
										onChange={toggleHideReadme}
										icon={
											<CheckBoxOutlineBlankIcon
												className={classes.checkboxOutline}
											/>
										}
										checkedIcon={
											<CheckBoxIcon className={classes.checkboxIcon} />
										}
										disableRipple={true}
									/>
								}
								label={
									<Typography className={classes.checkboxLabel}>
										Add a README file
									</Typography>
								}
							/>
							<Typography className={classes.checkboxText}>
								This is where you can write a long description for your project.{" "}
								<Link
									href="https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/about-readmes"
									className={classes.checkboxTextLink}
								>
									Learn more.
								</Link>
							</Typography>
						</Box>
						<Box className={classes.checkboxIgnoreContainer}>
							<FormControlLabel
								className={classes.checkboxControl}
								control={
									<Checkbox
										className={classes.checkbox}
										onChange={toggleHideIgnore}
										icon={
											<CheckBoxOutlineBlankIcon
												className={classes.checkboxOutline}
											/>
										}
										checkedIcon={
											<CheckBoxIcon className={classes.checkboxIcon} />
										}
										disableRipple={true}
									/>
								}
								label={
									<Typography className={classes.checkboxLabel}>
										Add .gitignore
									</Typography>
								}
							/>
							<Typography className={classes.checkboxText}>
								Choose which files not to track from a list of templates.{" "}
								<Link
									href="https://docs.github.com/en/github/using-git/ignoring-files"
									className={classes.checkboxTextLink}
								>
									Learn more.
								</Link>
							</Typography>
							{hideIgnore && (
								<Button
									className={classes.ignoreButton}
									disableRipple={true}
									aria-controls="ignoreMenu"
									aria-haspopup="true"
									onClick={handleClickIgnore}
								>
									.gitignore template:
									<span className={classes.buttonValue}>value</span>
									<Box className={classes.buttonIcon}>
										<i class="fas fa-caret-down"></i>
									</Box>
								</Button>
							)}
							<Menu
								className={classes.ignoreMenu}
								id="ignoreMenu"
								transitionDuration={0}
								anchorEl={anchorElIgnore}
								open={Boolean(anchorElIgnore)}
								keepMounted
								onClose={handleCloseIgnore}
								classes={{ list: classes.ignoreMenuList }}
								PaperProps={{
									style: {
										backgroundColor: "#fff",
										marginTop: "64px",
										width: "300px",
										boxShadow: "0 8px 24px rgba(149,157,165,0.2)",
										border: "1px solid #e1e4e8",
										borderRadius: "6px",
										maxHeight: "220px",
									},
								}}
							>
								<Box className={classes.ignoreHeader}>
									<Paper className={classes.ignoreHeaderContent}>
										<Box className={classes.ignoreHeaderTextContainer}>
											<Typography className={classes.ignoreHeaderText}>
												.gitignore template
											</Typography>
										</Box>
										<Divider />
										<Box className={classes.ignoreHeaderInputContainer}>
											<Input
												className={classes.ignoreHeaderInput}
												disableUnderline={true}
												placeholder="Filter ignores..."
												type="text"
											/>
										</Box>
									</Paper>
									<Divider />
								</Box>
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									None
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Actionscript
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Ada
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Agda
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Android
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									AppEngine
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									AppceleratorTitanium
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									ArchLinuxPackages
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Autotools
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									C
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									C++
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									CFWheels
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									CMake
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									CUDA
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									CakePHP
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									ChefCookbook
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Clojure
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									CodeIgniter
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									CommonLisp
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Composer
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Concrete5
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Coq
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									CraftCMS
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									D
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									DM
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Dart
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Delphi
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Drupal
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									EPiServer
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Eagle
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Elisp
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Elixir
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Elm
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Erlang
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									ExpressionEngine
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									ExtJs
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Fancy
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Finale
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									ForceDotCom
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Fortran
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									FuelPHP
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									GWT
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									GitBook
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Go
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Godot
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Gradle
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Grails
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Haskell
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									IGORPro
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Idris
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									JENKINS_HOME
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Java
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Jboss
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Jekyll
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Joomla
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Julia
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									KiCAD
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Kohana
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Kotlin
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									LabVIEW
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Laravel
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Leiningen
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									LemonStand
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Lilypond
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Lithium
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Lua
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Magento
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Maven
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Mercury
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									MetaProgrammingSystem
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Nim
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Node
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									OCaml
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Objective-C
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Opa
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									OracleForms
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Packer
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Perl
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Perl6
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Phalcon
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									PlayFramework
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Plone
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Prestashop
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Processing
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									PureScript
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Python
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Qooxdoo
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Qt
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									R
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									ROS
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Rails
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									RhodesRhomobile
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Ruby
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Rust
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									SCons
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Sass
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Scala
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Scheme
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Scrivener
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Sdcc
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									SeamGen
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									SketchUp
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Smalltalk
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									SugarCRM
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Swift
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Symfony
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									SymphonyCMS
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									TeX
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Terraform
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Textpattern
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									TurboGears2
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Typo3
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Umbraco
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Unity
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									UnrealEngine
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									VVVV
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									VisualStudio
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Waf
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									WordPress
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Xojo
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Yeoman
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Yii
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									ZendFramework
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									Zephir
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									gcov
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									nanoc
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									opencart
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.ignoreMenuItem}
									disableRipple={true}
									onClick={handleCloseIgnore}
								>
									stella
								</MenuItem>
							</Menu>
						</Box>
						<Box className={classes.checkboxLicenceContainer}>
							<FormControlLabel
								className={classes.checkboxControl}
								control={
									<Checkbox
										className={classes.checkbox}
										onChange={toggleHideLicence}
										icon={
											<CheckBoxOutlineBlankIcon
												className={classes.checkboxOutline}
											/>
										}
										checkedIcon={
											<CheckBoxIcon className={classes.checkboxIcon} />
										}
										disableRipple={true}
									/>
								}
								label={
									<Typography className={classes.checkboxLabel}>
										Choose a licence
									</Typography>
								}
							/>
							<Typography className={classes.checkboxText}>
								Licence tells others what they can and can't do with your code.{" "}
								<Link
									href="https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/licensing-a-repository"
									className={classes.checkboxTextLink}
								>
									Learn more.
								</Link>
							</Typography>
							{hideLicence && (
								<Button
									className={classes.licenceButton}
									disableRipple={true}
									aria-controls="licenceMenu"
									aria-haspopup="true"
									onClick={handleClickLicence}
								>
									Licence: <span className={classes.buttonValue}>value</span>
									<Box className={classes.buttonIcon}>
										<i class="fas fa-caret-down"></i>
									</Box>
								</Button>
							)}
							<Menu
								className={classes.licenceMenu}
								id="licenceMenu"
								transitionDuration={0}
								anchorEl={anchorElLicence}
								open={Boolean(anchorElLicence)}
								onClose={handleCloseLicence}
								classes={{ list: classes.licenceMenuList }}
								PaperProps={{
									style: {
										backgroundColor: "#fff",
										marginTop: "36px",
										width: "300px",
										boxShadow: "0 8px 24px rgba(149,157,165,0.2)",
										border: "1px solid #e1e4e8",
										borderRadius: "6px",
										maxHeight: "200px",
									},
								}}
							>
								<Box className={classes.licenceHeader}>
									<Paper className={classes.licenceHeaderContent}>
										<Box className={classes.licenceHeaderTextContainer}>
											<Typography className={classes.licenceHeaderText}>
												Licence
											</Typography>
											<Box
												className={classes.licenceHeaderIcon}
												onClick={handleCloseLicence}
											>
												<i class="fas fa-times"></i>
											</Box>
										</Box>
									</Paper>
									<Divider />
								</Box>
								<MenuItem
									className={classes.licenceMenuItem}
									disableRipple={true}
									onClick={handleCloseLicence}
								>
									None
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.licenceMenuItem}
									disableRipple={true}
									onClick={handleCloseLicence}
								>
									Apache Licence 2.0
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.licenceMenuItem}
									disableRipple={true}
									onClick={handleCloseLicence}
								>
									GNU General Public Licence v3.0
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.licenceMenuItem}
									disableRipple={true}
									onClick={handleCloseLicence}
								>
									MIT Licence
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.licenceMenuItem}
									disableRipple={true}
									onClick={handleCloseLicence}
								>
									BSD 2-Clause "Simplified" Licence
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.licenceMenuItem}
									disableRipple={true}
									onClick={handleCloseLicence}
								>
									BSD 3-Clause "New" or "Revised" Licence
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.licenceMenuItem}
									disableRipple={true}
									onClick={handleCloseLicence}
								>
									Boost Software Licence 1.0
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.licenceMenuItem}
									disableRipple={true}
									onClick={handleCloseLicence}
								>
									Creative Commons Zero v1.0 Universal
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.licenceMenuItem}
									disableRipple={true}
									onClick={handleCloseLicence}
								>
									Eclipse Public Licence 2.0
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.licenceMenuItem}
									disableRipple={true}
									onClick={handleCloseLicence}
								>
									GNU Affero General Public Licence v3.0
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.licenceMenuItem}
									disableRipple={true}
									onClick={handleCloseLicence}
								>
									GNU General Public Licence v2.0
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.licenceMenuItem}
									disableRipple={true}
									onClick={handleCloseLicence}
								>
									GNU Lesser General Public Licence v2.1
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.licenceMenuItem}
									disableRipple={true}
									onClick={handleCloseLicence}
								>
									Mozilla Public Licence 2.0
								</MenuItem>
								<Divider />
								<MenuItem
									className={classes.licenceMenuItem}
									disableRipple={true}
									onClick={handleCloseLicence}
								>
									The Unlicence
								</MenuItem>
							</Menu>
						</Box>
						{hideReadme && (
							<Typography className={classes.checkboxesInfoText}>
								This will set{" "}
								<span className={classes.main}>
									<i class="fas fa-code-branch"></i> main
								</span>{" "}
								as the default branch. Change the default name in your{" "}
								<Link to="/" className={classes.mainLink}>
									settings
								</Link>
								.
							</Typography>
						)}
						{hideIgnore && (
							<Typography className={classes.checkboxesInfoText}>
								This will set{" "}
								<span className={classes.main}>
									<i class="fas fa-code-branch"></i> main
								</span>{" "}
								as the default branch. Change the default name in your{" "}
								<Link to="/" className={classes.mainLink}>
									settings
								</Link>
								.
							</Typography>
						)}
						{hideLicence && (
							<Typography className={classes.checkboxesInfoText}>
								This will set{" "}
								<span className={classes.main}>
									<i class="fas fa-code-branch"></i> main
								</span>{" "}
								as the default branch. Change the default name in your{" "}
								<Link to="/" className={classes.mainLink}>
									settings
								</Link>
								.
							</Typography>
						)}
					</Box>
					<Divider />
					<Box className={classes.newRepositoryCreate}>
						<Button
							className={classes.createButton}
							disableRipple={true}
							classes={{ disabled: classes.createButtonDisabled }}
							disabled={repositoryName.length < 1}
						>
							Create repository
						</Button>
					</Box>
				</Box>
			</Box>
			<Footer />
		</React.Fragment>
	);
}

export default NewRepository;
