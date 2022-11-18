import styled, { css } from "styled-components";
import {
  Body2,
  Body4,
  Body5,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  LinkTxt,
  Value,
} from "./styles";
const UniversitySection = styled.div`
  padding-top: 80px;
  padding-bottom: 100px;
`;
const UniversityHero = styled.div`
  padding-top: 100px;
  text-align: center;
  max-width: 780px;
  margin: 0 auto;
  h2 {
    ${Heading2};
    color: ${({ theme }) => theme.colors.title};
    margin: 0 0 20px 0;
  }
  p {
    color: ${({ theme }) => theme.colors.body};
    margin: 0;
    ${Body2};
  }
`;
const FeatureWrap = styled.div`
  display: flex;
  gap: 36px;
  padding-top: 100px;
`;
const FeatureLeft = styled.div`
  position: relative;
`;
const LeftWrap = styled.div`
  position: sticky;
  top: 95px;
`;
const InputWrap = styled.div`
  position: relative;
  img {
    position: absolute;
    top: 18px;
    left: 20px;
  }
`;
const Input = styled.input`
  ${Value};
  color: ${({ theme }) => theme.colors.title};
  letter-spacing: 0.01em;
  padding: 11px 80px 11px 56px;
  border: 1px solid #ccccd0;
  border-radius: 48px;
  width: 306px;
  outline: 0;
  ::placeholder {
    color: ${({ theme }) => theme.colors.lightgray};
  }
`;
const Catagory = styled.ul`
  padding-top: 50px;
  .active {
    color: ${({ theme }) => theme.colors.title};
  }
  h4 {
    padding-bottom: 20px;
    margin: 0;
    ${Heading5};
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
    ${LinkTxt};
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.primary};
    margin: 0;
    :hover {
      color: ${({ theme }) => theme.colors.title};
    }
    :active {
      color: ${({ theme }) => theme.colors.title};
    }
  }
`;
const FeatureRight = styled.div`
  position: relative;
  h3 {
    ${Heading4};
    color: ${({ theme }) => theme.colors.title};
    margin: 0 0 28px 0;
  }
`;
const Featured = styled.div`
  /* padding-top: 100px; */
  ${(props) =>
    props.isSelected &&
    css`
      padding-top: 100px;
    `}
`;
const FeatureMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 36px;
  row-gap: 28px;
`;
const FeatureCard = styled.div`
  border-radius: 4px;
`;
const ExtensionsSection = styled.div`
  padding-top: 40px;
  ${(props) =>
    props.isSelected &&
    css`
      padding-top: 100px;
    `}
`;
const ExtensionCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 36px;
`;
const SchedulingApps = styled.div`
  padding-top: 40px;
  ${(props) =>
    props.isSelected &&
    css`
      padding-top: 100px;
    `}
`;
const DetailVideoMain = styled.div`
  padding-top: 80px;
`;
const DetailVideoHero = styled.div`
  padding: 40px 0;
  h3 {
    ${Heading3};
    color: ${({ theme }) => theme.colors.title};
    margin: 0;
  }
`;
const Backlink = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  padding-bottom: 28px;
  p {
    ${LinkTxt};
    margin: 0;
    color: ${({ theme }) => theme.colors.lightgray};
  }
`;
const VideoImage = styled.div`
  position: relative;
  padding-bottom: 40px;
`;
const VideoSection = styled.div`
  padding-bottom: 100px;
  .mainimage {
    position: absolute;
    top: 34%;
    left: 42%;
  }
  p {
    ${Body2};
    color: ${({ theme }) => theme.colors.body};
    margin: 0;
  }
`;
const VIdeoWrap = styled.div`
  padding-bottom: 100px;
  h3 {
    ${Heading3};
    color: ${({ theme }) => theme.colors.title};
    margin: 0;
  }
`;
const UniversityVideo = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
`;
export {
  UniversitySection,
  UniversityHero,
  FeatureWrap,
  FeatureLeft,
  LeftWrap,
  InputWrap,
  Input,
  Catagory,
  Catagoryitem,
  FeatureRight,
  Featured,
  FeatureMenu,
  FeatureCard,
  ExtensionsSection,
  SchedulingApps,
  ExtensionCard,
  DetailVideoMain,
  DetailVideoHero,
  Backlink,
  VideoSection,
  VideoImage,
  VIdeoWrap,
  UniversityVideo,
};
