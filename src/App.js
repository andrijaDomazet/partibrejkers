import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Home from "./containers/Home/Home";
import Tour from "./containers/Tour/Tour";
import News from "./containers/News/News";
import Photos from "./containers/Photos/Photos";
import Contact from "./containers/Contact/Contact";
import NavbarMain from "./components/navbar/Navbar";

function App() {
	return (
		<div>	
			<NavbarMain/>
			<Router>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/tour" exact component={Tour} />					
					<Route path="/news" exact component={News} />	
					<Route path="/photos" exact component={Photos} />				
					<Route path="/contact" component={Contact} />
				</Switch>
			</Router>			
			<Tour />	
			<News/>
			<Photos/>
			<Contact/>
		</div>
	);
}

export default App;
