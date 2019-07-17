import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Home from "./containers/Home/Home";
import Contact from "./containers/Contact/Contact";
import NavbarMain from "./components/navbar/Navbar"

function App() {
	return (
		<div>	
			<NavbarMain/>		
			<Router>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/contact" component={Contact} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
