import styled, { css } from 'styled-components';
import { body_regular, button_semibold, h1_regular, h2_regular, h3_regular } from '../../styles/typography';

const TextSection = styled.div`
  width: unset;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--space-24);
  @media only screen and (max-width: 768px) {
    padding: 0;
    gap: var(--space-20);
  }
  @media only screen and (max-width: 449px) {
    gap: var(--space-24);
  }
  .button {
    margin-top: var(--space-28);
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
    margin-top: var(--space-28);
  }
`;

const Description = styled.p`
  ${body_regular};
  color: var(--off-white-100);
  text-align: center;
  margin: 0;
  max-width: 724px;
  @media only screen and (max-width: 768px) and (min-width: 450px) {
    margin-bottom: var(--space-4);
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-24);
  max-width: 573px;
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
    text-align: center;
  }
  h3 {
    ${h3_regular};
    color: var(--off-white-100);
    margin: 0;
    text-align: center;
  }
  p {
    ${h2_regular};
    color: var(--off-white-100);
    margin: 0;
    text-align: center;
  }
`;

const CtaAnimation = styled.div`
  position: relative;
  overflow: hidden;
  padding: var(--space-64) 0;
  @media only screen and (max-width: 991px) {
    padding: var(--space-40) 0;
  }
  @media only screen and (max-width: 449px) {
    padding: var(--space-48) 0;
  }
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
  padding: var(--space-64);
  @media only screen and (max-width: 768px) {
    background-position-x: -417px;
    background-position-y: -94px;
  }
  @media only screen and (max-width: 449px) {
    padding: var(--space-64) var(--space-24);
    background-image: url('/images/new-CTA-mobile-BG.png');
    background-position: unset;
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
  gap: var(--space-16);
  justify-content: center;
  @media only screen and (max-width: 768px) {
    padding-top: var(--space-4);
    gap: var(--space-12);
  }
  @media only screen and (max-width: 449px) {
    padding-top: 0;
    gap: var(--space-4);
  }
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

export { TextSection, Title, CtaAnimation, CtaWrap, Description, Canvas, ButtonGroup, PrimaryButton, SecondaryButton };
