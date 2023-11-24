import styled, { css, keyframes } from 'styled-components';
import { ButtonText, MbPrimaryBtn } from '../../styles/styles';
import {
  lightBg,
  greendark,
  greenlight,
  browndark,
  brownlight,
  title,
  bluedark,
  primary,
  whiteColor,
  black,
  bluelight,
  purpledark,
  purplelight,
  yellowdark,
  yellowlight,
  orangedark,
  orangelight
} from './../../styles/color';

const ButtonContainer = styled.div`
  position: relative;
  a {
    position: relative !important;
    overflow: hidden;
    ${ButtonText}
    display: inline-flex;
    letter-spacing: 0.02em;
    padding: 11px 32px;
    border-radius: 26px;
    color: ${primary};
    border: 1px solid ${primary};
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
  ${(props) =>
    props.isLoading &&
    css`
      &::before {
        position: absolute;
        top: 50%;
        left: calc(50% - 2px);
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        content: '';
        display: block;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: white;
        z-index: 2;
        margin-top: 4px;
        -webkit-animation: 0.45s cubic-bezier(0, 0, 0.15, 1) infinite alternate ${ball};
        animation: 0.45s cubic-bezier(0, 0, 0.15, 1) infinite alternate ${ball};
        -webkit-animation-delay: 0.15s;
        animation-delay: 0.15s;
      }
      ${Buttons} {
        cursor: wait;
        color: transparent;
        &:hover {
          cursor: wait;
        }
        &::before {
          position: absolute;
          top: 50%;
          left: calc(50% - 2px);
          -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
          content: '';
          display: block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: white;
          z-index: 2;
          margin-top: 4px;
          -webkit-animation: 0.45s cubic-bezier(0, 0, 0.15, 1) infinite alternate ${ball};
          animation: 0.45s cubic-bezier(0, 0, 0.15, 1) infinite alternate ${ball};
          margin-left: -15px;
          filter: unset;
        }
        &::after {
          position: absolute;
          top: 50%;
          left: calc(50% - 2px);
          -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
          content: '';
          display: block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: white;
          z-index: 2;
          margin-top: 4px;
          -webkit-animation: 0.45s cubic-bezier(0, 0, 0.15, 1) infinite alternate ${ball};
          animation: 0.45s cubic-bezier(0, 0, 0.15, 1) infinite alternate ${ball};
          margin-left: 15px;
          -webkit-animation-delay: 0.3s;
          animation-delay: 0.3s;
        }
      }
    `}
  /* button {
    position: relative !important;
    overflow: hidden;
    ${ButtonText}
    letter-spacing: 0.02em;
    padding: 11px 32px;
    margin: auto;
    display: block;
    width: 100%;
    border-radius: 26px;
    color: ${primary};
    border: 1px solid ${primary};
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
  } */
  @media only screen and (max-width: 991px) {
    a {
      padding: 11px 32px;
    }
    /* button {
      padding: 11px 32px;
    } */
  }
  @media only screen and (max-width: 749px) {
    a {
      ${MbPrimaryBtn};
      padding: 7px 32px;
    }
    /* button {
      ${MbPrimaryBtn};
      padding: 7px 32px;
    } */
  }
  .icon {
    margin-right: 12px;
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

const ball = keyframes`
  from {
    -webkit-transform: translateY(0) scaleY(0.8);
    transform: translateY(0) scaleY(0.8);
  }
  to {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
  }
`;

const Buttons = styled.button`
  position: relative !important;
  overflow: hidden;
  ${ButtonText}
  letter-spacing: 0.02em;
  padding: 11px 32px;
  margin: auto;
  display: block;
  width: 100%;
  border-radius: 26px;
  color: ${primary};
  border: 1px solid ${primary};
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
`;
export { ButtonContainer, Blur, Buttons, ball };
