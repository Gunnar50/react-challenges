import { useState } from "react";
import './index.css';


function Rating() {
	const [rating, setRating] = useState<number>(0);
	const [isSubmit, setIsSubmit] = useState<boolean>(false);

	const submitRating = () => {
		if(rating === 0) return;
		setIsSubmit(true);
	}
	
	return (
		<div className="main-container">
			{!isSubmit ? 
			<div>
				<div className="icon"><img src="/rating-component/icon-star.svg" /></div>
				
				<h1>How did we do?</h1>

				<p>
					Please let us know how we did with your support request. All feedback is appreciated 
					to help us improve our offering!
				</p>
				<div className="rating-div">
					{Array.from({ length: 5 }).map((_, i) => (
						<button key={i} className="rating-button" onClick={() => setRating(i+1)}>{i + 1}</button>
					))}
				</div>
				
				<button className="submit-button" onClick={submitRating}>SUBMIT</button>
			</div>
			:	
			<div className="thank-you">
				<img src="/rating-component/illustration-thank-you.svg" className="thankyouicon" />
				
				<div className="selected">You selected {rating} out of 5</div>

				<h1>Thank You!</h1>
				<p>
					We appreciate you taking the time to give a rating. If you ever need more support, 
					don’t hesitate to get in touch!
					</p>
				
			</div>
		}
		</div>
	)
}

export default Rating