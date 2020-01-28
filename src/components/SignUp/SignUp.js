import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase/index';
import * as ROUTES from '../../constants/routes';

const SignUp = () => {
  return (
    <div>
      <h1>Sign Up</h1>
      <SignUpForm />
    </div>
  );
};
const initVals = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initVals };
  }
  onSubmit = event => {
    event.preventDefault();

    const { email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({ ...initVals });
        //The history object of the router can be used in the onSubmit() class method eventually. If a request resolves successfully, you can push any route to the history object. Since the pushed /home route is defined in our App component with a matching component to be rendered, the displayed page component will change after the redirect.
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
  };
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          name='username'
          value={username}
          onChange={this.onChange}
          type='text'
          placeholder='Full Name'
        />
        <input
          name='email'
          value={email}
          onChange={this.onChange}
          type='text'
          placeholder='Email Address'
        />
        <input
          name='passwordOne'
          value={passwordOne}
          onChange={this.onChange}
          type='password'
          placeholder='Password'
        />
        <input
          name='passwordTwo'
          value={passwordTwo}
          onChange={this.onChange}
          type='password'
          placeholder='Confirm Password'
        />
        <button disabled={isInvalid} type='submit'>
          Sign Up
        </button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignUpLink = () => {
  return (
    <p>
      Have no account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>
  );
};

//using this combining firebase kit with customed components
//compose can help us organise higher-order components
const SignUpForm = compose(withRouter, withFirebase)(SignUpFormBase);

export default SignUp;
export { SignUpForm, SignUpLink };
