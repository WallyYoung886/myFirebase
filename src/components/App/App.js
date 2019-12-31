import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Navgation/Navigation';
import Landing from '../Landing/Landing';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';
import PasswordForget from '../PasswordForget/PasswordForget';
import Home from '../Home/Home';
import Account from '../Account/Account';
import Admin from '../Admin/Admin';

import * as ROUTE from '../../constants/routes';
import { withAuthentication } from '../Session';

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />

        <hr />

        <Route exact path={ROUTE.LANDING} component={Landing} />
        <Route path={ROUTE.SIGN_UP} component={SignUp} />
        <Route path={ROUTE.SIGN_IN} component={SignIn} />
        <Route path={ROUTE.PASSWORD_FORGET} component={PasswordForget} />
        <Route path={ROUTE.HOME} component={Home} />
        <Route path={ROUTE.ACCOUNT} component={Account} />
        <Route path={ROUTE.ADMIN} component={Admin} />
      </div>
    </Router>
  );
};

export default withAuthentication(App);
