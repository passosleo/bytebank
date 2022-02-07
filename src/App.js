import React, { useState, useEffect } from "react";
import "./App.css";
import { Cliente } from "./javascript/Cliente.js";
import Logo from  "./images/logo.png"

const App = () => {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [clientes, setClientes] = useState([]);

  useEffect(() =>{
    console.log(clientes);
  },[clientes])

  const handleSubmit = (nome, cpf) => {
    if(nome === "" || cpf === "") {
      return;
    };
    setClientes(array => [...array, new Cliente(nome, cpf)]);
    handleCancel();
  };

  const handleCancel = () => {
    setNome("");
    setCpf("");
  };

  return (
    <div className="container">
      <section>
        <div className="nav-bar">
          <img src={Logo} alt="Logo Bytebank"/>
          <nav>
            <button>
              Clientes
            </button>
            <button>
              Conta Corrente
            </button>
            <button>
              Conta Poupança
            </button>
            <button>
              Conta Salário
            </button>
          </nav>
        </div>
        <div className="cadastro-cliente">
          <h2>Cadastro de Cliente</h2>
          <label htmlFor="nome">Nome:</label>
          <input id="nome" type="text" value={nome} onChange={(e) => setNome(e.target.value)}></input>
          <label htmlFor="cpf">CPF:</label>
          <input id="cpf" type="text" value={cpf} onChange={(e) => setCpf(e.target.value)}></input>
          <button onClick={() => handleCancel()}>Cancelar</button>
          <button onClick={() => handleSubmit(nome, cpf)}>Salvar</button>
        </div>
        <div className="clientes-cadastrados">
          {clientes.map((cliente, index) => (
            <ul key={index}>
              <li>{cliente.nome}</li>
              <li>{cliente.cpf}</li>
            </ul>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
