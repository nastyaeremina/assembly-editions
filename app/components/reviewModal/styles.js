import styled, { css } from 'styled-components';
import { body_regular, body_semibold, button_regular, h4_semibold } from '../../styles/typography';

const Modal = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  z-index: 99999;
  top: 0;
  left: 0;
  background: var(--model-background-color);
  backdrop-filter: blur(16px);
`;

const ReviewModalCard = styled.div`
  max-width: 480px;
  width: 100%;
  background-color: var(--off-white-300);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: var(--radius-12);
  z-index: 1;
  @media only screen and (max-width: 530px) {
    max-width: calc(100% - 32px);
  }
`;

const CloseIcon = styled.button`
  cursor: pointer;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  border-radius: var(--radius-30);
  transition: background-color 0.3s ease-in;
  &:hover {
    background-color: var(--off-white-600);
  }
  &:focus-visible {
    background-color: var(--off-white-600);
  }
`;
const Header = styled.div`
  padding: var(--space-20) var(--space-20) var(--space-20) var(--space-24);
  border-bottom: 1px solid var(--border-default);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media only screen and (max-width: 449px) {
    padding: var(--space-20);
  }
`;

const Heading = styled.p`
  margin: 0;
  ${body_semibold};
  color: var(--title);
  margin-top: var(--space-4);
  @media only screen and (max-width: 530px) {
    margin-top: var(--space-6);
  }
`;
const Content = styled.form`
  padding: var(--space-24);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-32);
  width: 100%;
  @media only screen and (max-width: 449px) {
    padding: var(--space-20);
  }
`;

const NameInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  width: 100%;
  label {
    ${button_regular};
    color: var(--title);
  }
`;

const Input = styled.input`
  padding: var(--space-13) var(--space-16) var(--space-9);
  background-color: var(--off-white-300);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-8);
  outline: 0;
  ${button_regular};
  width: 100%;
  color: var(--title);
  &::placeholder {
    color: var(--gray-200);
  }
  body.using-mouse &:focus {
    border-color: var(--title);
    outline: none;
  }

  /* keyboard (Tab) focus */
  body.using-keyboard &:focus-visible {
    outline: 2px solid var(--link-default);
    outline-offset: 1px;
    border-radius: var(--radius-8);
  }

  ${(props) =>
    props.disabled &&
    css`
      &::placeholder {
        color: var(--border-default);
        pointer-events: none;
      }
    `}
  ${(props) =>
    props.isError &&
    css`
      border: 1px solid var(--error-color);
      margin-bottom: 0;
    `}
`;

const TextArea = styled.textarea`
  width: 100%;
  max-width: 100%;
  height: auto;
  min-height: 96px;
  padding: var(--space-13) var(--space-16) var(--space-9);
  outline: 0;
  border: 1px solid var(--border-default);
  background-color: var(--off-white-300);
  overflow: hidden;
  color: var(--title);
  border-radius: var(--radius-8);
  ${button_regular}
  resize: none;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  &::placeholder {
    color: var(--gray-200);
  }

  body.using-mouse &:focus {
    border-color: var(--title);
    outline: none;
  }

  /* keyboard (Tab) focus */
  body.using-keyboard &:focus-visible {
    outline: 2px solid var(--link-default);
    outline-offset: 1px;
    border-radius: var(--radius-8);
  }
  ${(props) =>
    props.disabled &&
    css`
      &::placeholder {
        color: var(--border-default);
        pointer-events: none;
      }
    `}
  ${(props) =>
    props.isError &&
    css`
      border: 1px solid var(--error-color);
    `}
`;

const StarRatingSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
  p {
    ${button_regular};
    color: var(--title);
    margin: 0;
  }
  svg {
    transform: none !important;
  }
`;

const OverLayDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const ThankYouCard = styled.div`
  padding: var(--space-32) var(--space-24);
  max-width: 480px;
  width: 100%;
  background-color: var(--off-white-300);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: var(--radius-12);
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 530px) {
    max-width: calc(100% - 32px);
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
  margin: var(--space-24) 0 var(--space-32);
`;
const Head = styled.h4`
  ${h4_semibold};
  color: var(--title);
  margin: 0;
  text-align: center;
`;
const Caption = styled.p`
  ${body_regular}
  color: var(--text-secondary);
  margin: 0;
  text-align: center;
`;

const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-24);
  width: 100%;
`;

const Icon = styled.div`
  width: 44px;
  height: 44px;
  background-color: var(--title);
  border-radius: var(--radius-8);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export {
  Modal,
  ReviewModalCard,
  CloseIcon,
  Header,
  Heading,
  Content,
  NameInfo,
  Input,
  TextArea,
  StarRatingSection,
  OverLayDiv,
  ThankYouCard,
  Title,
  Head,
  Caption,
  InputSection,
  Icon
};
