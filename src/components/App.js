import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './Layout';

import Home from '../containers/Home';
import Tanks from '../containers/Tanks';
import Page404 from '../containers/Page404';

import '../assets/scss/styles.scss';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/gracias" component={Tanks} />
          <Route path="*" component={Page404} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
