import styled, { css } from 'styled-components';
import {
  body_regular,
  button_regular,
  button_semibold,
  h1_regular,
  h2_regular,
  h3_regular
} from '../../styles/typography';

const TextSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--space-24);
  @media only screen and (max-width: 768px) {
    padding: 20px;
    ${(props) =>
      props.isNoImage &&
      css`
        padding: 0;
      `}
  }
  .button {
    margin-top: 28px;
    @media only screen and (max-width: 400px) {
      div {
        width: 100%;
        a {
          width: 100%;
          justify-content: center;
        }
      }
    }
  }
  .button-group {
    align-items: center;
    justify-content: center;
    margin-top: 28px;
  }
  ${(props) =>
    props.isNoImage &&
    css`
      width: unset;
    `}
`;

const Description = styled.p`
  ${body_regular};
  color: var(--off-white-100);
  text-align: center;
  margin: 0;
  max-width: 724px;
`;

const ImageSection = styled.div`
  display: flex;
  width: 100%;
  img {
    height: 310px;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-24);
  max-width: 724px;
  h1 {
    ${h1_regular};
    color: var(--off-white-100);
    margin: 0;
    ${(props) =>
      props.isNoImage &&
      css`
        text-align: center;
      `}
  }
  h2 {
    ${h2_regular};
    color: var(--off-white-100);
    margin: 0;
    ${(props) =>
      props.isNoImage &&
      css`
        text-align: center;
      `}
  }
  h3 {
    ${h3_regular};
    color: var(--off-white-100);
    margin: 0;
    ${(props) =>
      props.isNoImage &&
      css`
        text-align: center;
      `}
  }
  p {
    ${h2_regular};
    color: var(--off-white-100);
    margin: 0;
    ${(props) =>
      props.isNoImage &&
      css`
        text-align: center;
      `}
  }
`;

const Image = styled.img`
  max-width: 612px;
  width: 100%;
`;
const CtaAnimation = styled.div`
  position: relative;
  overflow: hidden;
  margin-bottom: var(--space-120);
`;
const CtaWrap = styled.div`
  background-image: url('/images/new-CTA-BG.png');
  background-color: var(--title);
  border-radius: var(--radius-16);
  background-position-x: -303px;
  background-position-y: -70px;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-40);
  ${(props) =>
    props.isNoImage &&
    css`
      padding: var(--space-64);
    `}
  @media only screen and (max-width: 768px) {
    background-position-x: -417px;
    background-position-y: -94px;
  }
  @media only screen and (max-width: 449px) {
    padding: var(--space-24);
    background-image: url('/images/new-CTA-mobile-BG.png');
    background-position: unset;
    ${(props) =>
      props.isNoImage &&
      css`
        padding: var(--space-64) var(--space-24);
      `}
  }
`;

const Canvas = styled.canvas`
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 2;
  pointer-events: none;
  ${(props) =>
    props.isGradientReady &&
    css`
      opacity: 1;
    `}
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: var(--space-16);
  ${(props) =>
    props.isNoImage &&
    css`
      justify-content: center;
    `}
  @media only screen and (max-width: 395px) {
    flex-wrap: wrap;
  }
`;

const PrimaryButton = styled.a`
  padding: var(--space-14) var(--space-24) var(--space-10);
  background-color: var(--off-white-200);
  ${button_semibold}
  color: var(--title);
  border-radius: var(--radius-30);
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: var(--bg-primary-hover);
  }
`;

const SecondaryButton = styled.a`
  padding: var(--space-14) var(--space-24) var(--space-10);
  ${button_semibold}
  color: var(--off-white-100);
  display: flex;
  align-items: center;
  border-radius: var(--radius-30);
  gap: var(--space-8);
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: var(--bg-card-dark-hover);
  }
`;

export {
  TextSection,
  ImageSection,
  Title,
  Image,
  CtaAnimation,
  CtaWrap,
  Description,
  Canvas,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton
};
