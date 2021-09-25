import React, { useState } from "react";
import "../assets/LoginScreen.css";
import Footer from "../Components/Footer";
import SignUpScreen from "../Components/SignUp";

function LoginScreen() {
  const [login, setLogin] = useState(false);
  const [email, setEmail] = useState("");
  const reachSignUp = () => {
    setLogin(true);
  };

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="Netflix Logo"
        />
        <button className="loginScreen__button" onClick={reachSignUp}>
          Iniciar
        </button>
        <div className="loginScreen__gradient" />
      </div>
      <div className="loginScreen__body">
        {!login ? (
          <>
            <h1>Filmes, séries e muito mais. Sem limites.</h1>
            <h2> Assista onde quiser. Cancele quando quiser.</h2>
            <h3>
            Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.{" "}
            </h3>
            <div className="loginScreen__input">
              <form>
                <input
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  className="loginScreen__getStarted"
                  onClick={reachSignUp}
                >
                  VAMOS LÁ
                </button>
              </form>
            </div>
            <Footer />
          </>
        ) : (
          <SignUpScreen email={email} />
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
