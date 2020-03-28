import React, { ReactChild } from 'react';

import './CustomButton.styles.scss';

type Props = {
  children?: ReactChild;
  type?: 'submit';
  isGoogleSignIn?: boolean;
  onClick?(event: React.MouseEvent<HTMLButtonElement>): void;
};

const CustomButton = ({
  children,
  type,
  isGoogleSignIn = false,
  onClick = () => {},
}: Props) => (
  <button
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
    type={type}
    onClick={onClick}
  >
    {children}
  </button>
);

export default CustomButton;
