import styled, { css } from 'styled-components';
import { black, body, greenlight, greenmidlight, title } from '../../styles/color';
import { Body3, Body4, Body5, MbBody3, MbBody4, MbBody5 } from '../../styles/styles';

const TestimonialMainBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-top: 1px solid ${black};
  border-left: 1px solid ${black};
  border-radius: 4px;
  overflow: hidden;
  @media only screen and (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const TestimonialBox = styled.div`
  padding: 12px;
  border-right: 1px solid ${black};
  border-bottom: 1px solid ${black};
  display: flex;
  justify-content: center;
  :hover {
    background-color: ${greenlight};
  }
  &.active {
    background-color: ${greenmidlight};
  }
  img {
    width: auto;
    height: 52px;
    filter: grayscale(100%);
  }
  :nth-child(4) {
    border-radius: 0 4px 0 0;
  }
  :nth-child(16) {
    border-radius: 0 0 0 4px;
  }
  :last-child {
    border-radius: 0 0 4px 0;
  }
  ${(props) =>
    props.isHideMobile &&
    css`
      display: none;
    `}
  @media only screen and (max-width: 449px) {
    img {
      width: 100%;
    }
  }
`;

const TestimonialCenter = styled.div`
  grid-column: span 2;
  grid-row: span 5;
  border-right: 1px solid ${black};
  border-bottom: 1px solid ${black};
  padding: 0px 40px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;
  .main-logo {
    width: auto;
    height: 52px;
  }
  @media only screen and (max-width: 449px) {
    padding: 20px;
    gap: 24px;
    .main-logo {
      width: auto;
      height: 52px;
    }
  }
`;

const Caption = styled.div`
  text-align: center;
  p {
    ${Body3}
    margin: 0;
    color: ${title};
  }
  strong,
  b {
    position: relative;
    display: inline-block;
    z-index: 1;
    font-weight: 400;
  }

  b,
  strong::before {
    content: '';
    background: ${greenmidlight};
    position: absolute;
    width: calc(100% + 4px);
    height: 100%;
    top: 1px;
    left: -2px;
    z-index: -1;
    transform-origin: 0% 0%;
    transform: scaleX(0);
    transition: transform 0.5s cubic-bezier(0.78, 0.01, 0.11, 0.98);
    animation: hero-highlight 1s cubic-bezier(0.78, 0.01, 0.11, 0.98) forwards;
    animation-delay: 0.3s;
  }
  strong:nth-of-type(2):before {
    animation-delay: 0.6s;
  }
  @keyframes hero-highlight {
    100% {
      transform: scaleX(1);
    }
  }
  @media only screen and (max-width: 449px) {
    p {
      ${MbBody3}
    }
  }
`;

const FounderSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  img {
    border-radius: 50%;
    border: 1px solid ${black};
  }
  @media only screen and (max-width: 449px) {
    img {
      width: 32px;
      height: 32px;
    }
  }
`;
const Founder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
const Name = styled.div`
  ${Body4};
  color: ${title};
  @media only screen and (max-width: 449px) {
    ${MbBody4}
  }
`;
const FounderPosition = styled.div`
  ${Body5};
  color: ${body};
  @media only screen and (max-width: 449px) {
    ${MbBody5}
  }
`;

const TestimonialSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 50px 0;
  @media only screen and (max-width: 768px) {
    padding: 40px 0;
  }
`;
export {
  TestimonialMainBox,
  TestimonialBox,
  TestimonialCenter,
  Caption,
  FounderSection,
  Founder,
  Name,
  FounderPosition,
  TestimonialSection
};
