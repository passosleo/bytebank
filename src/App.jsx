import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import "./App.css";
import { Cliente } from "./javascript/Cliente.js";
import Logo from "./images/logo.png"
import Modal from "./components/Modal";

const App = () => {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [clientes, setClientes] = useState([]);

  const modalRef = useRef(null);

  //populando a página
  useLayoutEffect(() => {
    setClientes(array => [...array, new Cliente("Leonardo Mateus dos Passos", "265.681.340-90")]);
    setClientes(array => [...array, new Cliente("Rayane Melo Castilhos", "547.942.250-24")]);
    setClientes(array => [...array, new Cliente("Jair Luiz dos Passos", "775.769.260-15")]);
  }, [])

  useEffect(() => {
    console.log(clientes);
  }, [clientes])

  const handleSubmit = (nome, cpf) => {
    if (nome === "" || cpf === "") {
      alert("Você deve preencher todos os campos.")
      return;
    };
    setClientes(array => [...array, new Cliente(nome, cpf)]);
    handleCancel();
  };

  const handleCancel = () => {
    modalRef.current.handleModal();
    setNome("");
    setCpf("");
  };

  return (
    <div className="container">
      <section>
        <div className="nav-bar">
          <img src={Logo} alt="Logo Bytebank" />
          <nav>
            <button onClick={() => {
              modalRef.current.handleModal()
            }}>
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
        <Modal title="Cadastro de Cliente" ref={modalRef}>
          <div className="cadastro-cliente">
            <label htmlFor="nome">Nome:</label>
            <input id="nome" type="text" value={nome} onChange={(e) => setNome(e.target.value)}></input>
            <label htmlFor="cpf">CPF:</label>
            <input id="cpf" type="text" value={cpf} onChange={(e) => setCpf(e.target.value)}></input>
            <button onClick={() => handleCancel()}>Cancelar</button>
            <button onClick={() => handleSubmit(nome, cpf)}>Salvar</button>
          </div>
        </Modal>
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
