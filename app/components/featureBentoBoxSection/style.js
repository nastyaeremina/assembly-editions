import styled, { css } from 'styled-components';
import { body_regular, h2_semibold, h4_regular } from '../../styles/typography';
import Link from 'next/link';

const MainSection = styled.div`
  padding: var(--space-64) 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-80);
  @media only screen and (max-width: 991px) {
    padding: var(--space-40) 0;
  }
  @media only screen and (max-width: 449px) {
    padding: var(--space-48) 0;
  }
`;

const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-32);
  max-width: 600px;
  @media only screen and (max-width: 991px) {
    max-width: unset;
  }
`;

const Title = styled.h2`
  ${h2_semibold}
  color: var(--title);
  margin: 0;
`;

const Description = styled.p`
  margin: 0;
  ${body_regular}
  color: var(--title);
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-8);
`;

const GridSection = styled.div`
  display: grid;
  gap: var(--space-12);
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const HoverArrowIcon = styled.div`
  position: absolute;
  right: var(--space-20);
  top: 29px;
  opacity: 0;
  transition: opacity 0.3s ease;
  @media only screen and (max-width: 991px) {
    opacity: 1;
    position: relative;
    top: unset;
    right: unset;
    display: flex;
    justify-content: end;
  }
`;

const FeatureBentoBoxContainer = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: var(--space-16);
  padding: var(--space-24) var(--space-20);
  border-radius: var(--space-16);
  border: 1px solid var(--border-default);
  transition: box-shadow 0.3s ease, border 0.3s ease;
  @media only screen and (min-width: 999px) {
    ${(props) =>
      props.columnSpan &&
      css`
        grid-column: span ${props.columnSpan};
      `}
  }
  @media only screen and (min-width: 991px) {
    &:hover {
      box-shadow: 0px 10px 10px -4px #00000014;
      border: 1px solid var(--border-hover);
      ${HoverArrowIcon} {
        opacity: 1;
      }
    }
  }
  @media only screen and (max-width: 991px) {
    :active {
      box-shadow: 0px 10px 10px -4px #00000014;
      border: 1px solid var(--border-hover);
    }
  }
`;

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-16);
`;

const IconWrapper = styled.div`
  display: flex;
`;

const CardTitle = styled.h4`
  ${h4_regular}
  color: var(--title);
  margin: 0;
`;

const CardDescription = styled.p`
  ${body_regular}
  color: var(--title);
  margin: 0;
`;

const ImageWrapper = styled.div`
  display: flex;
  position: relative;
  border-radius: var(--space-8);
  overflow: hidden;
  .image {
    width: 100%;
    object-fit: cover;
    object-position: left;
  }
`;

export {
  MainSection,
  HeaderSection,
  Title,
  Description,
  ButtonGroup,
  GridSection,
  FeatureBentoBoxContainer,
  CardDescription,
  CardTitle,
  ImageWrapper,
  IconWrapper,
  ContentDiv,
  HoverArrowIcon
};
