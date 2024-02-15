import styled, { css } from 'styled-components';
import Link from 'next/link';
import { body, border, greendark, lightgray, title } from '../../styles/color';
import { Body1, Body4, Body5 } from '../../styles/styles';

const PopularCard = styled(Link)`
  /* max-width: 306px; */
  width: 100%;
  border-radius: 4px;
  border: 1px solid ${border};
  :hover {
    border-color: ${greendark};
  }
`;
const PopularImageDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('/images/popularcardbg.svg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 160px;
  border-radius: 3px 3px 0 0;
`;
const PopularDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  ${(props) =>
    props.isLargeCard &&
    css`
      padding: 20px;
    `}
`;
const PopularTitle = styled.h3`
  margin: 0;
  ${Body4}
  color: ${title};
`;
const PopularCaption = styled.p`
  margin: 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  ${Body5};
  color: ${body};
`;

const ArticleCardSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CenterImage = styled.div`
  background-image: url('/images/popularcardicon.svg');
  background-repeat: no-repeat;
  width: 108px;
  height: 76px;
  display: flex;
  justify-content: center;
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  svg {
    width: 42px;
    height: 42px;
    path {
      stroke: #e3ffee;
    }
  }
`;

const SectionHead = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const PopularHeading = styled.h2`
  margin: 0;
  ${Body1};
  color: ${title};
`;
const PopularBody = styled.div`
  p {
    margin: 0;
    ${Body5};
    color: ${body};
  }
`;
const GuideCard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const CardSection = styled.div`
  padding: 20px;
  display: flex;
  gap: 12px;
`;

const ArticaleIcon = styled.div`
  width: 28px;
  height: 28px;
  svg {
    width: 28px;
    height: 28px;
    path {
      stroke: ${lightgray};
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
  ArticaleIcon
};
