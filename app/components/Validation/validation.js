import React from 'react';
import { Icon, ValidationForm } from '../bookdemo/styles';
import SVGComponent from '../../../public/images/svg/SVGComponent';

const Validation = ({ children, style, error, success, disabled = false, isLast = false, className, ...props }) => {
  return (
    <ValidationForm isLast={isLast} className={className}>
      <Icon>
        <SVGComponent name='error-icon' width='20' height='20' viewBox='0 0 20 20' />
      </Icon>
      {error && error}
    </ValidationForm>
  );
};

export default Validation;
