import React from 'react';
import {FiLogIn} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import './styles.css';
import capa from '../../assets/Capa.png'
import logo from '../../assets/Logo.png'

export default function Logon() {
    return ( 
        <div className="logon-container">
            <section className='form'>
                <img src={logo} alt="logo" />
                <form>
                    <h1>Faça seu Logon</h1>
                    <input placeholder="Sua ID" />
                    <button type="submit" className="button">Entrar</button>
                    <Link className="back-link" to='/register'>
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={capa} alt="Capa" className="Capa"/> 
        </div>
    );
}