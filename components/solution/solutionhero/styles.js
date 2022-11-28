import styled from "styled-components";
import { Body2, Heading2 } from "../../../styles/styles";

const HeroSection = styled.div`
  padding: 180px 0 0 0;
`;
const SolutionWrap = styled.div`
  display: flex;
  gap: 163px;
`;
const LeftWrap = styled.div``;
const RightWrap = styled.div``;
const TextSection = styled.div`
  h2 {
    ${Heading2};
    color: ${({ theme }) => theme.colors.title};
    margin: 0;
    span {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  p {
    ${Body2};
    color: ${({ theme }) => theme.colors.body};
    letter-spacing: 0.02em;
    margin: 20px 0 32px;
  }
`;
const BtnWrap = styled.div`
  display: flex;
  gap: 20px;
`;

const ImageView = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  padding-bottom: 174px;
  z-index: 2;
`;
const LineIcon = styled.div`
  position: absolute;
  z-index: -1;
  right: 35px;
  bottom: -26px;
`;
const MobileImg = styled.div`
  display: inline-flex;
  position: absolute;
  left: 0;
  top: 152px;
  left: -103px;
  box-shadow: 0px 15px 64px rgba(0, 0, 0, 0.15),
    0px 0px 15.6171px rgba(0, 0, 0, 0.08),
    inset 0px 0px 6.24685px rgba(0, 0, 0, 0.16);
  border-radius: 21.0831px;
`;
export {
  HeroSection,
  SolutionWrap,
  LeftWrap,
  RightWrap,
  TextSection,
  BtnWrap,
  ImageView,
  LineIcon,
  MobileImg,
};
