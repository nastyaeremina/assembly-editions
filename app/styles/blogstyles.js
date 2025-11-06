import styled, { css } from 'styled-components';
import { button_regular, h1_regular, h3_semibold, tag, label_regular, h2_semibold } from './typography';

const FirstBlog = styled.div`
  width: 100%;
  padding: var(--space-64) 0;
  h1 {
    ${h1_regular}
    color: var(--title);
    margin: 0;
  }
  @media only screen and (max-width: 991px) {
    padding: var(--space-48) 0;
  }
  @media only screen and (max-width: 650px) {
    padding: var(--space-48) 0 var(--space-40);
  }
`;
const Top = styled.div`
  object-fit: cover;
  overflow: hidden;
  border-radius: var(--radius-12);
  border: 1px solid var(--border-secondary);
  height: 100%;
  display: flex;
  .image {
    height: auto;
    object-fit: cover;
    width: 100%;
    aspect-ratio: 720 / 405;
  }
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
  padding-top: var(--space-48);
  position: relative;
  a {
    display: flex;
    align-items: center;
    gap: var(--space-40);
  }
  @media only screen and (max-width: 991px) {
    padding-top: var(--space-40);
    a {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  @media only screen and (max-width: 449px) {
    padding-top: var(--space-32);
    a {
      gap: var(--space-24);
    }
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
  padding: var(--space-80) 0 var(--space-128);
  @media only screen and (max-width: 991px) {
    padding: var(--space-48) 0 var(--space-96);
  }
  @media only screen and (max-width: 650px) {
    padding: var(--space-32) 0 var(--space-72);
  }
`;

const IconDiv = styled.div`
  width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Table = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--space-20);
  margin-bottom: var(--space-16);

  .active {
    color: var(--title);
    ${button_regular}
  }
  ol {
    display: flex;
    flex-direction: column;
    gap: var(--space-20);
    padding-left: 0px;
    list-style-type: none;
    margin-top: 0;
    margin-bottom: 0;
    position: relative;
    li {
      color: var(--text-secondary);
      ${button_regular}
      padding-left: var(--space-14);
      a {
        color: var(--text-secondary);
        ${button_regular}
        transition: color 0.3s ease-in-out;
        :focus-visible {
          border-radius: var(--radius-8);
        }
      }
    }
    li.level-4 {
      padding-left: var(--space-30);
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
  ${tag}
  color: var(--text-secondary);
  text-transform: uppercase;
`;
const Details = styled.div`
  margin: auto;
  width: 100%;
  padding-top: var(--space-64);
  @media only screen and (max-width: 991px) {
    padding-top: var(--space-48);
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
  margin-bottom: var(--space-64);
  @media only screen and (max-width: 991px) {
    margin-bottom: var(--space-48);
  }
  @media only screen and (max-width: 650px) {
    margin-bottom: var(--space-32);
  }
  .without-toc {
    max-width: 1224px;
  }
`;
const BlogDetailsidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-24);
  max-width: 376px;
  width: 100%;
  height: fit-content;
  position: sticky;
  top: ${(props) => props.stickyTop}px;
  overflow-y: visible;
  overflow-x: hidden;
  overscroll-behavior: contain;
  align-self: flex-start;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;
  height: fit-content;
  transition: max-height 0.6s ease;
  padding-top: var(--space-40);
  margin-top: -40px;
  &::-webkit-scrollbar {
    display: none;
  }
  &.sticky-active {
    overflow-y: auto;
    ${(props) => `max-height: calc(100dvh - ${props.stickyTop}px);`}
    padding-bottom: var(--space-24);
  }
  &.sticky-end {
    overflow-y: visible;
    max-height: ${(props) => props.maxHeight};
  }
  @media only screen and (max-width: 991px) {
    display: none;
  }
