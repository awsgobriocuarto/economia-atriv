import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "../components/Layout";

import Home from "../containers/Home";
import DeudasPagos from "../containers/DeudasPagos";
import Servicios from "../containers/Servicios";
import NotFound from "../containers/NotFound";
import Novedades from "../containers/Novedades";
import Legislacion from "../containers/Legislacion";
import MediosDePago from "../containers/MediosDePagos";
import Contacto from "../containers/Contacto";
import Tutoriales from "../containers/Tutoriales";

import "../assets/scss/styles.scss";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/deudas-y-pagos" component={DeudasPagos} />
          <Route exact path="/servicios" component={Servicios} />
          <Route exact path="/legislacion" component={Legislacion} />
          <Route exact path="/medios-de-pago" component={MediosDePago} />
          <Route exact path="/contacto" component={Contacto} />
          <Route exact path="/tutoriales" component={Tutoriales} />
          <Route exact path="/novedades/:slug" component={Novedades} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
