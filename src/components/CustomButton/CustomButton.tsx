import React, { ReactChild } from 'react';

import './CustomButton.styles.scss';

type Props = {
  children?: ReactChild;
  type?: 'submit';
};

const CustomButton = ({ children, type }: Props) => (
  <button className="custom-button" type={type}>
    {children}
  </button>
);

export default CustomButton;
