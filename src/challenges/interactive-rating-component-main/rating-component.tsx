import { useState } from "react";
import './index.css';


function Rating() {
	
	return (
		<div className="main-container">
			<img src="images/icon-star.svg"/>
			
			<h1>How did we do?</h1>

			<p>
				Please let us know how we did with your support request. All feedback is appreciated 
				to help us improve our offering!
			</p>

			<span className="rating-button">1</span>
			<span className="rating-button">2</span>
			<span className="rating-button">3</span>
			<span className="rating-button">4</span>
			<span className="rating-button">5</span>

			

		</div>
	)
}

export default Rating