import React from 'react';
import styles from './Navigation.module.css';
import { Link } from 'react-router-dom';

import SignOut from '../SignOut/SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
    )}
  </AuthUserContext.Consumer>
);

const NavigationAuth = () => (
  <ul className={styles.container}>
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.HOME}>Home</Link>
    </li>
    <li>
      <Link to={ROUTES.ACCOUNT}>Account</Link>
    </li>
    <li>
      <SignOut />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul className={styles.container}>
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </li>
  </ul>
);

export default Navigation;
