import styled from 'styled-components';
import { body_regular, h3_semibold } from '../../styles/typography';

const GuideCenter = styled.div`
  max-width: 728px;
  width: 100%;
  padding-top: var(--space-64);
  display: flex;
  flex-direction: column;
  gap: var(--space-64);
  @media only screen and (max-width: 991px) {
    padding-top: var(--space-48);
  }
  @media only screen and (max-width: 449px) {
    gap: var(--space-48);
  }
`;
const MainContent = styled.div`
  width: 100%;
  max-width: 728px;
  display: flex;
  flex-direction: column;
  gap: var(--space-64);
  padding-bottom: var(--space-64);
  @media only screen and (max-width: 991px) {
    gap: var(--space-48);
    padding-bottom: var(--space-48);
  }
  @media only screen and (max-width: 449px) {
    gap: var(--space-40);
    padding-bottom: var(--space-40);
  }
`;
const FAQSection = styled.div`
  max-width: 728px;
  width: 100%;
  margin: 0 auto;
`;
const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-16);
`;
const PageTitle = styled.h2`
  ${h3_semibold};
  color: var(--title);
  margin: 0;
`;
const Caption = styled.p`
  ${body_regular};
  color: var(--title);
  margin: 0;
`;

export { GuideCenter, MainContent, FAQSection, HeroSection, PageTitle, Caption };
