import React from 'react';
import { Icon, ValidationForm } from '../bookdemo/styles';
import SVGComponent from '../../../public/images/svg/SVGComponent';

const Validation = ({ children, style, error, success, disabled = false, isLast = false, className, ...props }) => {
  return (
    <ValidationForm isLast={isLast} className={className}>
      <Icon>
        <SVGComponent name='new-error-icon' width='12' height='12' viewBox='0 0 12 12' />
      </Icon>
      {error && error}
    </ValidationForm>
  );
};

export default Validation;
