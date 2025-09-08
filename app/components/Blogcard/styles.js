import styled, { css } from 'styled-components';
import { button_regular, tag } from '../../styles/typography';
import Link from 'next/link';

const BlogDetail = styled.div`
  width: 100%;
  cursor: pointer;
  position: relative;
  border-radius: var(--radius-12);
  a {
    display: flex;
    flex-direction: column;
    gap: var(--space-24);
  }
  @media only screen and (min-width: 449px) {
    :hover {
      .svg-icon {
        transform: none;
        opacity: 1;
      }
    }
  }
`;
const Leftside = styled.div`
  display: inline-flex;
  align-items: stretch;
  overflow: hidden;
  width: 100%;
  max-height: 288px;
  .image {
    object-fit: cover;
    height: 288px;
    max-height: 288px;
    width: 100%;
    border: 1px solid var(--border-default);
    border-radius: var(--radius-12);
    @media only screen and (max-width: 991px) {
      height: 180px;
    }
  }
  ${(props) =>
    props.isAuthorPage &&
    css`
      .image {
        height: 206px;
        max-height: 206px;
      }
    `}
`;
const Bottom = styled.div`
  ${button_regular}
  color: var(--title);
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
`;

const DetailLeftDiv = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-4);
`;

const AuthorLink = styled(Link)`
  ${tag}
  color: var(--text-secondary);
  transition: color 0.3s ease;
  cursor: pointer;
  &:hover {
    color: var(--title);
  }
  &:focus-visible {
    outline: 1px solid var(--link-default);
    border-radius: var(--radius-4);
  }
`;

export { BlogDetail, Leftside, Bottom, DetailLeftDiv, AuthorLink };
