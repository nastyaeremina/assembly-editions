import styled from 'styled-components';
import { body_regular } from '../../styles/typography';
import Link from 'next/link';

const TagDiv = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-24);
`;

const Tag = styled(Link)`
  ${body_regular}
  color: var(--text-secondary);
  transition: color 0.3s ease;
  cursor: pointer;
  :hover {
    color: var(--title);
  }
  :focus-visible {
    outline: 1px solid var(--link-default);
    border-radius: var(--radius-8);
  }
  &.active {
    color: var(--title);
  }
`;

export { TagDiv, Tag };
