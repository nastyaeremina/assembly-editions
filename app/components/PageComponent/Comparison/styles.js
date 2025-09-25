import styled from 'styled-components';

const MainWrap = styled.div`
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

const DetailSection = styled.div`
  padding: var(--space-64) 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-80);
  @media only screen and (max-width: 991px) {
    padding: var(--space-40) 0;
    gap: var(--space-64);
  }
  @media only screen and (max-width: 449px) {
    padding: var(--space-48) 0;
  }
`;

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

export { MainWrap, DetailSection, MainSection };
