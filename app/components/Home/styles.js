import styled, { css } from 'styled-components';
import { Body2, Heading2, MbBody1, MobileH2 } from '../../styles/styles';
import { HeroTypes } from '../../constants/constant';
import { button_regular, button_semibold } from '../../styles/typography';

const HeroSection = styled.div`
  width: 100%;
  padding: 0 0 var(--space-64);
  overflow: hidden;
  @media only screen and (max-width: 991px) {
    padding: 0 0 var(--space-48);
  }
  @media only screen and (max-width: 449px) {
    padding: 0 0 var(--space-40);
  }

  .button-group {
    align-items: center;
    justify-content: center;
    margin-top: var(--space-32);
    @media only screen and (max-width: 449px) {
      margin-top: var(--space-28);
    }
  }
  .logo-image {
    width: auto;
    height: auto;
    max-height: 48px;
    margin: 0 0 var(--space-24);
    display: flex;
    justify-content: center;
    align-items: center;
    ${(props) =>
      props.variant === HeroTypes.CENTER &&
      css`
        margin: 0 auto var(--space-24);
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    @media only screen and (max-width: 991px) {
      margin: 0 auto var(--space-20);
    }
    @media screen and (max-width: 449px) {
      align-items: flex-start;
      justify-content: flex-start;
      margin: 0 0 var(--space-20);
    }
  }
`;

const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 991px) {
    flex-direction: column-reverse;
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
  margin-top: var(--space-48);
  display: flex;
  border-radius: var(--radius-16);
  .heromain-image {
    border-radius: var(--radius-16);
    width: 100%;
    height: auto;
    border: 1px solid var(--border-secondary);
  }
  @media only screen and (max-width: 991px) {
    margin-top: var(--space-40);
    .heromain-image {
      margin-bottom: 0;
    }
  }
  @media only screen and (max-width: 449px) {
    border-radius: var(--radius-12);
    margin-top: var(--space-32);
    .heromain-image {
      border-radius: var(--radius-12);
    }
  }
`;

const G2Section = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-8);
  padding: var(--space-3) var(--space-12);
  margin: 0 auto;
  margin-bottom: var(--space-24);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-8);
  background-color: var(--off-white-300);
  width: max-content;
  @media only screen and (max-width: 991px) {
    margin-bottom: var(--space-20);
  }
  @media only screen and (max-width: 449px) {
    margin: 0;
    margin-bottom: var(--space-20);
  }
  ${(props) =>
    props.variant === HeroTypes.LEFT &&
    css`
      margin: 0;
      margin-bottom: var(--space-24);
    `}
`;
const Stars = styled.p`
  ${button_semibold};
  color: var(--title);
  margin: 0;
  padding-top: var(--space-3);
`;
const Review = styled.p`
  ${button_regular};
  color: var(--text-secondary);
  margin: 0;
  padding-top: var(--space-3);
`;
export {
  HeroSection,
  HeroHeading,
  Para,
  ImageHover,
  ReviewLogo,
  RightWrap,
  HeroBtnBlock,
  MainImage,
  BottomSection,
  G2Section,
  Stars,
  Review
};
