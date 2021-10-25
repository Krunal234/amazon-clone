import React from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { auth, provider } from "./firebase";
const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert("Given email is already in use"));
  };
  const logWithGoogle = (e) => {
    e.preventDefault();
    auth
      .signInWithPopup(provider)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch(alert);
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/800px-Amazon_logo.svg.png"
          alt=""
          className="login__logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password </h5>
          <input
            type="password"
            name=""
            id=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="login__signInButton"
            onClick={signIn}
            type="submit"
          >
            Sign-in
          </button>
        </form>
        <p>
          By Signing-in you agree to the AMAZON CLONE Conditions of Use & Sale.
          Please see our Privacy Notice(Which is not actually privacy, its all
          about making it public{" "}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Noto_Emoji_Oreo_1f603.svg/180px-Noto_Emoji_Oreo_1f603.svg.png"
            alt=""
            className="laugh"
          />{" "}
          ), We will sell your data with your own permission.
        </p>
        <button
          className="login__registerButton"
          onClick={register}
          type="submit"
        >
          Create Your Amazon Account
        </button>
        <button
          className="login__googleSignIn"
          onClick={logWithGoogle}
          type="submit"
        >
          <img
            src="https://www.google.com/images/hpp/gsa_super_g-64.gif"
            alt=""
          />
          Sign In With Google
        </button>
      </div>
    </div>
  );
};
export default Login;
