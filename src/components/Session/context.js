/*
You used the React Context API
 to pass down the Firebase instance 
 to any component before. Here, you 
 will do the same for the authenticated 
 user. 
 */
import React from 'react';

const AuthUserContext = React.createContext(null);

export default AuthUserContext;
