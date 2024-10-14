import styled from 'styled-components';
import {
  Body2,
  Body4,
  FooterText,
  Heading2,
  Heading3,
  Heading5,
  Heading6,
  MbBody2,
  MbBody4,
  MobileH2
} from '../../styles/styles';

const Time = styled.div`
  padding: 4px 8px;
  background: var(--dark-green);
  display: inline-block;
  margin-bottom: 20px;
  p {
    color: var(--light-green);
    margin: 0;
    ${Heading6}
  }
`;

const TextSection = styled.div`
  h1 {
    ${Heading2};
    color: var(--title);
    margin: 0;
    span {
      color: var(--primary);
    }
  }

  p {
    ${Body2};
    color: var(--body);
    letter-spacing: 0.02em;
    margin: 0 0 12px;
  }

  @media only screen and (max-width: 749px) {
    h1 {
      ${MobileH2};
    }
    p {
      ${MbBody2}
    }
  }
`;

const Speakers = styled.div`
  p {
    ${Heading6}
    color: var(--title);
    margin: 0 0 8px;
  }
`;
const Profile = styled.div`
  position: relative;
  display: block;
  .tooltip {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  :hover .tooltiptext {
    visibility: visible;
  }
  .tooltiptext {
    visibility: hidden;
    z-index: 99;
  }
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 12px;
  }
`;

const SpeakerProfile = styled.div`
  display: flex;
  gap: 12px;
  .tooltip {
    border-radius: 50%;
    border: 1px solid var(--dark-green);
    width: 40px;
    height: 40px;
  }
  @media only screen and (max-width: 991px) {
    flex-direction: column;
    gap: 16px;
  }
`;
const Profiledetail = styled.div`
  position: absolute;
  width: max-content;
  top: 60px;
  left: -14px;
  padding: 24px 32px;
  background-color: var(--dark-green);
  color: var(--light-green);
  box-shadow: 0px 4px 16px var(--black-shadow-25);
  border-radius: 4px;
  p {
    ${Heading5}
    margin:0 0 8px;
    color: var(--light-green);
  }
  span {
    ${Body4}
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const Form = styled.form`
  .btnposition {
    width: 100%;
    text-align: center;
    a {
      width: 100%;
      text-align: center;
      justify-content: center;
    }
  }
`;
const FormLine = styled.div`
  position: absolute;
  bottom: -104px;
  left: 50%;
  @media only screen and (max-width: 768px) {
    bottom: -84px;
    svg {
      height: 80px;
    }
  }
`;
const FormRightLine = styled.div`
  /* position:absolute;
  right: -49px;
  top:35%; */
  border-top: 1px solid black;
  width: 100%;
  position: absolute;
  left: 100%;
  top: 50%;
  @media only screen and (max-width: 1440px) {
    width: 26%;
  }
  @media only screen and (max-width: 1024px) {
    width: 8%;
  }
  @media only screen and (max-width: 768px) {
    width: 3%;
  }
  @media only screen and (max-width: 449px) {
    width: 6%;
  }
`;

const Card = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  background-color: var(--light-green);
`;
const TextWrap = styled.div`
  h2 {
    ${Heading3};
    color: var(--black);
  }
`;
const Line = styled.div`
  position: absolute;
  bottom: 63%;
`;
const MobileProfile = styled.div`
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
  }
  p {
    ${MbBody4}
    margin: 0 0 2px;
    color: var(--title);
  }
  span {
    ${FooterText}
    color: var(--body);
  }
`;

export {
  Time,
  TextSection,
  Speakers,
  Profile,
  Profiledetail,
  Form,
  FormLine,
  FormRightLine,
  SpeakerProfile,
  Card,
  TextWrap,
  Line,
  MobileProfile
};
