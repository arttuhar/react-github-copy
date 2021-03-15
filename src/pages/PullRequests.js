import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import ResultsBox from "../components/ResultsBox";

const useStyles = makeStyles(theme => ({
	pullRequestsContainer: {
		maxWidth: "1012px",
		marginTop: "100px",
		marginBottom: "40px",
		marginLeft: "auto",
		marginRight: "auto",
		paddingLeft: "16px",
		paddingRight: "16px",
	},
	pullRequestsHeader: {
		paddingBottom: "16px",
	},
	headerButtonGroup: {
		marginRight: "16px",
		border: "1px solid #e1e4e8",
		borderRadius: "6px",
		height: "32px",
	},
	headerButtonGroupButton: {
		fontSize: "14px",
		fontWeight: "bold",
		textTransform: "none",
		paddingLeft: "16px",
		paddingRight: "16px",
	},
	headerInput: {
		width: "100%",
		border: "1px solid #e1e4e8",
		borderRadius: "6px",
		backgroundColor: "#fafbfc",
		paddingLeft: "12px",
		height: "32px",
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
}));

function PullRequests() {
	const classes = useStyles();
	return (
		<React.Fragment>
			<Box className={classes.pullRequestsContainer}>
				<Box className={classes.pullRequestsHeader}>
					<ButtonGroup
						className={classes.headerButtonGroup}
						variant="text"
						disableRipple={true}
					>
						<Button
							className={classes.headerButtonGroupButton}
							disableRipple={true}
						>
							Created
						</Button>
						<Button
							className={classes.headerButtonGroupButton}
							disableRipple={true}
						>
							Assigned
						</Button>
						<Button
							className={classes.headerButtonGroupButton}
							disableRipple={true}
						>
							Mentioned
						</Button>
						<Button
							className={classes.headerButtonGroupButton}
							disableRipple={true}
						>
							Review Requests
						</Button>
					</ButtonGroup>
					<Input
						className={classes.headerInput}
						disableUnderline={true}
						placeholder="Search all issues"
					/>
				</Box>
				<ResultsBox />
			</Box>
		</React.Fragment>
	);
}

export default PullRequests;
