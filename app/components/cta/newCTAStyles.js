import styled, { css } from 'styled-components';
import { Body3, Heading3, MbBody3 } from '../../styles/styles';
import image from '../../../public/images/cta-bg.svg';

const Content = styled.div`
  border: 1px solid var(--white);
  border-radius: 4px;
  display: flex;
  align-items: center;
  max-width: 1224px;
  margin: 0 auto;
  width: 100%;
  overflow: hidden;
  ${(props) =>
    props.isNoImage &&
    css`
      border: none;
      align-items: center;
      justify-content: center;
    `}
`;
const TextSection = styled.div`
  padding: 0 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

const Description = styled.div`
  margin-top: 16px;
  ${Body3};
  color: var(--white);
  text-align: center;
  @media only screen and (max-width: 768px) {
    ${MbBody3};
  }
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
  p {
    ${Heading3};
    color: var(--white);
    margin: 0;
    ${(props) =>
      props.isNoImage &&
      css`
        max-width: 724px;
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
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  overflow: hidden;
  background-image: url('/images/cta-bg.svg');
`;
const CtaWrap = styled.div`
  position: relative;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  z-index: 3;
  -webkit-backdrop-filter: blur(50px);
  backdrop-filter: blur(50px);
  padding: 40px 24px;
  ${(props) =>
    props.isNoImage &&
    css`
      padding: 80px 24px;
    `}
  @media only screen and (max-width: 991px) {
    padding: 24px;
    ${(props) =>
      props.isNoImage &&
      css`
        padding: 32px 24px;
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

export { Content, TextSection, ImageSection, Title, Image, CtaAnimation, CtaWrap, Description, Canvas };
