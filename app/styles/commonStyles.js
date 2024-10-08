'use client';

import styled, { css } from 'styled-components';
import { gainsboro, primary, whiteColor, black } from './../styles/color';

import { ButtonText, HeaderFont, MbButtonText, MbPrimaryBtn } from './styles';

const Container = styled.div`
  width: 100%;
  max-width: 1272px;
  margin: 0 auto;
  padding: 0 24px;
`;

const PrimaryButton = styled.div`
  a {
    ${ButtonText}
    display: inline-block;
    letter-spacing: 0.02em;
    padding: 11px 32px;
    border-radius: 26px;
    background-color: ${primary};
    color: ${whiteColor};
    border: 1px solid #09aa6c;
    :hover {
      background-color: ${primary};
    }
    ${(props) =>
      props.textColor &&
      css`
        color: ${props.textColor};
      `}
    ${(props) =>
      props.backgroundColor &&
      css`
        background-color: ${props.backgroundColor};
        border: 1px solid ${props.backgroundColor};
        :hover {
          background-color: ${props.backgroundColor};
        }
      `}
    text-decoration: none;
    transition: all 300ms;
  }
  @media only screen and (max-width: 991px) {
    a {
      padding: 11px 32px;
    }
  }
  @media only screen and (max-width: 749px) {
    a {
      ${MbPrimaryBtn};
      padding: 7px 32px;
    }
  }
`;

const SecondryButton = styled.div`
  a {
    ${ButtonText}
    display: inline-block;
    padding: 11px 32px;
    border: 1px solid #000000;
    border-radius: 48px;
    background-color: transparent;
    color: ${black};
    letter-spacing: 0.02em;
    text-decoration: none;
    transition: all 300ms;
    :hover {
      background-color: ${gainsboro};
    }
  }
  @media only screen and (max-width: 749px) {
    a {
      ${MbPrimaryBtn};
      padding: 7px 32px;
    }
  }
`;

const BlackButton = styled.div`
  a {
    margin-left: 14px;
    ${HeaderFont}
    display: inline-block;
    padding: 8px 32px;
    border-radius: 48px;
    ${(props) =>
      props.textColor &&
      css`
        color: ${props.textColor};
      `}
    ${(props) =>
      props.backgroundColor &&
      css`
        background-color: ${props.backgroundColor};
      `}
    text-decoration: none;
    transition: all 300ms;
  }
  @media only screen and (max-width: 749px) {
    a {
      ${MbButtonText};
      padding: 10px 16px;
      margin-left: 2px;
    }
  }
  @media only screen and (max-width: 434px) {
    a {
      ${MbButtonText};
      text-align: center;
    }
  }
`;

export { PrimaryButton, BlackButton, Container, SecondryButton };
