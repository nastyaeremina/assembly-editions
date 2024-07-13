import styled, { css } from 'styled-components';
import { Body4, HeaderFont, Heading2, Heading3, LinkTxt, MbBody4, MobileH2 } from '../../styles/styles';
import { black, lightgray, title } from '../../styles/color';

const Backlink = styled.div`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 28px;
  p {
    ${LinkTxt};
    margin: 0px;
    color: ${lightgray};
  }
  :hover {
    p {
      color: ${title};
    }
    svg path {
      stroke: ${title};
    }
  }
  ${(props) =>
    props.isNewHero &&
    css`
      margin-bottom: 42px;
    `}
  @media only screen and (max-width: 769px) {
    margin-bottom: 28px;
    p {
      ${HeaderFont}
    }
  }
`;

const DetailHero = styled.div`
  margin: 0px 0 40px;
  h1 {
    ${Heading2};
    color: ${title};
    margin: 0;
    @media only screen and (max-width: 769px) {
      ${MobileH2}
    }
  }
  a {
    display: inline;
  }
  ${(props) =>
    props.isNewHero &&
    css`
      display: flex;
      gap: 38px;
      padding: 0px 0 100px;
      max-width: 100%;
      margin: 0;
      h1 {
        ${Heading3};
      }
      @media only screen and (max-width: 768px) {
        h1 {
          ${MobileH2}
        }
        padding-bottom: 28px;
        flex-direction: column;
        gap: 28px;
      }
    `}
  @media only screen and (max-width: 768px) {
    margin: 0;
    padding-bottom: 28px;
  }
`;

const BlogImage = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  .image {
    height: auto;
    max-width: 100%;
    object-fit: cover;
    border-radius: 8px;
    border: 1px solid ${black};
    @media only screen and (max-width: 768px) {
      width: 100%;
    }
  }
`;
const BlogTime = styled.div`
  ${Body4}
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 40px;
  color: ${lightgray};
  @media only screen and (max-width: 768px) {
    margin-bottom: 12px;
  }
  @media only screen and (max-width: 449px) {
    ${MbBody4}
    margin-top:16px;
  }
  ${(props) =>
    props.isNewHero &&
    css`
      justify-content: unset;
      @media only screen and (max-width: 768px) {
        margin-bottom: 0px;
      }
      @media only screen and (max-width: 449px) {
        margin-top: 20px;
      }
    `}
  span:hover {
    color: ${title};
    cursor: pointer;
  }
`;
const Post = styled.div`
  ${Body4}
  display:flex;
  color: ${lightgray};
  gap: 8px;
  align-items: center;
  @media only screen and (max-width: 450px) {
    ${MbBody4}
  }
  li {
    list-style-type: none;
  }
`;

const HeroLeft = styled.div`
  max-width: 574px;
  width: 100%;
  a {
    display: inline;
  }
`;

const Image = styled.img``;
export { Backlink, DetailHero, BlogImage, BlogTime, Post, HeroLeft, Image };
