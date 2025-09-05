import styled from 'styled-components';
import { button_regular } from '../../styles/typography';

const BreadcrumbItemsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-12);
  span {
    ${button_regular};
    color: var(--text-secondary);
  }
`;

const Line = styled.span`
  ${button_regular};
  color: var(--text-secondary);
`;

export { BreadcrumbItemsWrapper, Line };
