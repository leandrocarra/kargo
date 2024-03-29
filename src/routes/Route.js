import React from 'react';
import { Route, Redirect } from 'react-router-dom';
 
import LayoutDefault  from '~/pages/_layouts/Default';
import LoginLayout from '~/pages/_layouts/SingIn';

import {store} from '~/store';
import CollapseMenusProvider from '~/hooks/useCollapseMenus'

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  
  const { signed } = store.getState().auth;
  //const signed  = true;

  if (!signed && isPrivate) {
    return <Redirect to="/" />
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />
  }

  const Layout = signed ? LayoutDefault : LoginLayout;

  return (
    <Route {...rest}
    render={props => (
      <CollapseMenusProvider>
        <Layout>
          <Component {...props} />
        </Layout>
      </CollapseMenusProvider>
    )}
    />
  );
}
