import styled, { css } from 'styled-components';
import Link from 'next/link';
import { Body5, HeaderFont, Heading5 } from '../../styles/styles';
import { body, greendark, primary, title } from '../../styles/color';

const BlockCard = styled(Link)`
  min-width: 500px;
  padding: 20px;
  display: flex;
  gap: 20px;
  border: 1px solid ${greendark};
  border-radius: 5px;
  transition: all 0.3s;
  :hover {
    box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.1);
    transition: all 0.3s;
  }
  @media only screen and (max-width: 449px) {
    min-width: calc(100vw - 50px);
    margin: 0 25px;
    padding: 20px;
    flex-direction: column;
  }
`;

const BLockImage = styled.div`
  overflow: hidden;
  width: 100%;
  max-width: 180px;
  height: 180px;
  border-radius: 4px;
  img {
    border-radius: 4px;
    min-width: 180px;
    height: 180px;
  }
  @media only screen and (max-width: 449px) {
    overflow: unset;
    width: 100%;
    max-width: 400px;
    height: calc(100vw - 92px);
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const BlockDescriptionTop = styled.div`
  h2 {
    ${Heading5};
    color: ${title};
    margin: 0 0 12px;
    font-weight: 400;
  }
  p {
    ${Body5};
    color: ${body};
    margin: 0;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    white-space: inherit;
    ${(props) =>
      props.maxLine &&
      css`
        -webkit-line-clamp: ${props.maxLine};
      `}
  }
  @media only screen and (max-width: 449px) {
    h2 {
      font-size: 20px;
      line-height: 26px;
    }
    p {
      -webkit-line-clamp: 5;
    }
  }
`;
const BlockDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  gap: 4px;
  @media only screen and (max-width: 449px) {
    gap: 12px;
    height: 100%;
  }
`;

const MainBlock = styled.div`
  transition: transform 500ms ease;
  display: flex;
  gap: 28px;
  width: 1272px;
  margin: 0 auto;
  overflow: visible;
  ::-webkit-scrollbar {
    display: none;
  }
  padding: 0 24px;
  @media only screen and (max-width: 449px) {
    padding: 0;
  }
`;

const Last = styled.div`
  display: flex;
  align-items: center;
`;
const LinkDiv = styled.div``;
const LastDroplist = styled.div`
  .learn-link,
  .learn-link svg path {
    transition: all 300ms ease;
  }
  .learn-link {
    ${HeaderFont};
    color: ${primary};
    margin: 0;
    display: inline-flex;
    gap: 4px;
    align-items: center;
    cursor: pointer;
    transition: none;
    :hover .HoverArrow__linePath {
      opacity: 1;
      fill: none;
      fill: black;
    }
    @media only screen and (max-width: 991px) {
      width: 100%;
    }
    :hover .HoverArrow__tipPath {
      transform: translateX(2px);
    }
  }

  .learn-link:hover {
    color: black;
    transition: all 300ms ease;
  }
  .learn-link svg path {
    transition: all 300ms ease;
  }
  .HoverArrow__linePath {
    opacity: 0;
    fill: none;
  }
  .HoverArrow {
    stroke-width: 2px;
    fill: none;
    stroke: currentColor;
    position: relative;
    margin-left: var(--arrowSpacing);
    stroke-width: 2px;
    fill: none;
    stroke: currentColor;
    margin-left: 8px;
    --arrowSpacing: 5px;
    --arrowHoverTransition: 150ms cubic-bezier(0.215, 0.61, 0.355, 1);
    --arrowHoverOffset: translateX(3px);
  }
`;
export { BlockCard, BLockImage, BlockDescriptionTop, BlockDescription, MainBlock, LastDroplist, Last, LinkDiv };
