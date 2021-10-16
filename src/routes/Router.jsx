import React from "react";
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import { Redirect } from "react-router";

import SignInController from '../controllers/SignInController'
import HomeController from '../controllers/HomeController'


const Routes = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/signin" component={SignInController} />
                <Route exact path="/" component={HomeController} />

                {
                    (!localStorage.getItem('signIn') || localStorage.getItem('signIn') == true) &&
                    <Route path="*">
                        <Redirect to="/signin" />
                    </Route>
                }

             </Switch>  
        </BrowserRouter>
    )
}

export default Routes