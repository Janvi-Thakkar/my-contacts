import { React, useState } from "react";
import SignInPage from "../components/SignIn";



const SignInController = () => {
    const apiUrl = "http://localhost:1300/api/";

    const toggleOverlay = (type) => {
        if (type == 'add') {
            document.getElementById('container').classList.add("right-panel-active");
        }
        else {
            document.getElementById('container').classList.remove("right-panel-active");
        }
    }

    const [signInDetail, changeDetail] = useState({ mobile:"", password:"" });
    const signIn = async (event, mobile, password) => {
        event.preventDefault();
        localStorage.setItem('signIn', true);
        let res = await fetch(apiUrl + "signin", {

            method:'post',
            headers: {
                'ContentType':'application/json'
                    },
            body: JSON.stringify({
                mobile,
                password
            })
        }
        );
         console.log(res)
       
    }
    return (
        <SignInPage toggleOverlay={toggleOverlay} signIn={signIn} signInDetail={signInDetail}/>
        )
}

export default SignInController;