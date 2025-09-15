import styled, { css } from 'styled-components';
import Link from 'next/link';
import { body_regular, body_semibold, button_regular, h4_semibold } from '../../styles/typography';

const PopularCard = styled(Link)`
  width: 100%;
  overflow: hidden;
  :hover {
    ${(props) =>
      props.isLargeCard &&
      css`
        .svg-icon {
          transform: none;
          opacity: 1;
        }
      `}
  }
  @media only screen and (max-width: 449px) {
    border: 1px solid var(--border-default);
    border-radius: var(--radius-12);
  }
`;

const TitleSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PopularImageDiv = styled.div`
  padding: var(--space-20);
  background-color: var(--gray-50);
  height: 152px;
  border-radius: var(--radius-12);
  @media only screen and (max-width: 449px) {
    border-bottom: 1px solid var(--border-default);
    border-radius: 0;
    height: unset;
  }
`;
const PopularDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  ${(props) =>
    props.isLargeCard &&
    css`
      padding-top: var(--space-20);
      .svg-icon {
        transform: translateX(-2px) scale(0.98);
        transition: transform 0.25s, opacity 0.25s;
        transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        opacity: 0;
      }
      @media only screen and (max-width: 449px) {
        padding: var(--space-20);
      }
    `}
  .svg-icon {
    opacity: 0;
  }
`;
const PopularTitle = styled.p`
  margin: 0;
  ${body_semibold}
  color: var(--title);
`;
const PopularCaption = styled.p`
  margin: 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  ${button_regular};
  color: var(--text-secondary);
`;

const ArticleCardSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-40);
`;

const CenterImage = styled.div`
  display: flex;
  svg {
    width: 28px;
    height: 28px;
    path {
      fill: var(--text-secondary);
    }
  }
  @media only screen and (max-width: 449px) {
    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

const SectionHead = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
`;
const PopularHeading = styled.h4`
  margin: 0;
  ${h4_semibold};
  color: var(--title);
`;
const PopularBody = styled.div`
  p {
    margin: 0;
    ${body_regular};
    color: var(--text-secondary);
  }
`;
const GuideCard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: var(--space-24);
`;

const CardSection = styled.div`
  padding: var(--space-20);
  display: flex;
  flex-direction: column;
  gap: var(--space-20);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-12);
  height: 100%;
  transition: background 0.3s ease;
  :hover {
    background-color: var(--bg-primary-hover);
  }
  @media only screen and (max-width: 449px) {
    border: unset;
  }
`;

const ArticaleIcon = styled.div`
  width: 28px;
  height: 28px;
  svg {
    width: 28px;
    height: 28px;
    path {
      fill: var(--text-secondary);
    }
  }
  @media only screen and (max-width: 449px) {
    width: 24px;
    height: 24px;
    svg {
      width: 24px;
      height: 24px;
    }
  }
`;
export {
  PopularCard,
  PopularImageDiv,
  PopularDetail,
  PopularTitle,
  PopularCaption,
  ArticleCardSection,
  CenterImage,
  SectionHead,
  PopularHeading,
  PopularBody,
  GuideCard,
  CardSection,
  ArticaleIcon,
  TitleSection
};
