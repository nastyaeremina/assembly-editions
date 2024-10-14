'use client';

import styled, { css } from 'styled-components';
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
    background-color: var(--primary);
    color: var(--white);
    border: 1px solid var(--primary);
    :hover {
      background-color: var(--primary);
    }
    ${(props) =>
      props.textColor &&
      css`
        color: var(${props.textColor});
      `}
    ${(props) =>
      props.backgroundColor &&
      css`
        background-color: var(${props.backgroundColor});
        border: 1px solid var(${props.backgroundColor});
        :hover {
          background-color: var(${props.backgroundColor});
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
    border: 1px solid var(--black);
    border-radius: 48px;
    background-color: transparent;
    color: var(--black);
    letter-spacing: 0.02em;
    text-decoration: none;
    transition: all 300ms;
    :hover {
      background-color: var(--hover-color);
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
        color: var(${props.textColor});
      `}
    ${(props) =>
      props.backgroundColor &&
      css`
        background-color: var(${props.backgroundColor});
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
