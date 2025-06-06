import styled from 'styled-components';
import { Heading2 } from '../../styles/styles';

const CtaInner = styled.div`
  text-align: center;
  h2 {
    color: var(--white);
    ${Heading2};
    padding-bottom: 50px;
    margin: 0 auto;
    max-width: 708px;
    width: 100%;
    @media only screen and (max-width: 991px) {
      font-style: normal;
      font-weight: 400;
      font-size: 60px;
      line-height: 62px;
      padding-bottom: 28px;
      max-width: 524px;
    }
    @media only screen and (max-width: 749px) {
      font-style: normal;
      font-weight: 400;
      font-size: 42px;
      line-height: 40px;
      padding-bottom: 28px;
      max-width: 188px;
    }
    span {
      color: var(--primary);
      /* display: block; */
    }
  }
  .button-group {
    align-items: center;
    justify-content: center;
  }
`;

const CtaAnimation = styled.div`
  position: relative;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  overflow: hidden;
  max-height: 412px;
  background-image: url('/images/cta-bg.svg');
  @media only screen and (max-width: 991px) {
    max-height: 464px;
    height: 100%;
  }
`;

const LeftImg = styled.div`
  position: relative;
  ::before {
    content: '';
    position: absolute;
    top: 50%;
    border-top: 1px dashed var(--white);
    right: 100%;
    width: 100vw;
  }
  .mobileshow {
    display: none;
    @media only screen and (max-width: 749px) {
      display: block;
    }
  }
  .mobilehide {
    @media only screen and (max-width: 749px) {
      display: none;
    }
  }
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
const MainCta = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
`;
const RightImg = styled.div`
  position: relative;
  ::after {
    content: '';
    position: absolute;
    width: 100vw;
    left: 100%;
    top: 50%;
    border-top: 1px dashed var(--white);
  }
  .mobileshow {
    display: none;
    @media only screen and (max-width: 749px) {
      display: block;
    }
  }
  .mobilehide {
    @media only screen and (max-width: 749px) {
      display: none;
    }
  }
`;
export { CtaInner, CtaAnimation, CtaWrap, LeftImg, MainCta, RightImg };
