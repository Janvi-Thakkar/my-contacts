import React from "react";
import "../assets/css/signin.css";


const SignInPage = (props) => {
	return (
		<div className="outer_container">
		<div className="signin_container" id="container">
			<div className="form-container sign-up-container">
				<form >
					<h1>Create Account</h1>
						<input type="text" placeholder="Name" onChange={(event) => { props.setRegisterDetails(event.target.value, "name") }}/>
						<input type="number" length="10" placeholder="Mobile No." onChange={(event) => { props.setRegisterDetails(event.target.value, "mobile") }}/>
						<input type="email" placeholder="Email" onChange={(event) => { props.setRegisterDetails(event.target.value, "email") }} />
						<input type="password" placeholder="Password" onChange={(event) => { props.setRegisterDetails(event.target.value, "pass") }} />
						<button onClick={(event) => { props.signUp(event) }}>Sign Up</button>
				</form>
			</div>
			<div className="form-container sign-in-container">
				<form action="#">
						<h1>Sign In</h1>
						
						<input type="tel" placeholder="Mobile No." defaultValue={props.signInDetail.mobile} onChange={(event) => {props.setSignInDetails(event.target.value,"mobile")}}/>
						<input type="password" placeholder="Password" defaultValue={props.signInDetail.password} onChange={(event) => { props.setSignInDetails(event.target.value, "pass") }}/>
						<button onClick={(event) => { props.signIn(event, props.signInDetail.mobile, props.signInDetail.password)}}>Sign In</button>
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

