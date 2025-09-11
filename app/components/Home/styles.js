import styled, { css } from 'styled-components';
import { Body2, Heading2, MbBody1, MobileH2 } from '../../styles/styles';

const HeroSection = styled.div`
  width: 100%;
  padding: var(--space-80) 0 0px 0;
  text-align: center;
  overflow: hidden;
  @media only screen and (max-width: 991px) {
    padding: var(--space-64) 0 var(--space-20) 0;
  }
  @media only screen and (max-width: 449px) {
    padding: var(--space-64) 0 var(--space-24) 0;
  }
  ${(props) =>
    props.isStandardPage &&
    css`
      padding: 0 0 var(--space-24);
      @media only screen and (max-width: 991px) {
        padding: 0 0 var(--space-20);
      }
      @media only screen and (max-width: 449px) {
        padding: 0 0 var(--space-24);
      }
    `}

  .button-group {
    align-items: center;
    justify-content: center;
    margin-top: var(--space-32);
    @media only screen and (max-width: 449px) {
      margin-top: var(--space-28);
    }
  }
`;

const HeroHeading = styled.h1`
  ${Heading2};
  color: var(--light-green);
  margin: 0 auto 20px;
  max-width: 1000px;
  ${(props) =>
    props.isLight &&
    css`
      color: var(--title);
    `}
  span {
    color: var(--primary);
  }
  @media only screen and (max-width: 991px) {
    text-align: center;
    ${Heading2}
  }
  @media only screen and (max-width: 749px) {
    margin-bottom: 20px;
    ${MobileH2}
  }
`;

const Para = styled.p`
  max-width: 880px;
  width: 100%;
  ${Body2}
  letter-spacing: 0.02em;
  margin: 0 auto;
  color: var(--white);
  ${(props) =>
    props.isLight &&
    css`
      color: var(--body);
    `}
  @media only screen and (max-width: 991px) {
    text-align: center;
    ${Body2}
  }
  @media only screen and (max-width: 749px) {
    ${MbBody1};
  }
`;
const ImageHover = styled.a`
  transition: 300ms all ease-in-out;
  animation: fadeIn ease 0.3s;
  -webkit-animation: fadeIn ease 0.3s;
  -moz-animation: fadeIn ease 0.3s;
  -o-animation: fadeIn ease 0.3s;
  -ms-animation: fadeIn ease 0.3s;
  display: inline-block;
  cursor: pointer;
  position: relative;
  display: flex;
  gap: 10px;
  svg {
    path {
      transition: 0.3s;
    }
  }
  :hover {
    svg {
      path {
        fill: var(--mid-dark-green);
      }
    }
    ${(props) =>
      props.isLight &&
      css`
        svg {
          path {
            fill: var(--mid-dark-green);
          }
        }
      `}
  }
  @media only screen and (max-width: 991px) {
    :hover {
      svg {
        path {
          fill: var(--light-green);
        }
      }
      ${(props) =>
        props.isLight &&
        css`
          svg {
            path {
              fill: var(--mid-dark-green);
            }
          }
        `}
    }
  }
  @media only screen and (max-width: 450px) {
    svg {
      width: 74px;
      height: 14px;
    }
    :hover {
      svg {
        path {
          fill: var(--light-green);
        }
      }
      ${(props) =>
        props.isLight &&
        css`
          svg {
            path {
              fill: var(--mid-dark-green);
            }
          }
        `}
    }
  }
  .show {
    display: block;
    opacity: 1;
    transition: 300ms all ease-in;
    animation: fadeIn ease 0.3s;
    -webkit-animation: fadeIn ease 0.3s;
    -moz-animation: fadeIn ease 0.3s;
    -o-animation: fadeIn ease 0.3s;
    -ms-animation: fadeIn ease 3s;
  }
  :hover .show {
    opacity: 0;
  }
  :hover .hide {
    opacity: 1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    visibility: visible;
  }
  .hide {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    transition: 300ms all ease-out;
    animation: fadeIn ease 0.3s;
    -webkit-animation: fadeIn ease 0.3s;
    -moz-animation: fadeIn ease 0.3s;
    -o-animation: fadeIn ease 0.3s;
    -ms-animation: fadeIn ease 3s;
  }
`;

const ReviewLogo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 50px;
  margin-top: 32px;
  @media only screen and (max-width: 450px) {
    gap: 30px;
    margin-top: 28px;
  }
`;

const RightWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  p {
    font-family: 'Bagoss';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 24px;
    color: var(--dark-green);
    margin: 0 0 0 0px;
    text-align: center;
    letter-spacing: 0.02em;
    ${(props) =>
      props.isLight &&
      css`
        color: var(--dark-green);
      `}
    @media only screen and (max-width: 450px) {
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
    }
  }
`;

const HeroBtnBlock = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 32px 0 0px;
  @media only screen and (max-width: 768px) {
    margin-bottom: 20px;
    gap: 12px;
    flex-wrap: wrap;
  }
`;

const MainImage = styled.div`
  width: 100%;
  overflow: hidden;
  margin-top: var(--space-64);
  .heromain-image {
    border-radius: var(--radius-8);
    width: 100%;
    height: auto;
    border: 1px solid var(--border-default);
  }
  @media only screen and (max-width: 768px) {
    .heromain-image {
      margin-bottom: 0;
    }
  }
  @media only screen and (max-width: 449px) {
    .heromain-image {
      border-radius: var(--radius-4);
    }
  }
`;

export { HeroSection, HeroHeading, Para, ImageHover, ReviewLogo, RightWrap, HeroBtnBlock, MainImage };
