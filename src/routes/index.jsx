import React from 'react';
import {
  BrowserRouter,
  Route,
} from "react-router-dom";
import Layout from '../layout';
import Clientes from '../pages/Clientes';

const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Route exact path="/"/>
        <Route component={Clientes} path="/clientes" />
        <Route path="/conta-corrente"/>
        <Route path="/conta-poupanca"/>
        <Route path="/conta-salario"/>
      </Layout>
    </BrowserRouter>
  );
};

export default Routes;