



function AgeCalculatorComponent() {
	return (
		<div className="w-80 p-10 rounded-br-3xl rounded-2xl   bg-white flex">
			<form>
				<label htmlFor="day" className="">
					<span>DAY</span>
					<input placeholder="DD" name="day" type="number" className="block p-2 border rounded-md w-20 font-bold"/>
				</label>
				<label htmlFor="day" className="">
					<span>MONTH</span>
					<input placeholder="MM" name="day" type="number" className="block p-2 border rounded-md w-20 font-bold"/>
				</label>
				<label htmlFor="day" className="">
					<span>YEAR</span>
					<input placeholder="YYYY" name="day" type="number" className="block p-2 border rounded-md w-20 font-bold"/>
				</label>
			</form>
		</div>
	)
}

export default AgeCalculatorComponent;