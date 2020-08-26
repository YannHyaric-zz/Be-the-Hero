import React from 'react';
import './styles.css';
import logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi'



export default function Register() {
    return ( 
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logo} alt="Logo"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro</p>

                    <Link className="back-link" to ="/">
                        <FiArrowLeft size={16} color ="#E02041" />
                        Tenho cadastro 
                    </Link>
                </section>
                <form>
                    <input placeholder="Nome" />
                    <input type="email" placeholder="Email"/>
                    <input placeholder = "whatsapp" />
                    <input placeholder="Endereço"/>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}