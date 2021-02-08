import React from 'react';
import { auth, provider } from "./firebase";
import "./Login.css";
import { Button } from "@material-ui/core";

function Login() {
    const signIn = () => {
        //google login
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    };

    return (
        <div className="login">
            <div className="login__logo">
                <img 
                    src="https://discordapp.com/assets/fc0b01fe10a0b8c602fb0106d8189d9b.png"
                    alt=""
                />
            </div>

            <Button onClick={signIn}>Sign In</Button>
        </div>
    );
}

export default Login
