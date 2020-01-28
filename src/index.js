import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './components/App/App';
import Firebase, { FirebaseContext } from './components/Firebase';

//instanciate firebase once, use it every page
//Now, every component that is interested in using Firebase has access to the Firebase instance with a FirebaseContext.Consumer component.
ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />,
  </FirebaseContext.Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
