import React from "react";
import './styles.css';
import { Link } from "react-router-dom";
import Logo from "../images/logo.png"

const Layout = ({ children }) => {
  return (
    <div className="container">
      <section>
        <div className="nav-bar">
          <Link to="/">
            <img src={Logo} alt="Logo Bytebank" />
          </Link>
          <nav>
            <Link to="/clientes">
              <button>
                Clientes
              </button>
            </Link>
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
        {children}
      </section>
    </div>
  );
};

export default Layout;
