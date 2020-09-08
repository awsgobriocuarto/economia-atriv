import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "../components/Layout";

import Home from "../pages/Home";
import Pagos from "../pages/Pagos";
import Servicios from "../pages/Servicios";
import NotFound from "../pages/NotFound";
import Novedades from "../pages/Novedades";
import Legislacion from "../pages/Legislacion";
import MediosDePago from "../pages/MediosDePagos";
import Contacto from "../pages/Contacto";
import Tutoriales from "../pages/Tutoriales";
import Consultas from "../pages/Consultas";
import Contribuyentes from "../pages/Contribuyentes";

import "../assets/scss/styles.scss";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/deudas-y-pagos" component={Pagos} />
          <Route exact path="/servicios" component={Servicios} />
          <Route exact path="/legislacion" component={Legislacion} />
          <Route exact path="/medios-de-pago" component={MediosDePago} />
          <Route exact path="/contacto" component={Contacto} />
          <Route exact path="/consultas" component={Consultas} />
          <Route exact path="/contribuyentes" component={Contribuyentes} />
          <Route exact path="/tutoriales" component={Tutoriales} />
          <Route exact path="/novedades/:slug" component={Novedades} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
