import React, { useState } from "react";

//include images into your bundle

//create your first component
const Home = () => {
	const [color, setColor] = useState("red");
	return (
		<div className="traffic-light top">
			<div className="traffic-light">
				<div
					onClick={() => setColor("red")}
					className={
						"light red " + (color === "red" ? " glow" : "")
					}></div>
				<div
					onClick={() => setColor("yellow")}
					className={
						"light yellow" + (color === "yellow" ? " glow" : "")
					}></div>
				<div
					onClick={() => setColor("green")}
					className={
						"light green" + (color === "green" ? " glow" : "")
					}></div>
			</div>
		</div>
	);
};

export default Home;
