import React,{useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	// const colors = ["red","yellow","green"];
	const [ color, setColor] = useState("selected"); 
	
	return (
		<div className="d-flex flex-column align-items-center">
			<div className="traffic-pole bg-dark">
				
			</div>
			<div className="traffic-box-ligth rounded d-flex flex-column align-items-center justify-content-center">
				
				<div className="light red selected m-1 ">
					
				</div>
				<div className={"light yellow m-1"} onClick={() => ("selected")}>
					
				</div>
				<div className="light green m-1">
					
				</div>

			</div>
		</div>
	);
};

export default Home;
