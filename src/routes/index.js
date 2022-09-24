 import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SingIn from '../pages/SingIn';
import SingUp from '../pages/SingUp';
import Sales from '../pages/Sales';
import Report from '../pages/Report';
import Integrations from '../pages/Integrations';
import Financial from '../pages/Financial';
import RegisterPackage from '../pages/RegisterPackage';
import Metrics from '../pages/Metrics';
import Dashboard from '../pages/Dashboard';
import Tracking from '../pages/Tracking';
import Help from '../pages/Help';
import Contact from '../pages/Contact';
import SalesDetail from '~/components/SalesDetail';
import TrackingDetail from '~/components/TrackingDetail';
import Profile from '../pages/Profile';


export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SingIn} />
      <Route path="/singup" component={SingUp} />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/registro-de-pacote" component={RegisterPackage} isPrivate />
      <Route path="/metricas" component={Metrics} isPrivate />
      <Route path="/vendas" component={Sales} isPrivate />
      <Route path="/vendas/detail/:id" component={SalesDetail} isPrivate />
      <Route path="/integracao" component={Integrations} isPrivate />
      <Route path="/financeiro" component={Financial} isPrivate />
      <Route path="/Dashboard" component={Dashboard} isPrivate />
      <Route path="/relatorio" component={Report} isPrivate />
      <Route path="/tracking" exact component={Tracking} isPrivate />
      <Route path="/ajuda" exact component={Help} isPrivate />
      <Route path="/fale-conosco" exact component={Contact} isPrivate />
      <Route path="/tracking/detail/:id" component={TrackingDetail} isPrivate />
      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
