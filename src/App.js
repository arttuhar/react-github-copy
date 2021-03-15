import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";

function App() {
	return (
		<React.Fragment>
			<CssBaseline />
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Dashboard} />
				</Switch>
			</Router>
		</React.Fragment>
	);
}

export default App;
