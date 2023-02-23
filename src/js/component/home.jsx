import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="d-flex flex-column align-items-center">
			<div className="traffic-pole bg-dark">
				<p>hola</p>


			</div>
			<div className="traffic-box-ligth rounded d-flex flex-column align-items-center justify-content-center">
				
				<div className="light red m-1">
					<p>hola</p>
				</div>
				<div className="light yellow m-1">
					<p>hola</p>
				</div>
				<div className="light green m-1">
					<p>hola</p>
				</div>

			</div>
		</div>
	);
};

export default Home;
