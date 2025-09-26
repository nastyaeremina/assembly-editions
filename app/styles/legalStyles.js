import styled from 'styled-components';
import { h1_semibold } from './typography';

const MainSection = styled.div`
  padding: var(--space-80) 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-80);
  @media only screen and (max-width: 991px) {
    padding: var(--space-64) 0;
    gap: var(--space-64);
  }
  @media only screen and (max-width: 449px) {
    padding: var(--space-64) 0 var(--space-48);
    gap: var(--space-48);
  }
`;
const PrivacuHero = styled.div`
  text-align: center;
  padding-bottom: var(--space-24);
  h1 {
    ${h1_semibold};
    color: var(--title);
    margin: 0;
  }
  @media only screen and (max-width: 991px) {
    padding-bottom: var(--space-20);
  }
  @media only screen and (max-width: 768px) {
    text-align: left;
  }
  @media only screen and (max-width: 449px) {
    padding-bottom: var(--space-24);
  }
`;

const PostContent = styled.div`
  padding: 0 0 var(--space-64);
  max-width: 728px;
  width: 100%;
  margin: 0 auto;
  @media only screen and (max-width: 991px) {
    padding: 0 0 var(--space-40);
  }
  @media only screen and (max-width: 449px) {
    padding: 0 0 var(--space-48);
  }
`;

export { PrivacuHero, MainSection, PostContent };
