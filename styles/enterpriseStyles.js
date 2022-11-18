import styled from "styled-components";
import { Body2, Heading2 } from "./styles";

const MainWrap = styled.div`
  background-color: ${({ theme }) => theme.colors.greendark};
`;
const EnterPriseHero = styled.div`
  padding: 160px 0 0 0;
  background-image: url("/images/enterpriceone.png");
  background-position: center 80px;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vw;
`;
const LeftHero = styled.div`
  max-width: 712px;
  width: 100%;
  /* padding-bottom: 895px; */
`;
const TitleSec = styled.div`
  h2 {
    ${Heading2};
    color: ${({ theme }) => theme.colors.greenlight};
    margin: 0;
  }
  p {
    ${Body2};
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.greenlight};
    margin: 20px 0 32px;
  }
`;
const BtnWrap = styled.div``;

export { MainWrap, EnterPriseHero, LeftHero, TitleSec, BtnWrap };
