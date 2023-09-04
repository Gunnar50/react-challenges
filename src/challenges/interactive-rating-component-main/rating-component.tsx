import { useState } from "react";


function Rating() {
	const [rating, setRating] = useState<number>(0);
	const [isSubmit, setIsSubmit] = useState<boolean>(false);

	const submitRating = () => {
		if(rating === 0) return;
		setIsSubmit(true);
	}
	
	return (
		<div className="text-white text-[15px] ">
			<div className="bg-slate-900 w-[415px] h-[415px] p-[35px] rounded-[30px]">
				{!isSubmit ? 
				<div>
					<div className="bg-slate-800 w-12 h-12 rounded-full flex justify-center items-center">
						<img src="/rating-component/icon-star.svg" />
					</div>
					
					<h1 className="text-2xl mt-7 mb-5">How did we do?</h1>

					<p className="text-slate-400 mb-7">
						Please let us know how we did with your support request. All feedback is appreciated 
						to help us improve our offering!
					</p>
					<div className="flex justify-between">
						{Array.from({ length: 5 }).map((_, i) => (
							<button key={i} className="bg-slate-700 w-12 h-12 rounded-full text-slate-300 cursor-pointer transition 
							hover:text-white hover:bg-slate-400 text-md font-semibold focus:bg-orange-600 focus:text-white " onClick={() => setRating(i+1)}>{i + 1}</button>
						))}
					</div>
					
					<button className="w-full bg-orange-600 font-bold rounded-full p-3 mt-7
					hover:text-orange-600 hover:bg-white transition" onClick={submitRating}>SUBMIT</button>
				</div>
				:	
				<div className="text-center flex flex-col justify-center items-center">
					<img src="/rating-component/illustration-thank-you.svg" className="text-center" />
					
					<div className="mt-10 bg-gray-800 text-orange-600 py-0 px-2 rounded-lg">You selected {rating} out of 5</div>

					<h1 className="text-2xl mt-7 mb-3">Thank You!</h1>
					<p className="text-slate-400 mb-7 px-1">
						We appreciate you taking the time to give a rating. If you ever need more support, 
						don’t hesitate to get in touch!
						</p>
					
				</div>
			}
			</div>
			<button className="text-slate-100 mt-10 bg-slate-600 px-4 py-2 rounded-xl" onClick={() => {setIsSubmit(false)}}>Reset</button>
		</div>
	)
}

export default Rating