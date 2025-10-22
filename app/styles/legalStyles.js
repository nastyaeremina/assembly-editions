import styled from 'styled-components';
import { h1_semibold } from './typography';

const PrivacuHero = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: var(--space-24);
  padding-bottom: var(--space-64);
  h1 {
    ${h1_semibold};
    color: var(--title);
    margin: 0;
  }
  @media only screen and (max-width: 991px) {
    padding-bottom: var(--space-48);
    align-items: flex-start;
    gap: var(--space-20);
    p {
      text-align: left;
    }
  }
  @media only screen and (max-width: 768px) {
    text-align: left;
  }
  @media only screen and (max-width: 449px) {
    padding-bottom: var(--space-40);
  }
`;

const PostContent = styled.div`
  padding: 0 0 var(--space-64);
  max-width: 728px;
  width: 100%;
  margin: 0 auto;
  @media only screen and (max-width: 991px) {
    padding: 0 0 var(--space-48);
    max-width: 100%;
  }
  @media only screen and (max-width: 449px) {
    padding: 0 0 var(--space-40);
  }
`;

export { PrivacuHero, PostContent };
