import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./styles.css";
import Logo from "../../assets/Logo.png";

export default function NewIncident() {
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={Logo} alt="Logo" />
          <h1>Cadastrar novo Caso</h1>
          <p>Decreva o Caso</p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar
          </Link>
        </section>
        <form>
          <input placeholder="Nome" />
          <input placeholder="Descrição" />
          <input placeholder="Valor" />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
