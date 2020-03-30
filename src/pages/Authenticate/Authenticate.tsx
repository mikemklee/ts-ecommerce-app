import React from 'react';

import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

import './Authenticate.styles.scss';

const Authenticate = () => (
  <div className='authenticate'>
    <SignIn />
    <SignUp />
  </div>
);

export default Authenticate;
