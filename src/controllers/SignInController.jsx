import { React, useState } from "react";
import SignInPage from "../components/SignIn";
import { toast } from "react-toastify";
import { useHistory } from "react-router";
import axios from "axios";
import HomeController from "./HomeController";




const SignInController = () => {
   const apiUrl = "https://my-contact-api-backend.herokuapp.com/api/";
   //   const apiUrl = "http://localhost:3100/api/";
    const history = useHistory();
    const toggleOverlay = (type) => {
        if (type == 'add') {
            document.getElementById('container').classList.add("right-panel-active");
        }
        else {
            document.getElementById('container').classList.remove("right-panel-active");
        }
    }

    const [signInDetail, changeDetail] = useState({ mobile: null, password: "" });
    const [userDetail, RegisterDetail] = useState({ mobile: null, password: "", email: "", name: "" })

    const setSignInDetails = (val, type) => {
        if (type == 'mobile') {
            changeDetail({ mobile: val, password: signInDetail.password })
        }
        else {
            changeDetail({ mobile: signInDetail.mobile, password: val })
        }
    }

    const setRegisterDetails = (val, type) => {
        if (type == 'mobile') {
            RegisterDetail({ mobile: val, password: userDetail.password, email: userDetail.email, name: userDetail.name })
        }
        else if (type == 'pass') {
            RegisterDetail({ mobile: userDetail.mobile, password: val, email: userDetail.email, name: userDetail.name })
        }
        else if (type == 'email') {
            RegisterDetail({ mobile: userDetail.mobile, password: userDetail.password, email: val, name: userDetail.name })
        }
        else {
            RegisterDetail({ mobile: userDetail.mobile, password: userDetail.password, email: userDetail.email, name: val })
        }
    }
    const signIn = async (event) => {
        event.preventDefault();
        let res;
        let mobile = signInDetail.mobile;
        let password = signInDetail.password;

       
        if (mobile && mobile.length == 10 && password && password != null && password != "") {

             res = await axios({
                url: apiUrl + "signin",
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify({
                    mobile: mobile,
                    password: password
                })
            }
            ).then((res) => {
                if (res.status == 200) {
                    toast.success("SignIn Successfully");
                    localStorage.setItem('signIn', true);
                    localStorage.setItem('user', mobile)
                    history.push('/');

                }
            }).catch((err) => {

                if (err.response.status == 401) {
                    toast.error("Mobile number or password is incorrect");
                }
                else if (err.response.status == 402) {
                    toast.error("Password can not be null");
                }
                else if (err.response.status == 403) {
                    toast.error("Mobile Number should be of 10 digits");
                }
            })



        }
        else {
            toast.error("Mobile number or password is in incorrect format");

        }

        return res;
    }

    const signUp = async (event) => {
        event.preventDefault();
         console.log(userDetail)
        let res = await axios({
            url: apiUrl + "register",
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify({
                mobile: userDetail.mobile,
                password: userDetail.password,
                name: userDetail.name,
                email: userDetail.email
            })
        }
        ).then((res) => {

           if (res.status == 200) {
                toast.success("SignUp Successfully");
                localStorage.setItem('signIn', true);
                localStorage.setItem('user', userDetail.mobile)
                history.push('/');

            }
        }).catch((err) => {
            if (err.response.status == 401) {
                toast.error("User already exist");
            }
            else if (err.response.status == 402) {
                toast.error("Mobile Number should be of 10 digit");
            }
            else if (err.response.status == 403) {
                toast.error("All fields are madatory");
            }

           
        })
        return res;
    }
    {

        if (!localStorage.getItem('user'))
        {    return (
                <SignInPage toggleOverlay={toggleOverlay} signIn={signIn} signInDetail={signInDetail} setRegisterDetails={setRegisterDetails} setSignInDetails={setSignInDetails} signUp={signUp} />
            )
    }
    else {
            history.push("/");
            return(<HomeController/>)
}
    }
}

export default SignInController;