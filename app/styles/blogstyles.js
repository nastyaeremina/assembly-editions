import styled from 'styled-components';
import {
  Body1,
  Body3,
  Body4,
  Body5,
  FooterText,
  HeaderFont,
  Heading2,
  Heading3,
  Heading4,
  LinkTxt,
  MbBody1,
  MbBody3,
  MbBody4,
  MbBody5,
  MbButtonText,
  MobileH2,
  MobileH3,
  MobileH4
} from './styles';

const FirstBlog = styled.div`
  border: 1px solid var(--dark-purple);
  border-radius: 4px;
  max-width: 882px;
  width: 100%;
  margin: auto;
  margin-bottom: 28px;
  cursor: pointer;
  .image {
    height: 354px;
    object-fit: cover;
    max-width: 100%;
    border-radius: 3px 3px 0px 0px;
    @media only screen and (max-width: 749px) {
      height: 248px;
      object-fit: cover;
    }
  }
  @media only screen and (max-width: 749px) {
    margin: 0px auto 28px;
  }
  :hover {
    h2 {
      color: var(--title);
    }
    .image {
      transform: scale(1.1);
      transition: transform 0.2s;
    }
  }
`;
const Top = styled.div`
  object-fit: cover;
  height: 354px;
  overflow: hidden;
  border-radius: 3px 3px 0px 0px;
  @media only screen and (max-width: 749px) {
    height: 248px;
  }
`;
const Text = styled.div`
  margin: 20px 25px;
  @media only screen and (max-width: 749px) {
    margin: 20px 16px;
  }
  h2 {
    ${Body4}
    color: var(--primary);
    margin-bottom: 4px;
    margin-top: 0px;
    @media only screen and (max-width: 749px) {
      ${MbBody4}
    }
  }
`;
const Textarea = styled.div`
  margin: 20px 25px;
  margin-bottom: 0px;
  @media only screen and (max-width: 749px) {
    margin: 20px 16px;
    margin-bottom: 0px;
  }
  h2 {
    ${Body4}
    color: var(--primary);
    margin-bottom: 4px;
    margin-top: 0px;
    @media only screen and (max-width: 749px) {
      ${MbBody4}
    }
  }
`;

const PostDetail = styled.div`
  ${FooterText}
  display:flex;
  color: var(--medium-gray);
  gap: 8px;
  align-items: center;
  li {
    list-style-type: none;
  }
`;
const Par = styled.div`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  ${Body5}
  margin-top:16px;
  color: var(--body);
  @media only screen and (max-width: 749px) {
    ${MbBody5}
    margin-top:8px;
  }
`;

const Last = styled.div`
  border-top: 1px solid var(--dark-purple);
  border-radius: 0px 0px 4px 4px;
  background-color: var(--light-green);
  padding: 8px 25px;
  @media only screen and (max-width: 749px) {
    padding: 8px 16px;
  }
  p {
    ${MbButtonText}
    margin:0px;
  }
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
      a {
        display: contents;
        color: var(--primary);
        :hover {
          color: var(--title);
        }
      }
    }
    li:hover {
      cursor: pointer;
      color: var(--title);
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
    margin-top: -4rem;
    padding-top: 6rem;
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

const Textcontent = styled.div`
  ${Body4}
  color: var(--body);
  @media only screen and (max-width: 450px) {
    ${MbBody4}
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

const Leftsec = styled.div`
  margin: 72px 40px auto 40px;
  text-align: center;
  h1 {
    ${Heading4}
    margin-top:0px;
    margin-bottom: 12px;
    color: var(--black);
    @media only screen and (max-width: 450px) {
      ${MobileH4}
    }
  }
  p {
    ${Body5}
    margin-bottom:40px;
    margin-top: 30px;
    color: var(--body);
    @media only screen and (max-width: 450px) {
      margin-bottom: 0px;
      ${Body5}
    }
  }
  @media only screen and (max-width: 768px) {
    margin: 40px 24px;
  }
`;

const MainContent = styled.div`
  padding-top: 120px;
  .without-toc {
    max-width: 880px;
  }
  @media only screen and (max-width: 768px) {
    padding-top: 115px;
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
  Textcontent,
  ShareButton,
  Icon,
  Leftsec,
  OverLayDiv,
  MainContent,
  BlogDetailsidebar,
  BlogContent,
  HeroLeft,
  Rightcontent
};
