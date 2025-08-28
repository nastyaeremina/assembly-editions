import styled from 'styled-components';
import Link from 'next/link';
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

const BreadcrumbLink = styled(Link)`
  ${button_regular};
  color: var(--text-secondary);
  transition: color 0.3s ease;
  &:hover {
    color: var(--title);
  }
  :focus-visible {
    outline: 1px solid var(--link-default);
    border-radius: var(--radius-8);
  }
`;

const Line = styled.span`
  ${button_regular};
  color: var(--text-secondary);
`;

export { BreadcrumbItemsWrapper, BreadcrumbLink, Line };
