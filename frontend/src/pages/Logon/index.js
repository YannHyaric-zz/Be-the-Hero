import React, { useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import "./styles.css";
import capa from "../../assets/Capa.png";
import Logo from "../../assets/Logo.png";
import api from '../../services/api'


export default function Logon() {
  const [id, setId] = useState('');
  const history = useHistory();

  
  async function handleLogin(e) {
    e.preventDefault();
    try {
      const data = await api.post('sessions', { id })
      localStorage.setItem('ongID', id)
      localStorage.setItem('ongName', data.nome)
      history.push('/profile')
    } catch (err) {
      alert('falha no login')
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={Logo} alt="Logo" />
        <form onSubmit={handleLogin}>
          <h1>Faça seu Logon</h1>
          <input placeholder="Sua ID"
            value={id}
            onChange={e => setId(e.target.value)} />
          <button type="submit" className="button">
            Entrar
          </button>
          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>

        </form>
      </section>
      <img src={capa} alt="Capa" className="Capa" />
    </div>
  );
}
