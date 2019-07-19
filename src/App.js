import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Home from "./containers/Home/Home";
import Contact from "./containers/Contact/Contact";
import Tour from "./containers/Tour/Tour"
import NavbarMain from "./components/navbar/Navbar"

function App() {
	return (
		<div>	
			<NavbarMain/>
			<Router>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/tour" exact component={Tour} />
					<Route path="/contact" component={Contact} />
				</Switch>
			</Router>
			<Tour />	
		</div>
	);
}

export default App;
