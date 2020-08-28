import React from "./node_modules/react";
import { FiPower, FiTrash2 } from "./node_modules/react-icons/fi";
import { Link } from "./node_modules/react-router-dom";
import "./styles.css";
import Logo from "../../assets/Logo.png";

export default function Profile() {
  const ongName = localStorage.getItem('ongName');

  return (
    <div className="profile-container">
      <header>
        <img src={Logo} alt="Logo" />
        <span>Bem Vindo à {ongName}</span>
        <Link className="button" to="/incident/new">
          Cadastrar novo Caso
        </Link>
        <button type="button">
          <FiPower size={18} color="#e02041" />
        </button>
      </header>
      <h1>Casos cadastrados</h1>
      <ul>
        <li>
          <strong>Caso:</strong>
          <p>Caso Teste</p>
          <strong>Desc</strong>
          <p>teste</p>
          <strong>Val</strong>
          <p>1r</p>
          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>Caso:</strong>
          <p>Caso Teste</p>
          <strong>Desc</strong>
          <p>teste</p>
          <strong>Val</strong>
          <p>1r</p>
          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>Caso:</strong>
          <p>Caso Teste</p>
          <strong>Desc</strong>
          <p>teste</p>
          <strong>Val</strong>
          <p>1r</p>
          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>Caso:</strong>
          <p>Caso Teste</p>
          <strong>Desc</strong>
          <p>teste</p>
          <strong>Val</strong>
          <p>1r</p>
          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>Caso:</strong>
          <p>Caso Teste</p>
          <strong>Desc</strong>
          <p>teste</p>
          <strong>Val</strong>
          <p>1r</p>
          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
      </ul>
    </div>
  );
}
