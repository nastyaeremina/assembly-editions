import styled, { css } from 'styled-components';
import { Body3, Heading2, Heading3, Heading4, Heading5, MbBody3, MobileH2, MobileH3 } from '../../styles/styles';
import { body_regular, h2_semibold, h3_semibold } from '../../styles/typography';

const PageTitle = styled.h3`
  ${h3_semibold};
  color: var(--title);
  margin: 0;
`;
const Caption = styled.div`
  p {
    ${body_regular};
    color: var(--text-secondary);
    margin: 0;
  }
`;

const MainHero = styled.div`
  padding: 0;
`;

const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-12);
  max-width: 810px;
  width: 100%;
  text-align: left;
`;

const SubHeroSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 811px;
  width: 100%;
  .button-group {
    margin-top: 28px;
  }
  h2 {
    ${h2_semibold};
    color: var(--title);
    margin: 0;
  }
  .button-section {
    margin-top: 8px;
  }
  @media only screen and (max-width: 768px) {
    h1 {
      ${MobileH2}
      line-height: 50px;
    }
  }
  @media only screen and (max-width: 449px) {
    h1 {
      ${MobileH3}
    }
  }
`;
const SubHeroCaption = styled.div`
  max-width: 918px;
  width: 100%;
  margin: 0;
  h1 {
    ${Heading2};
    color: var(--title);
    margin: 0 0 20px 0;
  }
  h2 {
    ${Heading3};
    color: var(--title);
    margin: 0 0 20px 0;
  }
  h3 {
    ${Heading4};
    color: var(--title);
    margin: 0 0 20px 0;
  }
  h4 {
    ${Heading5};
    color: var(--title);
    margin: 0 0 20px 0;
  }
  p {
    ${body_regular};
    color: var(--body);
    margin: 0;
  }
  ${(props) =>
    props.hasFullWidth &&
    css`
      max-width: 100%;
    `}
  @media only screen and (max-width: 768px) {
    p {
      ${Body3}
    }
  }
  @media only screen and (max-width: 449px) {
    h2 {
      font-family: 'Bagoss';
      ${MobileH3}
      line-height:30.8px;
      letter-spacing: 0em;
      text-align: left;
    }
  }
`;
export { HeroSection, PageTitle, Caption, MainHero, SubHeroSection, SubHeroCaption };
