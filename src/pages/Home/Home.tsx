import React from 'react';

import { HomePageContainer } from './Home.styles';

import Directory from '../../components/Directory/Directory';

const Homepage = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default Homepage;
