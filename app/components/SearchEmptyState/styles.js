import styled from 'styled-components';
import { body_regular, h4_semibold } from '../../styles/typography';
const EmptyState = styled.div`
  padding-top: var(--space-80);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-24);
  max-width: 376px;
  width: 100%;
  margin: 0 auto;
`;

const EmptyDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-12);
  h4 {
    margin: 0;
    color: var(--title);
    ${h4_semibold}
    text-align: center;
  }
  p {
    margin: 0;
    color: var(--text-secondary);
    text-align: center;
    ${body_regular}
  }
`;

const EmptyIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background-color: var(--title);
  border-radius: var(--radius-8);
  .icon {
    path {
      fill: var(--off-white-100);
    }
  }
`;

export { EmptyState, EmptyDescription, EmptyIcon };
