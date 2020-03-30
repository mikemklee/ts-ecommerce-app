import React from 'react';

import './FormInput.styles.scss';

type Props = {
  name: string;
  type: string;
  label: string;
  value: string;
  required?: boolean;
  handleChange(event: React.ChangeEvent<HTMLInputElement>): void;
};

const FormInput = ({ handleChange, label, ...otherProps }: Props) => (
  <div className='group'>
    <input className='form-input' onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
