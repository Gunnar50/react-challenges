
import { default as React, useState } from "react";
import "./index.css";

const PASSCODE = [1, 2, 3, 4];
const PASSCODE_SIZE = PASSCODE.length;

function PinPadComponent() {
	const [userPasscode, setUserPasscode] = useState<number[]>([]);
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

	function handlePinPad(e: React.MouseEvent<HTMLButtonElement>, pin: number) {
		e.preventDefault();
		const newUserPasscode = [...userPasscode, pin];
		console.log(newUserPasscode);
		setUserPasscode(newUserPasscode);
		
		
		if(newUserPasscode.length !== PASSCODE_SIZE) return;

		const isValidPasscode = newUserPasscode.every((num, index) => num === PASSCODE[index]);

		if(isValidPasscode) {
			setTimeout(() => {
				setIsLoggedIn(true);
				setUserPasscode([]);
			}, 1000);
		} else setTimeout(() => {setUserPasscode([]), 500});
	}

	function handleLogout(e: React.MouseEvent<HTMLButtonElement>) {
		e.preventDefault();
		setIsLoggedIn(false);
	}

	function PinPad() {
		return (
			<div className="main-container">
				<form style={{textAlign: "center"}}>
					<h1>Enter Passcode</h1>
					<input type="password" className="text-black text-center text-xl" readOnly value={userPasscode.join("")}/>
	
					<div className="pin-pad">
						{[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((pin, i) => (
							<button key={i} className="pin" onClick={(e) => handlePinPad(e, pin)}>{pin}</button>
						))}
					</div>
				</form>
			</div>
		)
	}
	
	function LoggedIn() {
		return (
			<div className="text-center">
				<h1 className="font-bold text-lg">You are logged in</h1>
				<button onClick={(e) => handleLogout(e)} className="py-2 px-4 border-2 mt-5">Logout</button>
			</div>
		)
	}

	return (
		<div className=" flex justify-center border-2 p-10 w-80 h-[460px]">
			{isLoggedIn ? <LoggedIn/> : <PinPad/>}
		</div>
	);
}


export default PinPadComponent