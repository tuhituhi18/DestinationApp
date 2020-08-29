import React from "react";
//import { Router } from "@reach/router";
import { BrowserRouter as Router } from 'react-router-dom'
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import ProfilePage from "../ProfilePage";
import PasswordReset from "../PasswordReset";
import destinations from "../../components/Images/destinations.png"


function Application() {
  const user = null;
    return (
        <SignUp path="Quiz"/>
    );
}
export default Application;