import React from "react";
import SignInPage from "../components/SignIn";

const SignInController = () => {

    const toggleOverlay = (type) => {
        if (type == 'add') {
            document.getElementById('container').classList.add("right-panel-active");
        }
        else {
            document.getElementById('container').classList.remove("right-panel-active");
        }
    }
    return (
        <SignInPage toggleOverlay={toggleOverlay}/>
        )
}

export default SignInController;