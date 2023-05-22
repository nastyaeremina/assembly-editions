import styled, { css } from 'styled-components';
import { ButtonText, MbPrimaryBtn } from '../../styles/styles';

const ButtonContainer = styled.div`
  a {
    position: relative !important;
    overflow: hidden;
    ${ButtonText}
    display: inline-flex;
    letter-spacing: 0.02em;
    padding: 11px 32px;
    border-radius: 26px;
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    ${(props) =>
      props.fontColor &&
      css`
        color: ${props.fontColor};
      `}
    ${(props) =>
      props.backgroundColor &&
      css`
        background-color: ${props.backgroundColor};
      `}
      ${(props) =>
      props.borderColor &&
      css`
        border: 1px solid ${props.borderColor};
      `}
    text-decoration: none;
    transition: all 300ms;
    --y: calc((var(--cursor-y) * 1px));
    --x: calc((var(--cursor-x) * 1px));
    -webkit-mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC);
    &::before {
      display: none;
      content: '';
      pointer-events: none;
      user-select: none;
      position: absolute;
      inset: 0px;
      border-radius: inherit;
      opacity: var(--border-shine-opacity);
      transition: opacity 400ms ease 0s;
      will-change: background, opacity;
      background: radial-gradient(80px circle at var(--x) var(--y), rgba(255, 255, 255, 0.8), transparent 40%);
      filter: blur(25px);
      ${(props) =>
        props.hoverColor &&
        css`
          background: radial-gradient(80px circle at var(--x) var(--y), ${props.hoverColor}, transparent 40%);
        `}
    }
    &:hover::before {
      display: block;
    }
  }
  button {
    position: relative !important;
    overflow: hidden;
    ${ButtonText}
    letter-spacing: 0.02em;
    padding: 11px 32px;
    margin: auto;
    display: block;
    width: 100%;
    border-radius: 26px;
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    ${(props) =>
      props.fontColor &&
      css`
        color: ${props.fontColor};
      `}
    ${(props) =>
      props.backgroundColor &&
      css`
        background-color: ${props.backgroundColor};
      `}
      ${(props) =>
      props.borderColor &&
      css`
        border: 1px solid ${props.borderColor};
      `}
    text-decoration: none;
    transition: all 300ms;
    --y: calc((var(--cursor-y) * 1px));
    --x: calc((var(--cursor-x) * 1px));
    -webkit-mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC);
    &::before {
      display: none;
      content: '';
      pointer-events: none;
      user-select: none;
      position: absolute;
      inset: 0px;
      border-radius: inherit;
      opacity: var(--border-shine-opacity);
      transition: opacity 400ms ease 0s;
      will-change: background, opacity;
      background: radial-gradient(80px circle at var(--x) var(--y), rgba(255, 255, 255, 0.8), transparent 40%);
      filter: blur(25px);
      ${(props) =>
        props.hoverColor &&
        css`
          background: radial-gradient(80px circle at var(--x) var(--y), ${props.hoverColor}, transparent 40%);
        `}
    }
    &:hover::before {
      display: block;
    }
  }
  @media only screen and (max-width: 991px) {
    a {
      padding: 11px 32px;
    }
    button {
      padding: 11px 32px;
    }
  }
  @media only screen and (max-width: 749px) {
    a {
      ${MbPrimaryBtn};
      padding: 7px 32px;
    }
    button {
      ${MbPrimaryBtn};
      padding: 7px 32px;
    }
  }
`;

const Blur = styled.div`
  position: absolute;
  pointer-events: none;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-top: -40px;
  margin-left: -40px;
  background: #ff9999;
  font-size: 18px;
  letter-spacing: 0.05em;
  color: #fff;
  ${(props) =>
    props.position &&
    css`
      transform: translate(${props.position.left}px, ${props.position.top}px);
    `}
`;
const IconButton = styled.a`
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  gap: 12px;
  border: 1px solid #09aa6c;
  border-radius: 48px;
  background: #09aa6c;
  color: ${({ theme }) => theme.colors.whiteColor};
  width: fit-content;
  cursor: pointer;
  ${ButtonText}
`;
export { ButtonContainer, Blur, IconButton };
