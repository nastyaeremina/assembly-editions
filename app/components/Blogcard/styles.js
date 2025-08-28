import styled from 'styled-components';
import { button_regular } from '../../styles/typography';

const BlogDetail = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  cursor: pointer;
  position: relative;
  gap: var(--space-24);
  border-radius: var(--radius-12);
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
  border: 1px solid var(--border-default);
  overflow: hidden;
  width: 100%;
  border-radius: var(--radius-12);
  .image {
    object-fit: cover;
    height: 326px;
    max-height: 326px;
    width: 100%;
    @media only screen and (max-width: 768px) {
      height: 184px;
    }
  }
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

export { BlogDetail, Leftside, Bottom, DetailLeftDiv };
