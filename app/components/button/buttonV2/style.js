import styled, { css, keyframes } from 'styled-components';
import { button_semibold, label_semibold } from '../../../styles/typography';
import { ButtonSize, ButtonTone, ButtonVariant } from '../../../constants/constant';
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
const ButtonWrap = styled.div`
  position: relative;
  ${(props) =>
    props.isWidth &&
    css`
      width: 100%;
    `}
  a {
    :focus-visible {
      outline: 2px solid var(--link-default);
      border-radius: var(--radius-30);
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
        background-color: var(--off-white-300);
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
          background-color: var(--off-white-300);
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
          background-color: var(--off-white-300);
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
`;

const Buttons = styled.button`
  background-color: var(--title);
  ${button_semibold}
  color: var(--off-white-100);
  height: 48px;
  display: flex;
  align-items: center;
  gap: var(--space-6);
  padding: var(--space-2) var(--space-32) 0;
  border-radius: var(--radius-30);
  transition: background-color 0.3s ease;
  .hover-line-path {
    opacity: 0;
    transition: opacity 0.4s ease, transform 0.4s ease;
  }
  .hover-tip-path {
    transition: opacity 0.4s ease, transform 0.4s ease;
  }

  ${(props) =>
    props.isWidth &&
    css`
      justify-content: center;
      text-align: center;
      width: 100%;
    `}

  svg {
    path {
      fill: var(--off-white-100);
    }
  }

  // size of button
  ${(props) =>
    props.size === ButtonSize.SMALL &&
    css`
      height: 40px;
      padding: var(--space-2) var(--space-24) 0;
      ${label_semibold}
    `}

  //Primary dark background button
  ${(props) =>
    props.tone === ButtonTone.DARK &&
    css`
      background-color: var(--gray-400);
      color: var(--off-white-100);
    `}

  //Secondary button
  ${(props) =>
    props.variant === ButtonVariant.SECONDARY &&
    css`
      background-color: transparent;
      color: var(--title);
      svg {
        path {
          fill: var(--title);
        }
      }
    `}
    ${(props) =>
    props.variant === ButtonVariant.SECONDARY &&
    props.tone === ButtonTone.DARK &&
    css`
      background-color: transparent;
      color: var(--off-white-100);
      svg {
        path {
          fill: var(--off-white-100);
        }
      }
    `}

    //Secondary button with border
    ${(props) =>
    props.variant === ButtonVariant.SECONDARY_WITH_BORDER &&
    css`
      background-color: transparent;
      border: 1px solid var(--border-default);
      color: var(--title);
      svg {
        path {
          fill: var(--title);
        }
      }
    `}
    ${(props) =>
    props.variant === ButtonVariant.SECONDARY_WITH_BORDER &&
    props.tone === ButtonTone.DARK &&
    css`
      border: 1px solid var(--gray-400);
      background-color: transparent;
      color: var(--off-white-100);
      svg {
        path {
          fill: var(--off-white-100);
        }
      }
    `}

  :hover {
    background-color: var(--bg-card-dark-hover);
    .hover-line-path {
      opacity: 1;
      transform: translateX(2px);
    }
    .hover-tip-path {
      transform: translateX(2px);
    }

    ${(props) =>
      props.tone === ButtonTone.DARK &&
      css`
        background-color: var(--gray-350);
        color: var(--off-white-100);
      `}

    ${(props) =>
      props.variant === ButtonVariant.SECONDARY &&
      css`
        background-color: var(--bg-primary-hover);
        color: var(--title);
      `}

      ${(props) =>
      props.variant === ButtonVariant.SECONDARY &&
      props.tone === ButtonTone.DARK &&
      css`
        background-color: var(--gray-350);
        color: var(--off-white-100);
      `}

      ${(props) =>
      props.variant === ButtonVariant.SECONDARY_WITH_BORDER &&
      css`
        background-color: var(--bg-primary-hover);
        color: var(--title);
      `}

      ${(props) =>
      props.variant === ButtonVariant.SECONDARY_WITH_BORDER &&
      props.tone === ButtonTone.DARK &&
      css`
        background-color: var(--gray-350);
        color: var(--off-white-100);
      `}
  }
  :focus-visible {
    border-radius: var(--radius-30);
  }
  @media only screen and (max-width: 449px) {
    height: 40px;
    padding: var(--space-2) var(--space-16) 0;
    ${label_semibold}
    ${(props) =>
      props.size === ButtonSize.SMALL &&
      css`
        padding: var(--space-2) var(--space-16) 0;
      `}
  }
`;

const Icon = styled.div`
  display: flex;

  ${(props) =>
    props.size === ButtonSize.SMALL &&
    css`
      svg {
        width: 14px;
        height: 12px;
      }
    `}
`;

export { ButtonWrap, Buttons, Icon };
