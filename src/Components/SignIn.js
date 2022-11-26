import React, { useRef, useState } from "react";
import "../assets/SignIn.css";
import { auth } from "../firebase";
import SignUpScreen from "./SignUp";

function SignInScreen() {
  const [newLogin, setNewLogin] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    setNewLogin(true);
  };

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .catch((error) => alert(error));
  };

  return (
    <>
      {!newLogin ? (
        <div className="signInScreen">
          <form>
            <h1>Entrar</h1>
            <input placeholder="Email" ref={emailRef} type="email" />
            <input placeholder="Password" ref={passwordRef} type="Password" />
            <button type="submit" onClick={signIn}>
              Entrar
            </button>
            <h4>
              <span className="signInScreen__gray">Novo por aqui? </span>
              <span className="signInScreen__link" onClick={register}>
               Inscreva-se agora.
              </span>
            </h4>
          </form>
        </div>
      ) : (
        <SignUpScreen />
      )}
    </>
  );
}

export default SignInScreen;
