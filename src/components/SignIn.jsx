import React from "react";
import "../assets/css/signin.css";


const SignInPage = (props) => {
	return (
		<div className="outer_container">
		<div className="signin_container" id="container">
			<div className="form-container sign-up-container">
				<form >
					<h1>Create Account</h1>
					<input type="text" placeholder="Name" />
					<input type="tel" placeholder="Mobile No." />
					<input type="password" placeholder="Password" />
					<button>Sign Up</button>
				</form>
			</div>
			<div className="form-container sign-in-container">
				<form action="#">
						<h1>Sign In</h1>
						
						<input type="tel" placeholder="Mobile No." defaultValue={props.signInDetail.mobile}/>
						<input type="password" placeholder="Password" defaultValue={props.signInDetail.password} />
						<button onClick={(event) => {props.signIn(event,)}}>Sign In</button>
				</form>
			</div>
			<div className="overlay-container">
				<div className="overlay">
					<div className="overlay-panel overlay-left">
						<h1>Welcome Back!</h1>
						<p>To keep connected with us please login with your personal info</p>
							<button className="ghost" id="signIn" onClick={() => { props.toggleOverlay('remove') }}>Sign In</button>
					</div>
					<div className="overlay-panel overlay-right">
						<h1>Hello, Friend!</h1>
						<p>Enter your personal details and start journey with us</p>
							<button className="ghost" id="signUp" onClick={() => {props.toggleOverlay('add')}}>Sign Up</button>
					</div>
				</div>
			</div>
			</div>
			</div>

		)
}

export default SignInPage;

