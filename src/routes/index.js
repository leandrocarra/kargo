import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SingIn from '../pages/SingIn';
import RegisterPackage from '../pages/RegisterPackage';
import Metrics from '../pages/Metrics';
import Tracking from '../pages/Tracking';


export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SingIn} />
      <Route path="/registro-de-pacote" component={RegisterPackage} isPrivate />

      <Route path="/metricas" component={Metrics} isPrivate />
      <Route path="/tracking" component={Tracking} isPrivate />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
