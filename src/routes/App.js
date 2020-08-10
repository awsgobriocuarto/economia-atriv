import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from '../components/Layout';

import Home from '../containers/Home';
import DeudasPagos from '../containers/DeudasPagos';
import Servicios from '../containers/Servicios';
import NotFound from '../containers/NotFound';

import '../assets/scss/styles.scss';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/deudas-y-pagos" component={DeudasPagos} />
          <Route exact path="/servicios" component={Servicios} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;