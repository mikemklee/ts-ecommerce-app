import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './WithSpinner.styles';

type Props = {
  isLoading: boolean;
};

const WithSpinner = (WrappedComponent: React.ComponentType) => {
  const Spinner = ({ isLoading, ...otherProps }: Props) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};

export default WithSpinner;
