import styled from 'styled-components';
import React from 'react';
import { ValidationForm } from '../bookdemo/styles';

const Validation = ({ children, style, error, success, disabled = false, isLast = false, className, ...props }) => {
  return (
    <ValidationForm isLast={isLast} className={className}>
      <svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M6.99844 1.40033V1.40033C10.0915 1.40033 12.5984 3.90726 12.5984 7.00033V7.00033C12.5984 10.0934 10.0915 12.6003 6.99844 12.6003V12.6003C3.90537 12.6003 1.39844 10.0934 1.39844 7.00033V7.00033C1.39844 3.90726 3.90537 1.40033 6.99844 1.40033Z'
          fill='#FF5644'
        />
        <path
          d='M6.9401 7.11674V4.20007'
          stroke='white'
          stroke-width='1.35938'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M6.93952 9.15847C6.85902 9.15847 6.79369 9.2238 6.79427 9.3043C6.79427 9.3848 6.85961 9.45013 6.94011 9.45013C7.02061 9.45013 7.08594 9.3848 7.08594 9.3043C7.08594 9.2238 7.02061 9.15847 6.93952 9.15847'
          stroke='white'
          stroke-width='1.35938'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>{' '}
      {error && error}
    </ValidationForm>
  );
};

export default Validation;
