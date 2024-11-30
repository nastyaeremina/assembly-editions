import styled, { css } from 'styled-components';
import { Body3, Heading3, MbBody3 } from '../../styles/styles';

const Content = styled.div`
  border: 1px solid var(--white);
  border-radius: 4px;
  display: flex;
  align-items: center;
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
    padding: 24px;
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
  @media screen and (max-width: 768px) {
    ${MbBody3};
  }
`;

const ImageSection = styled.div`
  display: flex;
  width: 100%;
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
const ButtonSection = styled.div`
  margin-top: 28px;
  display: flex;
  gap: 20px;
  @media only screen and (max-width: 449px) {
    flex-wrap: wrap;
    gap: 12px;
  }
  @media only screen and (max-width: 375px) {
    gap: 6px;
  }
  ${(props) =>
    props.isNoImage &&
    css`
      align-items: center;
      justify-content: center;
    `}
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
  @media only screen and (max-width: 991px) {
    max-height: 464px;
    height: 100%;
  }
  canvas {
    margin: -30px !important;
    @media (max-width: 768px) {
      margin: -50px !important;
    }
  }
  ${(props) =>
    props.isNoImage &&
    css`
      canvas {
        margin: 0 !important;
        @media (max-width: 768px) {
          margin: -50px !important;
        }
      }
    `}
`;
const CtaWrap = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  -webkit-backdrop-filter: blur(50px);
  backdrop-filter: blur(50px);
`;
export { Content, TextSection, ImageSection, Title, ButtonSection, Image, CtaAnimation, CtaWrap, Description };
