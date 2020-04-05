import React, { ReactChild } from 'react';

import { CustomButtonContainer } from './CustomButton.styles';

type Props = {
  children?: ReactChild;
  type?: 'submit';
  inverted?: boolean;
  isGoogleSignIn?: boolean;
  onClick?(event: React.MouseEvent<HTMLButtonElement>): void;
};

const CustomButton = ({ children, ...props }: Props) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;
