import React, { useRef, useState } from "react";
import "../assets/SignUp.css";
import { auth } from "../firebase";
import SignInScreen from "./SignIn";

function SignUpScreen({ emailRef }) {
  const [login, setLogin] = useState(false);
  const displayNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authuser) => {
        console.log(authuser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    setLogin(true);
  };

  return (
    <>
      {!login ? (
        <div className="signUpScreen">
          <form>
            <h1>Registre-se</h1>
            <input
              ref={displayNameRef}
              placeholder="Nome"
              type="username"
            />
            <input ref={emailRef} placeholder="Email" type="email" />
            <input ref={passwordRef} placeholder="Senha" type="Senha" />
            <button type="submit" onClick={register}>
              Entrar
            </button>
            <h4>
              <span className="signUpScreen__gray">Já tem cadastro? </span>
              <span className="signUpScreen__link" onClick={signIn}>
                Iniciar.
              </span>
            </h4>
          </form>
        </div>
      ) : (
        <SignInScreen />
      )}
    </>
  );
}

export default SignUpScreen;
