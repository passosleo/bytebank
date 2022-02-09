import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import './styles.css'
import { Cliente } from "../../javascript/Cliente.js";
import Modal from "../../components/Modal";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Clientes = () => {
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
    <>
      <Button title="Novo Cliente" onClick={() => {modalRef.current.handleModal()}}/>
      <div className="clientes-cadastrados">
        {clientes.map((cliente, index) => (
          <ul key={index}>
            <li>{cliente.nome}</li>
            <li>{cliente.cpf}</li>
          </ul>
        ))}
      </div>

      <Modal title="Cadastro de Cliente" ref={modalRef}>
        <div className="cadastro-cliente">
          <Input label="Nome:" type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
          <Input label="CPF:" type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} />
          <Button title="Cancelar" onClick={() => handleCancel()} />
          <Button title="Salvar" onClick={() => handleSubmit(nome, cpf)} />
        </div>
      </Modal>
    </>
  );
};

export default Clientes;
