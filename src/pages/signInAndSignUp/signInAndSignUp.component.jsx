import React from "react";
import SignIn from "../../components/SignIn/SignIn.component";
import SignUp from "../../components/sign-up/sign-up.component";

import './signInAndSignUp.styles.scss'

const SignInAndSignUp = () => (
    <div className="sign-in-and-sign-up">
        <SignIn></SignIn>
        <SignUp></SignUp>
    </div>
);

export default SignInAndSignUp;