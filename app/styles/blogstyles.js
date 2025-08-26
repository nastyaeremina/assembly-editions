import styled, { css } from 'styled-components';
import {
  Body1,
  Body3,
  Body4,
  HeaderFont,
  LinkTxt,
  MbBody1,
  MbBody3,
  MbBody4,
  MbButtonText,
  MobileH2,
  MobileH3,
  MobileH4
} from './styles';
import { button_regular, h1_regular, h3_semibold, label_semibold, tag } from './typography';

const FirstBlog = styled.div`
  background-color: var(--gray-50);
  width: 100%;
  cursor: pointer;
  padding: var(--space-152) 0 var(--space-80);
  h1 {
    ${h1_regular}
    color: var(--title);
    margin: 0;
  }
  @media only screen and (max-width: 650px) {
    padding-bottom: var(--space-32);
  }
`;
const Top = styled.div`
  object-fit: cover;
  overflow: hidden;
  border-radius: var(--radius-12);
  border: 1px solid var(--border-default);
  height: 100%;
  display: flex;
  .image {
    height: auto;
    object-fit: cover;
    max-width: 100%;
    @media only screen and (max-width: 991px) {
      width: 100%;
    }
  }
  ${(props) =>
    props.maxHeight &&
    css`
      max-height: ${props.maxHeight}px;
    `}
`;
const Text = styled.div`
  max-width: 464px;
  display: flex;
  flex-direction: column;
  gap: var(--space-12);
  h3 {
    ${h3_semibold}
    color: var(--title);
    margin: 0;
  }
  @media only screen and (max-width: 991px) {
    gap: var(--space-12);
    max-width: 100%;
  }
`;

const BlogCardDiv = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-40);
  padding-top: var(--space-40);
  position: relative;
  @media only screen and (max-width: 991px) {
    flex-direction: column;
    align-items: flex-start;
  }
  @media only screen and (max-width: 449px) {
    padding-top: var(--space-24);
    gap: var(--space-24);
  }
`;

const Textarea = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
  h3 {
    ${h3_semibold}
    color: var(--title);
    margin: 0;
    margin-top: var(--space-4);
  }
  @media only screen and (max-width: 449px) {
    gap: var(--space-8);
  }
`;

const PostDetail = styled.div`
  ${tag}
  display:flex;
  text-transform: uppercase;
  color: var(--text-secondary);
  gap: var(--space-4);
  align-items: center;
  justify-content: space-between;
  li {
    list-style-type: none;
  }
  .svg-icon {
    transform: translateX(-2px) scale(0.98);
    transition: transform 0.25s, opacity 0.25s;
    transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    opacity: 0;
  }
`;
const Par = styled.div`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  ${button_regular}
  color: var(--text-secondary);
  @media only screen and (max-width: 768px) {
    -webkit-line-clamp: 4;
  }
`;

const Last = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  p {
    ${button_regular}
    color: var(--title);
    margin: 0px;
  }
`;

const BlogListDiv = styled.div`
  padding: var(--space-80) 0 var(--space-120);
  @media only screen and (max-width: 650px) {
    padding-top: var(--space-60);
  }
`;

const IconDiv = styled.div`
  width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backlink = styled.div`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 42px;
  p {
    ${LinkTxt};
    margin: 0px;
    color: var(--medium-gray);
  }
  :hover {
    p {
      color: var(--title);
    }
    svg path {
      stroke: var(--title);
    }
  }
  @media only screen and (max-width: 769px) {
    margin-bottom: 28px;
    p {
      ${HeaderFont}
    }
  }
`;

const Table = styled.div`
  width: 100%;
  border: 1px solid var(--black);
  border-radius: 4px;
  padding: 30px 24px;
  @media only screen and (max-width: 450px) {
    padding: 20px 16px;
  }
  .active {
    color: var(--title);
  }
  ol {
    margin-top: 8px;
    margin-bottom: 0px;
    display: inline-block;
    ${Body4}
    padding-left:0px;
    list-style-position: inside;
    color: var(--primary);
    @media only screen and (max-width: 450px) {
      margin-top: 4px;
      margin-bottom: 0px;
      ${MbBody4}
    }
    li {
      margin: 12px 0 0;
      color: var(--primary);
      a {
        display: contents;
        color: var(--primary);
      }
    }
    li:hover {
      cursor: pointer;
      color: var(--title);
      a {
        color: var(--title);
      }
    }
  }
`;

