import styled, { css } from "styled-components";
import {
  Body1,
  Body2,
  Body4,
  Body5,
  CardTxt,
  Heading2,
  Heading4,
  Value,
} from "./styles";
const HeroSection = styled.div`
  padding-top: 180px;
  text-align: center;

  h2 {
    ${Heading2};
    color: ${({ theme }) => theme.colors.title};
    margin: 0 auto;
    margin-bottom: 20px;
  
  }
  p {
    ${Body2};
    margin: 0 auto;
    margin-bottom: 32px;
    color: ${({ theme }) => theme.colors.body};
    letter-spacing: 0.02em;
  }
`;
const FeatureSection = styled.div`
  padding: 100px 0;
`;
const FeatureWrap = styled.div`
  display: flex;
  gap: 60px;
`;
const Input = styled.input`
  ${Value};
  background-image: "/images/search1.svg";
  color: ${({ theme }) => theme.colors.lightgray};
  letter-spacing: 0.01em;
  padding: 12px 20px;
  border: 1px solid #bebebf;
  border-radius: 48px;
  width: 306px;
`;
const Catagory = styled.ul`
  padding-top: 49px;

  h4 {
    padding-bottom: 20px;
    margin: 0;
    ${Body1};
    color: ${({ theme }) => theme.colors.title};
    border-bottom: 1px solid #000000;
    letter-spacing: 0.02em;
    max-width: 306px;
    width: 100%;
  }
`;
const Catagoryitem = styled.li`
  padding: 16px 0;
  border-bottom: 1px solid #000000;
  a {
    ${Body4};
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.black};

    margin: 0;
    :first-child {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
const FeatureLeft = styled.div``;
const FeatureRight = styled.div`
  h4 {
    ${Heading4};
    color: ${({ theme }) => theme.colors.title};
    margin: 0 0 20px 0;
  }
`;
const FeatureMenu = styled.div`
  display: flex;
  gap: 25px;
`;
const FeatureCard = styled.div`
  background-color: ${({ theme }) => theme.colors.whitecolor};
  border: 1px solid #01011d;
  border-radius: 8px;
  overflow: hidden;
  max-width: 100%;
  width: 100%;
  img {
    padding: 16px 40px;
  }
`;
const CardText = styled.div`
  padding: 16px 0;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  h4 {
    padding: 0 20px;
    ${Body4};
    color: ${({ theme }) => theme.colors.title};
    letter-spacing: 0.02em;
    margin: 0 0 8px 0;
  }
  p {
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.mediumgray};
    ${Body5};
    padding: 0 20px;
  }
`;
const CardEnd = styled.div`
  background-color: ${({ theme }) => theme.colors.greenlight};
  padding: 6px 16px;
  p {
    ${CardTxt};
    color: ${({ theme }) => theme.colors.purpledark};
    margin: 0;
  }
`;
const FeatureImg = styled.div`
  padding: 38px 16px;
`;
const Featured = styled.div``;
const ExtensionsSection = styled.div`
  padding-top: 40px;
  p {
    ${Body5};
    color: ${({ theme }) => theme.colors.title};
    margin: 0;
    letter-spacing: 0.02em;
  }
`;
const ExtensionCard = styled.div`
  padding-top: 20px;
  display: flex;
  gap: 24px;
`;
const CardSub = styled.div`
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 8px;
  padding: 16px;
  p {
    color: ${({ theme }) => theme.colors.mediumgray};
    letter-spacing: 0.02em;
    ${Body5}
    margin: 0;
  }
`;
const CardInfo = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  padding-bottom: 12px;

  h4 {
    color: ${({ theme }) => theme.colors.black};
    ${Body4}
    letter-spacing: 0.02em;
    margin: 0;
  }
`;
const SchedulingApps = styled.div`
  padding-top: 40px;
`;
const CardWrap = styled.div``;
export {
  HeroSection,
  FeatureSection,
  FeatureWrap,
  Input,
  Catagory,
  Catagoryitem,
  FeatureLeft,
  FeatureRight,
  FeatureMenu,
  FeatureCard,
  CardText,
  CardEnd,
  FeatureImg,
  Featured,
  ExtensionsSection,
  ExtensionCard,
  CardSub,
  CardInfo,
  SchedulingApps,
  CardWrap,
};
