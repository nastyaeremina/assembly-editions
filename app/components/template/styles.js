import styled, { css } from 'styled-components';
import Link from 'next/link';
import { Body4, Body5, Heading4, Heading5, MbBody4, MbBody5 } from '../../styles/styles';

const PopularCard = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  :hover {
    .image-div {
      border: 1px solid var(--dark-green);
    }
  }
  @media only screen and (max-width: 449px) {
    gap: 12px;
  }
`;
const ImageDiv = styled.div`
  max-width: 388px;
  max-height: 220px;
  border-radius: 4px;
  border: 1px solid var(--border);
  transition: all 0.3s;
  img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }
  ${(props) =>
    props.isBigCard &&
    css`
      max-width: 597px;
      max-height: 338px;
    `}
`;
const CardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media only screen and (max-width: 449px) {
    gap: 4px;
  }
`;
const Title = styled.h4`
  ${Body4};
  color: var(--title);
  margin: 0;
  ${(props) =>
    props.isBigCard &&
    css`
      ${Heading5};
      font-weight: 400;
    `}
  @media only screen and (max-width: 449px) {
    ${MbBody4};
  }
`;
const Description = styled.p`
  ${Body5};
  color: var(--body);
  margin: 0;
  ${(props) =>
    props.isBigCard &&
    css`
      ${Body4};
      font-weight: 400;
    `}
  @media only screen and (max-width: 449px) {
    ${MbBody5}
  }
`;

const TemplateItemList = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(285px, 1fr));
  padding-bottom: 100px;
  ${(props) =>
    props.isBigCard &&
    css`
      grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    `}
  @media only screen and (max-width: 991px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    ${(props) =>
      props.isBigCard &&
      css`
        grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
      `}
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
    ${(props) =>
      props.isBigCard &&
      css`
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      `}
  }
  @media only screen and (max-width: 749px) {
    gap: 24px;
    padding-bottom: 40px;
  }
`;

const SectionHeading = styled.h3`
  ${Heading4};
  color: var(--title);
  margin: 0 0 30px;
  @media only screen and (max-width: 449px) {
    margin: 0 0 28px;
  }
`;

const CardSection = styled.div`
  @media only screen and (max-width: 749px) {
    ${(props) =>
      props.isLastSpacing &&
      css`
        padding-bottom: 40px;
      `}
  }
`;
export { PopularCard, ImageDiv, CardText, Title, Description, TemplateItemList, SectionHeading, CardSection };
