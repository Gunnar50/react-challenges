
import { FC, default as React, useState } from "react";
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
		} else setUserPasscode([]);
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
					<input type="text" className="passcode" readOnly value={userPasscode.join("")}/>
	
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
			<div>
				<h1>You are logged in</h1>
				<button onClick={(e) => handleLogout(e)}>Logout</button>
			</div>
		)
	}

	return isLoggedIn ? <LoggedIn/> : <PinPad/>
}


export default PinPadComponent