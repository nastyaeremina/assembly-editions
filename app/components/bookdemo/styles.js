import styled, { css } from 'styled-components';
import { body_regular, button_regular, h3_regular, h4_semibold, label_regular } from '../../styles/typography';

const MainSection = styled.div`
  max-width: 480px;
  width: 100%;
  @media only screen and (max-width: 991px) {
    max-width: 100%;
  }
`;

const FormSection = styled.form`
  max-width: 480px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-48);
  @media only screen and (max-width: 991px) {
    max-width: 100%;
  }
`;
const FormTxt = styled.div`
  h3 {
    ${h3_regular};
    color: var(--title);
    margin: 0;
  }
  p {
    ${body_regular};
    color: var(--title);
    margin: 0;
    padding-top: var(--space-16);
  }
`;
const FormDetail = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  ${(props) =>
    props.isWeeklyform &&
    css`
      padding-bottom: 20px;
    `}
  label {
    display: block;
    ${button_regular};
    color: var(--title);
    margin: 0 0 var(--space-2) 0;
  }
  select {
    margin-bottom: var(--space-20);
    padding: var(--space-13) var(--space-16) var(--space-9);
    border: 1px solid var(--border-default);
    border-radius: var(--radius-8);
    background-color: var(--off-white-300);
    background-image: none;
    background-position: 0 0;
    background-size: auto;
    background-repeat: repeat;
    ${button_regular};
    color: var(--title);
    outline: 0;
    appearance: none;
    width: 100%;
    position: relative;
    &::placeholder {
      color: var(--gray-200);
    }
    :focus {
      border-color: var(--title);
    }
    :focus-visible {
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
  }
  .wselect {
    display: block;
    width: 100%;
    padding: var(--space-13) var(--space-16) var(--space-9);
    ${button_regular};
    color: var(--title);
    background-color: var(--off-white-300);
    border: 1px solid var(--border-default);
    option {
      ${button_regular};
      color: var(--title);
    }
  }

  .sm {
    border-radius: var(--radius-8);
    ${button_regular};
  }

  @media only screen and (max-width: 768px) {
    ${(props) =>
      props.isWeeklyform &&
      css`
        padding-bottom: var(--space-8);
      `}
  }
`;

const Textarea = styled.textarea`
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

const Input = styled.input`
  padding: var(--space-13) var(--space-16) var(--space-9);
  background-color: var(--off-white-300);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-8);
  outline: 0;
  margin-bottom: var(--space-20);
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
const ValidationForm = styled.div`
  display: flex;
  align-items: flex-start;
  margin: var(--space-6) 0 var(--space-20) var(--space-12);
  margin-bottom: var(--space-20);
  gap: var(--space-4);
  ${label_regular}
  color: var(--error-color);
  ${(props) =>
    props.isLast &&
    css`
      margin-top: var(--space-2);
      margin-bottom: 0px;
    `}
  ${(props) =>
    props.isApplyMargin &&
    css`
      margin-bottom: 0;
    `}
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: var(--space-1);
`;

const NameBlock = styled.div`
  display: flex;
  gap: var(--space-20);
  .firstlable {
    width: 100%;
  }
`;
const NameInfo = styled.div``;

const HelpLink = styled.div`
  display: flex;
  align-items: center;
`;
const SubmitSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-48);
  height: 100%;
`;
const ThanksWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const CardView = styled.div`
  background-color: var(--assembly-blue);
  padding: var(--space-40);
  border-radius: var(--radius-12);
  width: 100%;
  display: flex;
  align-items: center;
  height: 100%;
  .button-group {
    padding-top: var(--space-48);
    display: flex;
    flex-direction: column;
    gap: var(--space-12);
  }
  @media only screen and (max-width: 991px) {
    padding: 187px var(--space-40) 211px;
  }
  @media only screen and (max-width: 449px) {
    padding: 156px var(--space-20) 180px;
  }
`;
const CardList = styled.div`
  text-align: center;
  width: 100%;
  @media only screen and (max-width: 991px) {
    max-width: 400px;
    margin: 0 auto;
  }
`;
const ImgLine = styled.div``;
const TextWrap = styled.div`
  h1,
  h2,
  h3 {
    ${h4_semibold};
    margin: var(--space-32) 0 0;
    color: var(--title);
  }
  h4 {
    ${h4_semibold}
    margin: var(--space-32) 0 0;
    color: var(--title);
  }
  p {
    ${body_regular};
    margin: var(--space-20) auto 0;
    display: inline-block;
    color: var(--title);
    &:first-child {
      margin: 0px auto;
    }
  }
  a {
    display: initial;
    color: var(--title);
    ${body_regular};
    text-decoration: underline;
  }
`;

const ItemDiv = styled.div`
  position: relative;
  .icon-div {
    position: absolute;
    right: var(--space-16);
    top: 17px;
    z-index: 1;
    display: flex;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-40);
  height: 100%;
  width: 100%;
`;

const SuccessIcon = styled.div`
  display: flex;
  justify-content: center;
`;

export {
  MainSection,
  FormSection,
  FormTxt,
  FormDetail,
  Input,
  ValidationForm,
  NameBlock,
  NameInfo,
  ThanksWrap,
  HelpLink,
  SubmitSection,
  CardView,
  CardList,
  ImgLine,
  TextWrap,
  ItemDiv,
  Icon,
  Details,
  SuccessIcon,
  Textarea
};
