import React from 'react';

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
} from './FormInput.styles';

type Props = {
  name: string;
  type: string;
  label: string;
  value: string;
  required?: boolean;
  handleChange(event: React.ChangeEvent<HTMLInputElement>): void;
};

const FormInput = ({ handleChange, label, ...otherProps }: Props) => (
  <GroupContainer>
    <FormInputContainer onChange={handleChange} {...otherProps} />
    {label ? (
      <FormInputLabel className={otherProps.value.length ? 'shrink' : ''}>
        {label}
      </FormInputLabel>
    ) : null}
  </GroupContainer>
);

export default FormInput;
