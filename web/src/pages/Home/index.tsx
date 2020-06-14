import React from "react";
import { FiLogIn, FiCheckCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

import ReactNotification, { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css";

import { useLocation } from "react-router-dom";

import "./styles.css";

import logo from "../../assets/logo.svg";

function MySuccessNotification() {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#5ECC79",
        borderRadius: 5,
        height: 80,
        width: 500,
        color: "#fff",
        fontSize: 20,
      }}
    >
      <FiCheckCircle size={80} color="#fff" />
      <div>
        <p>Ponto de Coleta</p>
        <p>Cadastrado com sucesso!</p>
      </div>
    </div>
  );
}

const Home = () => {
  const location = useLocation();
  const status = Object.values(location)[3];
  console.log(status);
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <ReactNotification />
          <img
            src={logo}
            alt="Ecoleta"
            onLoad={() => {
              if (typeof status != "undefined" && status.msg === "success") {
                store.addNotification({
                  content: MySuccessNotification,
                  title: "Ponto de Coleta",
                  message: "Ponto de coleta cadastrado com sucesso!",
                  type: "success",
                  container: "top-right",
                  animationIn: ["animated", "fadeIn"],
                  animationOut: ["animated", "fadeOut"],
                  dismiss: {
                    duration: 2000,
                  },
                });
              }
            }}
          />
        </header>

        <main>
          <h1>Seu marketplace de coleta de resíduos.</h1>
          <p>
            Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.
          </p>

          <Link to="/create-point">
            <span>
              <FiLogIn />
            </span>
            <strong>Cadastre um ponto de coleta</strong>
          </Link>
        </main>
      </div>
    </div>
  );
};

export default Home;
