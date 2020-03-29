import React, { ReactChild } from 'react';

import './CustomButton.styles.scss';

type Props = {
  children?: ReactChild;
  type?: 'submit';
  inverted?: boolean;
  isGoogleSignIn?: boolean;
  onClick?(event: React.MouseEvent<HTMLButtonElement>): void;
};

const CustomButton = ({
  children,
  type,
  inverted = false,
  isGoogleSignIn = false,
  onClick = () => {},
}: Props) => (
  <button
    className={`
      custom-button
      ${inverted ? 'inverted' : ''}
      ${isGoogleSignIn ? 'google-sign-in' : ''}
    `}
    type={type}
    onClick={onClick}
  >
    {children}
  </button>
);

export default CustomButton;
