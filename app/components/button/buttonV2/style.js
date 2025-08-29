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
`;

const Buttons = styled.button`
  background-color: var(--title);
  ${button_semibold}
  color: var(--off-white-100);
  height: 48px;
  display: flex;
  align-items: center;
  gap: var(--space-8);
  padding: 0 var(--space-32);
  border-radius: var(--radius-30);
  transition: background-color 0.3s ease;

  ${(props) =>
    props.isWidth &&
    css`
      justify-content: center;
      text-align: center;
    `}

  // size of button
  ${(props) =>
    props.size === ButtonSize.SMALL &&
    css`
      height: 40px;
      padding: 0 var(--space-16);
      ${label_semibold}
    `}

  //Primary dark background button
  ${(props) =>
    props.tone === ButtonTone.DARK &&
    css`
      background-color: var(--off-white-200);
      color: var(--title);
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
    `}
  :hover {
    background-color: var(--bg-card-dark-hover);
    ${(props) =>
      props.tone === ButtonTone.DARK &&
      css`
        background-color: var(--bg-primary-hover);
        color: var(--title);
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
      `}
  }
  :focus-visible {
    border-radius: var(--radius-30);
  }
`;

export { ButtonWrap, Buttons };