const TableHeading = styled.div`
  ${Body1}
  color: var(--title);
  display: flex;
  gap: 8px;
  align-items: center;
  @media only screen and (max-width: 450px) {
    ${MbBody1}
  }
  p {
    ${Body4}
    margin:0px;
    @media only screen and (max-width: 450px) {
      ${MbButtonText}
    }
    :hover {
      cursor: pointer;
    }
  }
  span {
    color: var(--primary);
  }
`;
const Details = styled.div`
  margin: auto;
  width: 100%;
  padding-top: var(--space-152);
`;

const Content = styled.div`
  width: 100%;
  font-feature-settings: normal;
  ${Body3}
  color: var(--body);
  @media only screen and (max-width: 450px) {
    ${MbBody3}
  }
  .kg-video-player-container {
    display: none;
  }
  .kg-video-overlay {
    display: none;
  }
  blockquote {
    border-left: 4px solid var(--neutral);
    padding-left: 20px;
    margin: 20px 0;
    font-style: italic;
    @media only screen and (max-width: 449px) {
      padding-left: 16px;
    }
  }
  video {
    width: 100%;
    height: 100%;
    border-radius: 6px;
    border: 1px solid var(--black);
  }
  strong {
    font-weight: 500;
  }
  figure {
    margin: 0px;
    img {
      width: 100%;
      border-radius: 8px;
      border: 1px solid var(--blog-img-border);
      height: auto;
    }
    iframe {
      border-radius: 0.375rem;
      border: 1px solid var(--black);
      width: 100%;
      height: 496px;
      @media only screen and (max-width: 450px) {
        height: 180px;
      }
    }
  }
  figure + h2 {
    margin-top: -36px;
    @media only screen and (max-width: 450px) {
      margin-top: -50px;
    }
  }
  figure + h3 {
    margin-top: 60px;
    @media only screen and (max-width: 450px) {
      margin-top: 40px;
    }
  }
  a {
    display: inline-block;
    ${Body3}
    color: var(--primary);
    @media only screen and (max-width: 450px) {
      ${MbBody3}
    }
    :hover {
      color: var(--title);
    }
  }
  ul {
    list-style-type: disc;
    margin-left: 15px;
    li {
      margin-top: 8px;
      strong {
        font-weight: 500;
        color: var(--title);
      }
      a {
        display: inline-block;
        ${Body3}
        color: var(--primary);
        @media only screen and (max-width: 450px) {
          ${MbBody3}
        }
        :hover {
          color: var(--title);
        }
      }
    }
    li::marker {
      color: var(--body);
    }
    span {
      font-weight: 500;
      color: var(--title);
    }
  }
  h2 {
    font-size: 50px;
    line-height: 55px;
    margin-top: -12px;
    padding-top: 40px;
    margin-bottom: 8px;
    color: var(--title);
    font-weight: 400;
    strong {
      font-weight: 400;
    }
    @media only screen and (max-width: 991px) {
      ${MobileH2}
    }
    @media only screen and (max-width: 479px) {
      ${MobileH3}
    }
  }
  h2 + p {
    margin-top: 8px;
  }
  h2 + ol {
    margin-top: 8px;
  }
  h2 + figure {
    margin-top: 42px;
    @media only screen and (max-width: 450px) {
      margin-top: 22px;
    }
  }
  h3 {
    font-size: 32px;
    line-height: 105%;
    margin-bottom: 8px;
    margin-top: 2rem;
    font-weight: 400;
    color: var(--title);
    strong {
      font-weight: 400;
    }
    @media only screen and (max-width: 479px) {
      ${MobileH4}
    }
  }
  h3 + p {
    margin-top: 8px;
  }
  h3 + ol {
    margin-top: 8px;
  }
  h3 + figure {
    margin-top: 42px;
    @media only screen and (max-width: 450px) {
      margin-top: 22px;
    }
  }
  ol + figure {
    margin-top: 20px;
  }
  ul + figure {
    margin-top: 20px;
  }
  h4 {
    font-size: 24px;
    font-weight: 400;
    line-height: 31px;
    letter-spacing: 0.02em;
    color: var(--title);
    strong {
      font-weight: 400;
    }
    @media only screen and (max-width: 479px) {
      ${Body3}
    }
  }
  p {
    color: var(--body);
    margin-bottom: 1rem;
    margin-top: 1rem;
    ${Body3}
    @media only screen and (max-width: 450px) {
      font-size: 15px;
      line-height: 130%;
    }
    strong {
      font-weight: 500;
      color: var(--title);
    }
  }
  p + figure {
    margin-top: 20px;
  }
  ol {
    padding-left: 20px;
    li {
      margin-top: 8px;
      strong {
        font-weight: 500;
        color: var(--title);
      }
      a {
        display: inline-block;
        ${Body3}
        color: var(--primary);
        @media only screen and (max-width: 450px) {
          ${MbBody3}
        }
        :hover {
          color: var(--title);
        }
      }
    }
    li::marker {
      color: var(--body);
    }
    span {
      font-weight: 500;
      color: var(--title);
    }
  }
  .code-block {
    position: relative;
    margin: 12px 0 16px;
  }
  .code-block > div {
    padding: 0px;
    border-radius: 4px;
    border: 1px solid var(--neutral);
    background: var(--other-bg-color);
  }
  .code-block > div > span {
    background: var(--other-bg-color) !important;
    padding: 10px 12px;
  }
  .code-block > div > button {
    display: none;
  }
  .copy-icon {
    display: none;
    @media only screen and (max-width: 991px) {
      display: block;
    }
  }
  .code-block:hover {
    .copy-icon {
      display: block;
    }
  }
  .copy-icon {
    position: absolute;
    top: -8px;
    right: 12px;
    cursor: pointer;
  }
  pre {
    background-color: var(--other-bg-color);
    font-family: monospace;
    color: var(--body);
    padding: 15px !important;
    font-family: 'Azeret Mono', monospace !important;
    font-size: 15px !important;
    font-weight: 400;
    line-height: 20px !important;
  }
  code {
    color: var(--body);
    font-family: 'Azeret Mono', monospace !important;
  }
  p {
    :first-child {
      padding-top: 0;
      margin-top: 0;
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    :first-child {
      padding-top: 0;
      margin-top: 0;
    }
  }
`;

