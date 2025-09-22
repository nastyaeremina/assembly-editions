import styled from 'styled-components';
import { button_regular } from '../../styles/typography';

const BreadcrumbItemsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-12);
  span {
    ${button_regular};
    color: var(--text-secondary);
    display: -webkit-box;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    word-break: break-all;
  }
`;

const Line = styled.div`
  ${button_regular};
  color: var(--text-secondary);
`;

export { BreadcrumbItemsWrapper, Line };
