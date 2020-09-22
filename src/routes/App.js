import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from 'react-router-dom';

import Layout from '../components/Layout';
import Home from '../pages/Home';
import Pagos from '../pages/Pagos';
import Servicios from '../pages/Servicios';
import NotFound from '../pages/NotFound';
import Novedades from '../pages/Novedades';
import Legislacion from '../pages/Legislacion';
import MediosDePago from '../pages/MediosDePagos';
import Contacto from '../pages/Contacto';
import Tutoriales from '../pages/Tutoriales';
import Consultas from '../pages/Consultas';
import Contribuyentes from '../pages/Contribuyentes';

import '../assets/scss/styles.scss';
import analytics from '../utils/analytics';
import ScrollToTop from '../utils/ScrollToTop';

function useGoogleAnalytics() {
  let location = useLocation();

  React.useEffect(() => {
    analytics.init();
  }, []);

  React.useEffect(() => {
    const currentPath = location.pathname + location.search;
    analytics.sendPageview(currentPath);
  }, [location]);
}

function Routes() {
  useGoogleAnalytics();
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/deudas-y-pagos' component={Pagos} />
      <Route exact path='/servicios' component={Servicios} />
      <Route exact path='/legislacion' component={Legislacion} />
      <Route exact path='/medios-de-pago' component={MediosDePago} />
      <Route exact path='/contacto' component={Contacto} />
      <Route exact path='/consultas' component={Consultas} />
      <Route exact path='/contribuyentes' component={Contribuyentes} />
      <Route exact path='/tutoriales' component={Tutoriales} />
      <Route exact path='/novedades/:slug' component={Novedades} />
      <Route path='*' component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <Layout>
        <Routes />
      </Layout>
    </Router>
  );
}