const ShareButton = styled.div`
  margin: 80px auto 0;
  max-width: 156px;
  width: 100%;
  text-align: center;
  @media only screen and (max-width: 450px) {
    ${MbBody4}
    max-width:122px;
    width: 100%;
  }
`;
const Icon = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--dark-green);
    border-radius: 50%;
    :hover {
      cursor: pointer;
      background-color: var(--primary);
    }
    @media only screen and (max-width: 450px) {
      width: 30px;
      height: 30px;
    }
  }
`;
const OverLayDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0.1;
`;

const MainContent = styled.div`
  .without-toc {
    max-width: 880px;
  }
`;
const BlogDetailsidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 306px;
  margin-bottom: 100px;
  height: 100%;
  position: sticky;
  top: 100px;
  @media only screen and (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 0px;
    position: relative;
    top: 0;
  }
`;
const BlogContent = styled.div`
  display: flex;
  gap: 38px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
  @media only screen and (max-width: 449px) {
    gap: 28px;
  }
`;

const HeroLeft = styled.div`
  max-width: 574px;
  width: 100%;
  a {
    display: inline;
  }
`;

const Rightcontent = styled.div`
  max-width: 880px;
  width: 100%;
`;

const BlogCardsDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 65px 1fr;
  row-gap: var(--space-64);
  padding-top: var(--space-40);
  @media only screen and (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
    row-gap: var(--space-40);
  }
`;

const LoadMoreButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: var(--space-80) auto 0;
  @media only screen and (max-width: 650px) {
    margin: var(--space-40) auto 0;
  }
`;

const ListDiv = styled.div`
  padding-bottom: var(--space-120);
`;

const Divider = styled.div`
  width: 1px;
  height: 100%;
  background-color: var(--border-default);
  margin: 0 var(--space-32);
`;

export {
  FirstBlog,
  Top,
  Text,
  Textarea,
  PostDetail,
  Par,
  Last,
  Backlink,
  Table,
  TableHeading,
  Details,
  Content,
  ShareButton,
  Icon,
  OverLayDiv,
  MainContent,
  BlogDetailsidebar,
  BlogContent,
  HeroLeft,
  Rightcontent,
  BlogCardDiv,
  IconDiv,
  BlogListDiv,
  BlogCardsDiv,
  LoadMoreButton,
  ListDiv,
  Divider
};
