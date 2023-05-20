import styled, { css } from 'styled-components';
import { Body2, Heading2, Heading3, MbBody2, TableText } from './styles';

const AutomationHero = styled.div`
  width: 100%;
  padding: 180px 0 0px 0;
  margin-bottom: 50px;
  text-align: center;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.greendark};
  .automation-image {
    max-width: 1224px;
    width: 100%;
  }
  @media only screen and (max-width: 749px) {
    padding: 148px 0 0px 0;
    .automation-image {
      display: none;
    }
  }
  @media only screen and (max-width: 768px) {
    margin-bottom: 30px;
    .automation-image {
      display: none;
    }
  }
`;
const Title = styled.div`
  ${Heading2}
  text-align: center;
  color: ${({ theme }) => theme.colors.greenlight};
  @media only screen and (max-width: 426px) {
    ${TableText}
  }
`;
const Caption = styled.div`
  margin: 20px auto 0;
  max-width: 880px;
  width: 100%;
  ${Body2}
  text-align: center;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.colors.greenlight};
  @media only screen and (max-width: 426px) {
    ${MbBody2}
  }
`;
const AutomationButton = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 32px;
  @media only screen and (max-width: 768px) {
    padding-bottom: 40px;
  }
  @media only screen and (max-width: 426px) {
    flex-direction: column;
    gap: 12px;
  }
`;
const SetupAutomation = styled.div`
  padding-top: 50px;
  padding-bottom: 40px;
  max-width: 780px;
  width: 100%;
  ${Heading3}
  color: ${({ theme }) => theme.colors.title};
  span {
    color: ${({ theme }) => theme.colors.primary};
  }
  ${(props) =>
    props.istitle &&
    css`
      max-width: 100%;
    `}
`;
const Cards = styled.div`
  display: flex;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const CardSec = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 50px;
  @media only screen and (max-width: 426px) {
    padding-bottom: 30px;
  }
`;
const Featured = styled.div`
  padding-top: 100px;
  padding-bottom: 40px;
  @media only screen and (max-width: 426px) {
    padding-top: 80px;
  }
`;
export { AutomationHero, Title, Caption, AutomationButton, SetupAutomation, Cards, CardSec, Featured };
