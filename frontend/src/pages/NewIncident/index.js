import React, {useState} from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link , useHistory} from "react-router-dom";
import "./styles.css";
import Logo from "../../assets/Logo.png";
import api from '../../services/api'

export default function NewIncident() {
  const history = useHistory();
  const [titulo, setTitulo]=useState('');
  const [desc, setDesc]=useState('');
  const [valor, setValor]=useState('');
  const ong_id = localStorage.getItem('ongID')

  async function handleNewIncident(e){
    e.preventDefault();
    const data = {
      titulo, desc, valor, 
    };
    try {
      await api.post('incidents',data,{
        headers:{
          Authorization: ong_id,
        }
      })
      history.push('/profile')
    } catch (e) {
      alert("Erro"+e)
    }


  }
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
        <form onSubmit={handleNewIncident}>
          <input 
            placeholder="Nome" 
            value={titulo}
            onChange={e=>setTitulo(e.target.value)}
            />
          <textarea 
            placeholder="Descrição" 
            value={desc}
            onChange={e=>setDesc(e.target.value)}
            />
          <input 
            placeholder="Valor" 
            value={valor}
            onChange={e=>setValor(e.target.value)}
            />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
