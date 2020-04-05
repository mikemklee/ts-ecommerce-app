import React from 'react';

import { AuthenticateContainer } from './Authenticate.styles';

import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

const Authenticate = () => (
  <AuthenticateContainer>
    <SignIn />
    <SignUp />
  </AuthenticateContainer>
);

export default Authenticate;
