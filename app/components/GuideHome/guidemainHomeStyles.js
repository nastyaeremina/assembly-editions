import styled from 'styled-components';

const MainHomePage = styled.div`
  max-width: 1008px;
  width: 100%;
  margin: 0 auto;
  padding: var(--space-64) 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-80);
  @media only screen and (max-width: 991px) {
    padding: var(--space-48) 0;
    gap: var(--space-64);
  }
  @media only screen and (max-width: 449px) {
    padding: var(--space-48) 0 var(--space-40);
    gap: var(--space-48);
  }
`;
export { MainHomePage };
