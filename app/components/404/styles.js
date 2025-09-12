import styled from 'styled-components';
import { body_regular, h1_semibold } from '../../styles/typography';

const MainHeroSection = styled.div`
  padding: var(--space-80) 0;
  @media only screen and (max-width: 991px) {
    padding: var(--space-64) 0;
  }
  @media only screen and (max-width: 749px) {
    padding: var(--space-48) 0;
  }
`;
const ErrorMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--space-24);
  flex-direction: column;
  padding: var(--space-64) 0;
  h1 {
    ${h1_semibold};
    margin: 0;
    color: var(--title);
  }
  p {
    color: var(--text-secondary);
    ${body_regular};
    margin: 0;
    text-align: center;
  }
  @media only screen and (max-width: 991px) {
    padding: var(--space-40) 0;
  }
  @media only screen and (max-width: 749px) {
    padding: var(--space-48) 0;
    p {
      margin-bottom: var(--space-8);
    }
  }
`;
export { MainHeroSection, ErrorMain };
