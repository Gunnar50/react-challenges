



function AgeCalculatorComponent() {
	return (
		<div className="w-96 p-6 rounded-xl rounded-br-[100px] bg-white flex flex-col">
			<form className=" text-sm w-80">
				<label htmlFor="day" className="inline-block">
					<span className="text-xs">DAY</span>
					<input placeholder="DD" name="day" required type="text" className="block p-2 border rounded-md w-20 font-bold mr-2 cursor-pointer focus-visible:border-purple-600"/>
				</label>
				<label htmlFor="day" className="inline-block">
					<span className="text-xs">MONTH</span>
					<input placeholder="MM" name="months" required type="text" className="block p-2 border rounded-md w-20 font-bold mr-2"/>
				</label>
				<label htmlFor="day" className="inline-block">
					<span className="text-xs">YEAR</span>
					<input placeholder="YYYY" name="years" required type="text" className="block p-2 border rounded-md w-20 font-bold"/>
				</label>
				<div className="flex items-center mt-1">
					<hr className="mt-5 flex-grow h-5 self-center"/>
					<button type="submit"><img src="/age-calculator/icon-arrow.svg" width={"45px"} className="bg-purple-700 p-3 rounded-full cursor-pointer" /></button>
				</div>
			</form>
			<div className="block">
				<span className="text-purple-700 font-black text-6xl italic mr-2">--</span><span className="text-5xl font-black italic">years</span>
			</div>
			
			<div className="block">
				<span className="text-purple-700 font-black text-6xl italic mr-2">3</span><span className="text-5xl font-black italic">months</span>
			</div>
			
			<div className="block">
				<span className="text-purple-700 font-black text-6xl italic mr-2">26</span><span className="text-5xl font-black italic">days</span>
			</div>
		</div>
	)
}

export default AgeCalculatorComponent;