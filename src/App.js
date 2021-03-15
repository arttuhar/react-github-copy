import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import NewRepository from "./pages/NewRepository";
import ImportRepository from "./pages/ImportRepository";
import PullRequests from "./pages/PullRequests";

function App() {
	return (
		<React.Fragment>
			<CssBaseline />
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Dashboard} />
					<Route path="/pullrequests" component={PullRequests} />
					<Route path="/newrepository" component={NewRepository} />
					<Route path="/importrepository" component={ImportRepository} />
				</Switch>
			</Router>
		</React.Fragment>
	);
}

export default App;
