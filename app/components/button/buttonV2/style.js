import styled, { css, keyframes } from 'styled-components';
import { button_semibold, label_semibold } from '../../../styles/typography';
import { ButtonSize, ButtonTone, ButtonVariant } from '../../../constants/constant';
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
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
      ${Buttons} {
        color: transparent;
        &::before {
          position: absolute;
          transform: translate(-50%, -50%);
          content: '';
          width: 28px;
          height: 28px;
          border: 2px solid var(--off-white-100);
          border-top: 2px solid transparent;
          border-radius: 50%;
          animation: ${spin} 1s linear infinite;
          z-index: 1;
          margin-bottom: var(--space-2);
          ${(props) =>
            props.size === ButtonSize.SMALL &&
            css`
              width: 24px;
              height: 24px;
            `}
          ${(props) =>
            (props.variant === ButtonVariant.SECONDARY || props.variant === ButtonVariant.SECONDARY_WITH_BORDER) &&
            css`
              border: 2px solid var(--text-secondary);
              border-top: 2px solid transparent;
            `}
          ${(props) =>
            props.tone === ButtonTone.DARK &&
            css`
              border: 2px solid var(--off-white-100);
              border-top: 2px solid transparent;
            `}
          @media only screen and (max-width: 449px) {
            width: 24px;
            height: 24px;
          }
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
  justify-content: center;
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
      `}

    ${(props) =>
      props.variant === ButtonVariant.SECONDARY &&
      css`
        background-color: var(--bg-primary-hover);
      `}

      ${(props) =>
      props.variant === ButtonVariant.SECONDARY &&
      props.tone === ButtonTone.DARK &&
      css`
        background-color: var(--gray-350);
      `}

      ${(props) =>
      props.variant === ButtonVariant.SECONDARY_WITH_BORDER &&
      css`
        background-color: var(--bg-primary-hover);
      `}

      ${(props) =>
      props.variant === ButtonVariant.SECONDARY_WITH_BORDER &&
      props.tone === ButtonTone.DARK &&
      css`
        background-color: var(--gray-350);
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
  opacity: ${(props) => (props.isLoading ? 0 : 1)};
  transition: opacity 0.3s ease;

  ${(props) =>
    props.size === ButtonSize.SMALL &&
    css`
      svg {
        width: 14px;
        height: 12px;
      }
    `}
`;

const IconWrapper = styled.div`
  display: flex;
  opacity: ${(props) => (props.isLoading ? 0 : 1)};
  transition: opacity 0.3s ease;
`;

export { ButtonWrap, Buttons, Icon, IconWrapper };
