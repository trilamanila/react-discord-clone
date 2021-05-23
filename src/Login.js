import React, { useState } from "react";
import { auth, provider } from "./firebase";
import "./Login.css";
import { Button } from "@material-ui/core";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = e => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        history.push("/");
      })
      .catch(error => alert(error.message));
  };

  const register = e => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then(auth => {
        // it successfully created a new user with email and password
        if (auth) {
          history.push("/");
        }
      })
      .catch(error => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://discordapp.com/assets/fc0b01fe10a0b8c602fb0106d8189d9b.png"
          alt=""
        />
        <h5>Test username: Test@test.com </h5>
        <h5>Test password: test123</h5>
      </div>

      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;
