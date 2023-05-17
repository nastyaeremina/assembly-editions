import styled from 'styled-components';
import { Body1, Body2, Body3, Body4, Heading2, Heading3, Heading4, MbBody2, MobileH2, MobileH3 } from './styles';

const PartnershipHero = styled.div`
  padding: 180px 0 0 0;
  @media only screen and (max-width: 768px) {
    padding: 120px 0 0 0;
  }
`;
const Heading = styled.h1`
  ${Heading2}
  color: ${({ theme }) => theme.colors.title};
  text-align: center;
  margin: 0 auto;
  max-width: 1000px;
  width: 100%;
  span{
    color: ${({ theme }) => theme.colors.primary};
  }
  @media only screen and (max-width: 768px) {
    ${MobileH2}
  }
`;
const Body = styled.p`
  ${Body2}
  color: ${({ theme }) => theme.colors.body};
  text-align: center;
  max-width: 880px;
  width: 100%;
  margin: 20px auto 32px;
  @media only screen and (max-width: 768px) {
    ${MbBody2}
  }
`;
const HeroBtn = styled.div`
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
`;
const Round = styled.div`
  width: 527px;
  height: 527px;
  margin: 0 auto;
  @media only screen and (max-width: 749px) {
    width: 340px;
    height: 350px;
    .circle {
      width: 340px;
      height: 350px;
    }
  }
  @media only screen and (max-width: 449px) {
    width: 270px;
    height: 270px;
    .circle {
      width: 270px;
      height: 270px;
    }
  }
`;
const ImageSection = styled.div`
  position: relative;
  top: -40px;
  @media only screen and (max-width: 449px) {
    top: -38px;
  }
`;
const Card = styled.div`
  width: 290px;
  height: 330px;
  background: #e3ffee;
  border: 1px solid #00160e;
  border-radius: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  .hero-image {
    width: 255px;
    height: 292px;
  }
  @media only screen and (max-width: 749px) {
    width: 190px;
    height: 210px;
    border: 1px solid #00160e;
    border-radius: 8.61153px;
    .hero-image {
      width: 164px;
      height: 182px;
    }
  }
  @media only screen and (max-width: 449px) {
    width: 136px;
    height: 156px;
    border: 1px solid #00160e;
    border-radius: 8.61153px;
    .hero-image {
      width: 120px;
      height: 138px;
    }
  }
`;
const Section = styled.div`
  display: flex;
  flex-direction: row;
  gap: 130px;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  z-index: 1;
  @media only screen and (max-width: 649px) {
    gap: 70px;
  }
  @media only screen and (max-width: 449px) {
    gap: 54px;
  }
`;
const Leftline = styled.div`
  border: 1px solid #00160e;
  border-style: solid none none none;
  position: absolute;
  width: 100%;
  transform: translate(-55%, -50%);
  top: 50%;
  @media only screen and (max-width: 1305px) {
    transform: translate(-60%, -50%);
  }
  @media only screen and (max-width: 1024px) {
    transform: translate(-60%, -50%);
  }
  @media only screen and (max-width: 649px) {
    transform: translate(-65%, -50%);
  }
  @media only screen and (max-width: 449px) {
    border: 1px solid #00160e;
    border-style: solid none none none;
  }
`;
const Rightline = styled.div`
  border: 1px solid #00160e;
  border-style: solid none none none;
  position: absolute;
  width: 43%;
  transform: translate(6%, -50%);
  top: 50%;
  left: 54%;
  @media only screen and (max-width: 1024px) {
    width: 42%;
    transform: translate(-5%, -50%);
    left: 60%;
  }
  @media only screen and (max-width: 826px) {
    width: 41%;
    left: 61%;
  }
  @media only screen and (max-width: 768px) {
    width: 40%;
    transform: translate(-5%, -50%);
    left: 62%;
  }
  @media only screen and (max-width: 649px) {
    width: 36%;
    transform: translate(-5%, -50%);
    left: 65%;
  }
  @media only screen and (max-width: 449px) {
    width: 36%;
  }
`;
const Keycard = styled.div`
  max-width: 1224px;
  width: 100%;
  border: 1px solid #000000;
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  @media only screen and (max-width: 768px) {
    margin-top: 40px;
  }
`;
const Left = styled.div`
  padding: 40px;
  .btn {
    margin-top: 40px;
  }
  @media only screen and (max-width: 768px) {
    padding: 28px;
    .btn {
      margin-top: 28px;
    }
  }
`;
const Right = styled.div`
  padding: 28px;
  border-left: 1px solid #00160e;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const LeftHeading = styled.h2`
  ${Heading3}
  color: ${({ theme }) => theme.colors.title};
  margin: 0 0 16px;
  @media only screen and (max-width: 768px) {
    ${MobileH3}
    margin: 0 0 12px;
  }
`;
const LeftBody = styled.div`
  p {
    ${Body1}
    color: ${({ theme }) => theme.colors.greendark};
    margin: 0 0 16px;
    :last-child {
      margin: 0;
    }
    @media only screen and (max-width: 768px) {
      ${MbBody2}
      margin: 0 0 12px;
    }
  }
`;
export {
  PartnershipHero,
  Heading,
  Body,
  HeroBtn,
  Round,
  ImageSection,
  Card,
  Section,
  Leftline,
  Rightline,
  Keycard,
  Left,
  Right,
  LeftHeading,
  LeftBody
};
