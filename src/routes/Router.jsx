import React from "react";
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Redirect } from "react-router";

import SignInController from '../controllers/SignInController'
import HomeController from '../controllers/HomeController'


const Routes = () =>{
    return (
        <>
        <BrowserRouter>
            <Switch>
                
                  {
                    (!localStorage.getItem('signIn') || !localStorage.getItem('signIn') == true) &&
                    <Route path="*">
                        <Redirect to="/signin" />
                    </Route>
                    }
                    {
                        (localStorage.getItem('signIn') && localStorage.getItem('signIn') == true) &&
                        <Route path="*">
                            <Redirect to="/" />
                        </Route>
                    }
                    <Route exact path="/" component={HomeController} />
                    <Route exact path="/signin" component={SignInController} />


            </Switch>
          
            </BrowserRouter>
            <ToastContainer />
         </>
    )
}

export default Routes