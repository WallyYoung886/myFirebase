import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const initVals = {
  email: '',
  error: ''
};

class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...initVals };
  }
  onSubmit = event => {
    event.preventDefault();
    const { email } = this.state;

    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...initVals });
      })
      .catch(error => {
        this.setState({ error });
      });
  };
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const { email, error } = this.state;
    const isValid = email === '';
    return (
      <form onSubmit={this.onSubmit}>
        <input
          name='email'
          value={this.state.email}
          onChange={this.onChange}
          type='text'
          placeholder='Email Address'
        />
        <button disabled={isValid} type='submit'>
          Reset My Password
        </button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const PasswordForgetLink = () => (
  <p>
    <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>
);

const PasswordForget = () => {
  return (
    <div>
      <h1>Password Forget</h1>
      <PasswordForgetForm />
    </div>
  );
};

export default PasswordForget;
const PasswordForgetForm = withFirebase(PasswordForgetFormBase);
export { PasswordForgetForm, PasswordForgetLink };