`;
const BlogContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--space-120);
  width: 100%;
  margin: 0 auto;
  margin-bottom: var(--space-128);
  &.without-toc {
    max-width: 728px;
    gap: var(--space-38);
  }
  @media only screen and (max-width: 991px) {
    margin-bottom: var(--space-96);
    flex-direction: column;
  }
  @media only screen and (max-width: 449px) {
    gap: var(--space-24);
    margin-bottom: var(--space-72);
  }
`;

const Rightcontent = styled.div`
  max-width: 728px;
  width: 100%;
  /* added for tab */
  @media only screen and (max-width: 1269px) {
    overflow: hidden;
  }
  @media only screen and (max-width: 991px) {
    overflow: unset;
    max-width: 100%;
  }
`;

const Post = styled.div`
  ${button_regular}
  display:flex;
  color: var(--text-secondary);
  gap: var(--space-10);
  align-items: center;
  justify-content: center;
  cursor: pointer;
  span {
    ${button_regular};
    color: var(--text-secondary);
    transition: color 0.3s ease;
    &:hover {
      color: var(--title);
    }
  }
  a {
    ${button_regular};
    color: var(--text-secondary);
    transition: color 0.3s ease;
    &:hover {
      color: var(--title);
    }
    :focus-visible {
      outline: 1px solid var(--link-default);
      border-radius: var(--radius-8);
    }
  }
`;

const BlogTime = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-32);
  padding-top: var(--space-24);
  border-top: 1px solid var(--border-default);
  margin-top: var(--space-64);
  flex-wrap: wrap;
  span {
    ${button_regular};
    color: var(--text-secondary);
    cursor: pointer;
    &:hover {
      color: var(--title);
    }
  }
  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    padding: 0;
    span {
      ${button_regular};
      color: var(--text-secondary);
      &:hover {
        color: var(--title);
      }
    }
    :focus-visible {
      outline: 1px solid var(--link-default);
      border-radius: var(--radius-8);
    }
  }
  @media only screen and (max-width: 449px) {
    margin-top: var(--space-40);
  }
`;

const ActiveBorder = styled.div`
  position: absolute;
  left: -2px;
  width: 2px;
  height: 30px;
  background-color: var(--title);
  transition: top 0.3s ease-in-out, height 0.3s ease-in-out;
  border-radius: var(--radius-12);
`;

const TOCDivider = styled.div`
  min-width: 2px;
  width: 2px;
  background-color: var(--border-primary);
  border-radius: var(--radius-12);
`;
const TableContentWrapper = styled.div`
  display: flex;
`;
const BlogCardsDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 200px 1fr;
  row-gap: var(--space-64);
  padding-top: var(--space-40);
  &.author-page {
    grid-template-columns: 1fr 64px 1fr 64px 1fr;
    @media only screen and (max-width: 991px) {
      grid-template-columns: 1fr 64px 1fr;
    }
    @media only screen and (max-width: 650px) {
      grid-template-columns: repeat(1, 1fr);
      row-gap: var(--space-40);
    }
  }
  @media only screen and (max-width: 991px) {
    grid-template-columns: 1fr 64px 1fr;
  }
  @media only screen and (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
    row-gap: var(--space-40);
  }
`;

const LoadMoreButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: var(--space-64) auto 0;
  @media only screen and (max-width: 991px) {
    margin: var(--space-48) auto 0;
  }
  @media only screen and (max-width: 650px) {
    margin: var(--space-40) auto 0;
    width: 100%;
  }
`;

const AuthorMainHeroSection = styled.div`
  padding: var(--space-64) 0;
  @media only screen and (max-width: 991px) {
    padding: var(--space-48) 0;
  }
  @media only screen and (max-width: 449px) {
    padding: var(--space-48) 0 var(--space-40);
  }
`;

const InnerHeroSection = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-40);
  padding-top: var(--space-24);
  .author-image {
    border-radius: var(--radius-12);
    border: 1px solid var(--border-secondary);
    @media only screen and (max-width: 449px) {
      width: 95px;
      height: 95px;
    }
  }
  @media only screen and (max-width: 449px) {
    gap: var(--space-16);
  }
`;

const DetailsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-12);
  @media only screen and (max-width: 449px) {
    gap: var(--space-8);
  }
`;

const Title = styled.h3`
  ${h3_semibold}
  color: var(--title);
  margin: 0;
`;

const Designation = styled.p`
  ${button_regular}
  color: var(--text-secondary);
  margin: 0;
`;

const SocialMediaDiv = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-24);
  margin-top: var(--space-8);
  a {
    :focus-visible {
      outline: 2px solid var(--link-default);
      border-radius: var(--radius-8);
    }
  }
  svg {
    path {
      transition: 0.3s;
      fill: var(--text-secondary);
    }
    :hover {
      path {
        fill: var(--title);
      }
    }
  }
`;

const ListDiv = styled.div`
  padding: var(--space-128) 0;
  @media only screen and (max-width: 991px) {
    padding: var(--space-96) 0;
  }
  @media only screen and (max-width: 650px) {
    padding: var(--space-72) 0;
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 100%;
  background-color: var(--border-default);
  margin: 0 var(--space-100);
  ${(props) =>
    props.isAuthorPage &&
    css`
      margin: 0 var(--space-32);
    `}
  @media only screen and (max-width: 991px) {
    margin: 0 var(--space-32);
  }
  @media only screen and (max-width: 650px) {
    display: none;
  }
`;

const AuthorTitle = styled.h1`
  ${h2_semibold}
  color: var(--title);
  margin: 0;
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

const Backlink = styled.div`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 42px;
  p {
    ${label_regular};
    margin: 0px;
    color: var(--text-secondary);
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
  }
`;

const CopyIcon = styled.span`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--off-white-550);
  border-radius: var(--radius-8);
  cursor: pointer;
`;

const InputWrap = styled.button`
  max-width: 285px;
  width: 100%;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0 var(--space-12);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-30);
  height: 40px;
  :hover {
    border: 1px solid var(--border-hover);
  }
  .desktop-search-icon {
    display: flex;
  }
  @media only screen and (max-width: 449px) {
    max-width: unset;
  }
`;

const InputText = styled.div`
  ${button_regular};
  color: var(--gray-200);
  letter-spacing: 0.01em;
  width: 100%;
  outline: 0;
  padding-left: var(--space-8);
  padding-top: var(--space-2);
  text-align: left;
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-16);
  flex-wrap: wrap;
  justify-content: space-between;
  @media only screen and (max-width: 449px) {
    flex-direction: column-reverse;
    align-items: flex-start;
    gap: var(--space-24);
  }
`;

const ArticleText = styled.div`
  ${tag}
  color: var(--text-secondary);
  text-transform: uppercase;
  padding: var(--space-16) var(--space-12) var(--space-4);
  margin-bottom: var(--space-4);
  position: sticky;
  top: 0;
  background-color: var(--off-white-200);
  z-index: 1;
`;

export {
  FirstBlog,
  Top,
  Text,
  PostDetail,
  Par,
  Last,
  Table,
  TableHeading,
  Details,
  OverLayDiv,
  MainContent,
  BlogDetailsidebar,
  BlogContent,
  Rightcontent,
  Post,
  BlogTime,
  ActiveBorder,
  TOCDivider,
  TableContentWrapper,
  BlogCardDiv,
  IconDiv,
  BlogListDiv,
  BlogCardsDiv,
  LoadMoreButton,
  AuthorMainHeroSection,
  InnerHeroSection,
  DetailsSection,
  Title,
  Designation,
  SocialMediaDiv,
  ListDiv,
  Divider,
  AuthorTitle,
  Textarea,
  Backlink,
  CopyIcon,
  InputWrap,
  InputText,
  SearchWrapper,
  ArticleText
};
