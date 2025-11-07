import styled, { css, keyframes } from 'styled-components';
import { button_regular } from '../../styles/typography';

const ButtonContainer = styled.div`
  position: relative;
  a {
    position: relative !important;
    overflow: hidden;
    ${button_regular}
    display: inline-flex;
    letter-spacing: 0.02em;
    padding: 11px 32px;
    border-radius: 26px;
    color: var(--primary);
    border: 1px solid var(--primary);
    ${(props) =>
      props.fontColor &&
      css`
        color: var(${props.fontColor});
      `}
    ${(props) =>
      props.backgroundColor &&
      css`
        background-color: var(${props.backgroundColor});
      `}
      ${(props) =>
      props.borderColor &&
      css`
        border: 1px solid var(${props.borderColor});
      `}
    text-decoration: none;
    transition: all 300ms;
    --y: calc((var(--cursor-y) * 1px));
    --x: calc((var(--cursor-x) * 1px));
    -webkit-mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC);
    mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC);
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
      background: radial-gradient(80px circle at var(--x) var(--y), var(--secondary-hover-color), transparent 40%);
      filter: blur(25px);
      ${(props) =>
        props.hoverColor &&
        css`
          background: radial-gradient(80px circle at var(--x) var(--y), var(${props.hoverColor}), transparent 40%);
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
  @media only screen and (max-width: 991px) {
    a {
      padding: 11px 32px;
    }
  }
  @media only screen and (max-width: 749px) {
    a {
      padding: 7px 32px;
    }
  }
  .icon {
    margin-right: 12px;
  }
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
  ${button_regular}
  letter-spacing: 0.02em;
  padding: 11px 32px;
  margin: auto;
  display: block;
  width: 100%;
  border-radius: 26px;
  color: var(--primary);
  border: 1px solid var(--primary);
  ${(props) =>
    props.fontColor &&
    css`
      color: var(${props.fontColor});
    `}
  ${(props) =>
    props.backgroundColor &&
    css`
      background-color: var(${props.backgroundColor});
    `}
      ${(props) =>
    props.borderColor &&
    css`
      border: 1px solid var(${props.borderColor});
    `}
    text-decoration: none;
  transition: all 300ms;
  --y: calc((var(--cursor-y) * 1px));
  --x: calc((var(--cursor-x) * 1px));
  -webkit-mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC);
  mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC);
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
    background: radial-gradient(80px circle at var(--x) var(--y), var(--secondary-hover-color) transparent 40%);
    filter: blur(25px);
    ${(props) =>
      props.hoverColor &&
      css`
        background: radial-gradient(80px circle at var(--x) var(--y), var(${props.hoverColor}), transparent 40%);
      `}
  }
  &:hover::before {
    display: block;
  }
`;

const LinkButton = styled.div`
  a {
    padding: unset;
    background-color: unset;
    border: none;
    ${button_regular};
    border-radius: 0;
    color: var(--dark-gray);
    text-decoration: underline;
  }
`;

export { ButtonContainer, Buttons, ball, LinkButton };
