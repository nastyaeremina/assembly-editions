import styled from 'styled-components';
import React from 'react';

const Error = styled.div`
  margin-left: 6px;
  margin-top: 6px;
  &.statusText {
    color: #f51a1a;
    font-size: 14px;
    font-weight: 500;
  }
`;

const Validation = ({ children, style, error, success, disabled = false, ...props }) => {
  return (
    <Error className={'statusText'}>
      {children}
      {error && error}
      {success && success}
    </Error>
  );
};

export default Validation;
