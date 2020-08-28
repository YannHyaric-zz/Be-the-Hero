import React, { useState } from "react";
import "./styles.css";
import logo from "../../assets/Logo.png";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import api from "../../services/api";

export default function Register() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Whatsapp, setWhatsapp] = useState("");
  const [Endereco, setEndereco] = useState("");
  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      Name,
      Email,
      Whatsapp,
      Endereco,
    };

    try {
      const resp = await api.post('ongs', data);
      alert(`Seu ID é ${resp.data.id}`);
      history.push("/");
    } catch (err) {
      alert("Erro no cadastro");
    }
  }
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logo} alt="Logo" />
          <h1>Cadastro</h1>
          <p>Faça seu cadastro</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Tenho cadastro
          </Link>
        </section>
        <form onSubmit={handleRegister}>
          <input
            placeholder="Name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="whatsapp"
            value={Whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
          />
          <input
            placeholder="Endereço"
            value={Endereco}
            onChange={(e) => setEndereco(e.target.value)}
          />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
