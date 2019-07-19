import React from "react";
import "./Home.scss";
import partibrejkers from '../../images/partibrejkersi.jpg'

function Home() {
    return (
        <div className="overlay">
			<div id="home">
				<img src={partibrejkers} alt="partibrejkers"/>
			</div>
        </div>
    )
}

export default Home;
