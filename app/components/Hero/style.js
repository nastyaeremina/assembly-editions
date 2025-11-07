import styled, { css } from 'styled-components';
import { body_regular, body_semibold, h2_semibold, h3_semibold, h4_semibold } from '../../styles/typography';

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
`;
const SubHeroCaption = styled.div`
  max-width: 918px;
  width: 100%;
  margin: 0;
  h1 {
    ${h2_semibold};
    color: var(--title);
    margin: 0 0 20px 0;
  }
  h2 {
    ${h3_semibold};
    color: var(--title);
    margin: 0 0 20px 0;
  }
  h3 {
    ${h4_semibold};
    color: var(--title);
    margin: 0 0 20px 0;
  }
  h4 {
    ${body_semibold};
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
  @media only screen and (max-width: 449px) {
    h2 {
      text-align: left;
    }
  }
`;
export { HeroSection, PageTitle, Caption, MainHero, SubHeroSection, SubHeroCaption };
