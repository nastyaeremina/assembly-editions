import styled, { css } from 'styled-components';
import { Body1, Body4, HeaderFont, LinkTxt, MbPrimaryBtn } from '../../styles/styles';

const Extention = styled.a`
  display: flex;
  flex-direction: row;
  border: 1px solid #00160e;
  border-radius: 4px;
  @media only screen and (max-width: 449px) {
    flex-direction: column;
  }
  .logo {
    width: 140px;
    /* height: 140px; */
    @media only screen and (max-width: 449px) {
      /* height: 110px; */
      /* width: 240px; */
    }
  }
  ${(props) =>
    props.isCard &&
    css`
      width: 50%;
      @media only screen and (max-width: 768px) {
        width: 100%;
      }
    `}
  cursor: pointer;
  .learn-link,
  .learn-link svg path {
    transition: all 300ms ease;
  }
  a {
    ${LinkTxt};
    margin: 0;
    color: ${({ theme }) => theme.colors.title};
    cursor: pointer;
    transition: none;
    @media only screen and (max-width: 449px) {
      ${HeaderFont}
    }
  }
  :hover .HoverArrow__linePath {
    opacity: 1;
    fill: none;
    fill: black;
  }
  :hover .HoverArrow__tipPath {
    transform: translateX(2px);
  }
  .learn-link:hover {
    color: black;
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
const Logo = styled.div`
  display: flex;
  align-items: center;
  padding: 35px;
  border-right: 1px solid #00160e;
  @media only screen and (max-width: 449px) {
    border-bottom: 1px solid #00160e;
    border-right: none;
    display: flex;
    justify-content: center;
    height: 180px;
  }
`;
const RightDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 28px 40px;
  gap: 36px;
  @media only screen and (max-width: 449px) {
    padding: 20px 28px;
    gap: 20px;
  }
`;
const Par = styled.div`
  ${Body1}
  color: ${({ theme }) => theme.colors.greendark};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  white-space: inherit;
  @media only screen and (max-width: 449px) {
    ${Body4}
  }
`;
const Cardlink = styled.div`
  display: flex;
  align-items: center;
`;
export { Extention, Logo, RightDesc, Par, Cardlink };
