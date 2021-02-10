import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Input from "@material-ui/core/Input";
import Link from "@material-ui/core/Link";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Radio from "@material-ui/core/Radio";

const useStyles = makeStyles(theme => ({
	importRepositoryContainer: {
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
		paddingTop: "16px",
		paddingBottom: "16px",
	},
	headerTextLarge: {
		fontSize: "24px",
	},
	importRepositoryClone: {
		marginTop: "34px",
		marginBottom: "34px",
	},
	cloneHeader: {
		fontSize: "20px",
		letterSpacing: 0,
	},
	cloneInput: {
		width: "100%",
		height: "32px",
		border: "1px solid #e1e4e8",
		borderRadius: "6px",
		backgroundColor: "#fafbfc",
		fontSize: "14px",
		paddingLeft: "12px",
		marginTop: "8px",
		marginBottom: "8px",

		"& ::-webkit-input-placeholder": {
			color: "#586069",
			opacity: 1,
			fontSize: "14px",
			letterSpacing: 0,
		},
		"&.Mui-focused": {
			borderColor: "#0366d6",
			boxShadow: "0 0 0 3px rgba(3, 102, 214, 0.3)",
		},
	},
	cloneText: {
		fontSize: "14px",
	},
	cloneTextLink: {
		color: "#0366d6",
		cursor: "pointer",
		"&:hover": {
			textDecoration: "none",
		},
	},
	importRepositoryInfo: {},
	infoHeader: {
		fontSize: "20px",
		marginBottom: "8px",
	},
	infoPrimary: {
		display: "flex",
		paddingBottom: "16px",
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
		"&.Mui-focused": {
			borderColor: "#0366d6",
			boxShadow: "0 0 0 3px rgba(3, 102, 214, 0.3)",
		},
	},
	privacyLabel: {
		fontSize: "14px",
		fontWeight: "bold",
		color: "#000",
	},
	importRepositoryPrivacy: {
		paddingTop: "16px",
		paddingBottom: "32px",
	},
	privacyRadio: {
		"&:hover": {
			cursor: "default",
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
	buttonsContainer: {
		float: "right",
		paddingTop: "24px",
	},
	buttonsCancel: {
		fontSize: "14px",
		fontWeight: "bold",
		color: "#0366d6",
		"&:hover": {
			textDecoration: "none",
		},
	},
	buttonsBegin: {
		border: "1px solid rgba(27, 31, 37, 0.15)",
		borderRadius: "6px",
		backgroundColor: "#2ea44f",
		height: "32px",
		textTransform: "none",
		fontSize: "14px",
		fontWeight: "bold",
		color: "#fff",
		transition: "none",
		marginLeft: "20px",
		paddingLeft: "16px",
		paddingRight: "16px",
		"&:hover": {
			backgroundColor: "#2c974b",
		},
	},
	buttonsBeginDisabled: {
		backgroundColor: "#94d3a2",
		border: "1px solid rgba(27, 31, 35, 0.1)",
		color: "#fff",
	},
}));

function ImportRepository() {
	const classes = useStyles();
	const [cloneUrl, setCloneUrl] = React.useState("");
	const [anchorElOwner, setAnchorElOwner] = React.useState(null);
	const [repositoryName, setRepositoryName] = React.useState("");
	const [privacyValue, setPrivacyValue] = React.useState("public");

	// Check clone URL value

	const handleCloneUrl = event => {
		setCloneUrl(event.target.value);
	};

	// Open and close repository owner selection menu

	const handleClickOwner = event => {
		setAnchorElOwner(event.currentTarget);
	};

	const handleCloseOwner = () => {
		setAnchorElOwner(null);
	};

	// Check repository name value

	const handleRepositoryName = event => {
		setRepositoryName(event.target.value);
	};

	// Change repository privacy public/private

	const handleChangePrivacy = event => {
		setPrivacyValue(event.target.value);
	};

	return (
		<React.Fragment>
			<Box className={classes.importRepositoryContainer}>
				<Box className={classes.importRepositoryHeader}>
					<Typography className={classes.headerTextLarge}>
						Import your project to GitHub
					</Typography>
					<Typography className={classes.headerTextSmall}>
						Import all the files, including the revision history, from another
						version control system.
					</Typography>
				</Box>
				<Divider />
				<Box className={classes.importRepositoryClone}>
					<Typography className={classes.cloneHeader}>
						Your old repository's clone URL
					</Typography>
					<Input
						className={classes.cloneInput}
						disableUnderline={true}
						placeholder="https://svn.example.org/code/svn"
						value={cloneUrl}
						onChange={handleCloneUrl}
					/>
					<Typography className={classes.cloneText}>
						Learn more about the types of{" "}
						<Link to="/" className={classes.cloneTextLink}>
							supported VCS.
						</Link>
					</Typography>
				</Box>
				<Box className={classes.importRepositoryInfo}>
					<Typography className={classes.infoHeader}>
						Your new repository details
					</Typography>
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
					<InputLabel className={classes.privacyLabel} htmlFor="privacyLabel">
						Privacy
					</InputLabel>
					<Box className={classes.importRepositoryPrivacy} id="privacyLabel">
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
				</Box>
				<Divider />
				<Box className={classes.importRepositoryButtons}>
					<Box className={classes.buttonsContainer}>
						<Link href="/" className={classes.buttonsCancel}>
							Cancel
						</Link>
						<Button
							className={classes.buttonsBegin}
							disableRipple={true}
							classes={{ disabled: classes.buttonsBeginDisabled }}
							disabled={cloneUrl.length < 1 || repositoryName.length < 1}
						>
							Begin import
						</Button>
					</Box>
				</Box>
			</Box>
		</React.Fragment>
	);
}

export default ImportRepository;
