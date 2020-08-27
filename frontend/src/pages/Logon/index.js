import React from "react";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./styles.css";
import capa from "../../assets/Capa.png";
import Logo from "../../assets/Logo.png";

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={Logo} alt="Logo" />
        <form>
          <h1>Faça seu Logon</h1>
          <input placeholder="Sua ID" />
          <button type="submit" className="button">
            Entrar
          </button>
          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
          {/* Temporario para navegação */}
          <Link className="back-link" to="/profile">
            <FiLogIn size={16} color="#E02041" />
            Main
          </Link>
          {/*  */}
        </form>
      </section>
      <img src={capa} alt="Capa" className="Capa" />
    </div>
  );
}
