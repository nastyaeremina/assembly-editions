import styled, { css } from 'styled-components';
import { body_regular } from '../../styles/typography';

const DetailLink = styled.div`
  a {
    display: inline-flex;
    gap: 8px;
    align-items: center;
  }
  padding-bottom: var(--space-30);
  padding-top: var(--space-80);
  p {
    ${body_regular};
    margin: 0;
    color: var(--medium-gray);
  }
  a {
    :hover {
      p {
        color: var(--title);
      }
      svg path {
        stroke: var(--title);
      }
    }
  }
  @media only screen and (max-width: 768px) {
    padding-top: var(--space-64);
    padding-bottom: var(--space-28);
  }
  @media only screen and (max-width: 449px) {
    display: none;
    ${(props) =>
      props.isDirectorydetail &&
      css`
        display: block;
      `}
  }
`;

export { DetailLink };
