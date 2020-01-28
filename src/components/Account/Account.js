import React from 'react';

import { AuthUserContext, withAuthorization } from '../Session';
import { PasswordForgetForm } from '../PasswordForget/PasswordForget';
import PasswordChange from '../PasswordChange/PasswordChange';

const Account = () => {
  return (
    <AuthUserContext.Consumer>
      {authUser => (
        <div>
          <h1>Account: {authUser.email}</h1>
          <PasswordForgetForm />
          <PasswordChange />
        </div>
      )}
    </AuthUserContext.Consumer>
  );
};

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Account);
