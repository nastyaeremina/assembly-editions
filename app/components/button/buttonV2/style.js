import styled, { css } from 'styled-components';
import { button_semibold, label_semibold } from '../../../styles/typography';
import { ButtonSize, ButtonTone, ButtonVariant } from '../../../constants/constant';

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
`;

const Buttons = styled.button`
  background-color: var(--title);
  ${button_semibold}
  color: var(--off-white-100);
  height: 48px;
  display: flex;
  align-items: center;
  gap: var(--space-8);
  padding: var(--space-2) var(--space-32) 0;
  border-radius: var(--radius-30);
  transition: background-color 0.3s ease;

  ${(props) =>
    props.isWidth &&
    css`
      justify-content: center;
      text-align: center;
      width: 100%;
    `}

  // size of button
  ${(props) =>
    props.size === ButtonSize.SMALL &&
    css`
      height: 40px;
      padding: var(--space-2) var(--space-16) 0;
      ${label_semibold}
    `}

  //Primary dark background button
  ${(props) =>
    props.tone === ButtonTone.DARK &&
    css`
      background-color: var(--off-white-200);
      color: var(--title);
      svg {
        path {
          fill: var(--white);
        }
      }
    `}

  //Secondary button
  ${(props) =>
    props.variant === ButtonVariant.SECONDARY &&
    css`
      background-color: transparent;
      color: var(--title);
    `}
    ${(props) =>
    props.variant === ButtonVariant.SECONDARY &&
    props.tone === ButtonTone.DARK &&
    css`
      background-color: transparent;
      color: var(--off-white-100);
      svg {
        path {
          fill: var(--white);
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
    `}
    ${(props) =>
    props.variant === ButtonVariant.SECONDARY_WITH_BORDER &&
    props.tone === ButtonTone.DARK &&
    css`
      border: 1px solid var(--bg-card-dark-hover);
      background-color: transparent;
      color: var(--off-white-100);
      svg {
        path {
          fill: var(--white);
        }
      }
    `}
  :hover {
    background-color: var(--bg-card-dark-hover);
    ${(props) =>
      props.tone === ButtonTone.DARK &&
      css`
        background-color: var(--bg-primary-hover);
        color: var(--title);
        svg {
          path {
            fill: var(--white);
          }
        }
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
        background-color: var(--bg-card-dark-hover);
        color: var(--off-white-100);
        svg {
          path {
            fill: var(--white);
          }
        }
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
        background-color: var(--bg-card-dark-hover);
        color: var(--off-white-100);
        svg {
          path {
            fill: var(--white);
          }
        }
      `}
  }
  :focus-visible {
    border-radius: var(--radius-30);
  }
  @media only screen and (max-width: 449px) {
    padding: var(--space-2) var(--space-24) 0;
    ${(props) =>
      props.size === ButtonSize.SMALL &&
      css`
        padding: var(--space-2) var(--space-16) 0;
      `}
  }
`;

export { ButtonWrap, Buttons };
