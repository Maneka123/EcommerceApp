import "./LoginComponent.css";
import React, { useState } from "react";
import { handleLogin } from "./LoginValidation"; 


 
 export default function LoginComponent() {
	 
 
	const [email, setEmail] = useState("");  
	const [password, setPassword] = useState("");  

	const handleSubmit = (e) => {
		e.preventDefault();  // Prevent form from refreshing the page
		handleLogin(email, password);  // Pass email and password to handleLogin function
	}
	 
	 
  return (
    <div className="container">
		<form onSubmit={handleSubmit}>
		<input 
			className="email" 
			placeholder="input email" 
			onChange={(e) => setEmail(e.target.value)}
			type="email"  // Use email type for validation
			value={email}  // Bind email value to the state
		/>
		<input 
			className="password" 
			placeholder="input password" 
			type="password"  // Use password type for security
            value={password}  // Bind password value to the state
			onChange={(e) => setPassword(e.target.value)} 
		/>

		<button className="login" type="submit">Login</button>
		</form>

		<div className="extra">
			<a className="signup" href="#">Signup</a>
			<a  className="forgot-password" href="#">Forgot Password?</a>
		</div>
		
	</div>
  );
}