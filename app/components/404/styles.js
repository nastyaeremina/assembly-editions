import styled from 'styled-components';
import { body_regular, h1_semibold } from '../../styles/typography';

const ErrorMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--space-12);
  flex-direction: column;
  padding: 0 0 var(--space-64);
  h1 {
    ${h1_semibold};
    margin: 0;
    color: var(--title);
  }
  p {
    color: var(--title);
    ${body_regular};
    margin: 0;
    text-align: center;
  }
  .button {
    margin-top: var(--space-12);
  }
  @media only screen and (max-width: 991px) {
    padding: 0 0 var(--space-48);
    .button {
      margin-top: var(--space-8);
    }
  }
  @media only screen and (max-width: 749px) {
    padding: 0 0 var(--space-40);
    gap: var(--space-16);
    .button {
      margin-top: var(--space-4);
    }
  }
`;
export { ErrorMain };
