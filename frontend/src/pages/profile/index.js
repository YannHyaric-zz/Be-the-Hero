import React, {useState, useEffect} from "react";
import { FiPower, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./styles.css";
import Logo from "../../assets/Logo.png";
import api from '../../services/api';

export default function Profile() {
  const ongName = localStorage.getItem('ongName');
  const ongID = localStorage.getItem('ongID');

  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    api.get('profile',{
      headers: {
        Authorization: ongID,
      }
    }).then(response => {
      setIncidents(response.data)
    })
  }, [ongID]);

  async function handleDeleteIncident(id){
    try {
      await api.delete(`incidents/${id}`,{
        headers: { Authorization: ongID }
      })
    }catch (e){
        alert("Erro ao deletar"+ e);
    }
  }

  return (
    <div className="profile-container">
      <header>
        <img src={Logo} alt="Logo" />
        <span>Bem Vindo à {ongName}</span>
        <Link className="button" to="/incidents/new">
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
          <p>Caso 0</p>
          <strong>Desc</strong> 
          <p>Teste</p>
          <strong>Val</strong>
          <p>0</p>
          <button onClick={()=>handleDeleteIncident(1)} type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
      {incidents.map(incident =>(
        <li key={incident.id}>
          <strong>Caso:</strong>
          <p>{incident.titulo}</p>
          <strong>Desc</strong> 
          <p>{incident.desc}</p>
          <strong>Val</strong>
          <p>{Intl.NumberFormat('pt-BR',{style: 'curency', currency: 'BRL'}).format(incident.valor)}</p>
          <button onClick={()=>handleDeleteIncident(incident.id)} type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        ))
      }
      </ul>
    </div>
  );
}
