import styled from 'styled-components';
import { body_regular, button_regular } from '../../styles/typography';

const TagDiv = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-24);
`;

const Tag = styled.div`
  ${body_regular}
  color: var(--text-secondary);
  transition: color 0.3s ease;
  cursor: pointer;
  border-radius: var(--radius-8);
  :hover {
    color: var(--title);
  }
  :focus-visible {
    outline: 1px solid var(--link-default);
  }
  &.active {
    color: var(--title);
  }
`;

export { TagDiv, Tag };
