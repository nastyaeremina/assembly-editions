import Link from 'next/link';
import styled from 'styled-components';
import {
  Body1,
  Body3,
  Body4,
  Body5,
  ButtonText,
  HeaderFont,
  Heading3,
  Heading4,
  Limarker,
  MbBody3,
  MbBody5,
  MbPrimaryBtn,
  MobileH3,
  MobileH4
} from './styles';
import ReactDOMServer from 'react-dom/server';

const UpadtePage = styled.div`
  padding-top: 180px;
  padding-bottom: 100px;
  @media only screen and (max-width: 768px) {
    padding-top: 100px;
    padding-bottom: 40px;
  }
`;

const UpdateSubscribe = styled.div`
  margin-bottom: 40px;
  h1 {
    ${Heading3}
    color: var(--title);
    margin: 0px;
  }
  p {
    ${Body3}
    color: var(--body);
    margin-top: 16px;
    margin-bottom: 28px;
    @media only screen and (max-width: 768px) {
      ${MbBody3}
    }
  }
`;

const UpdateDes = styled.div`
  border-top: 1px solid var(--black);
  svg {
    position: absolute;
  }
`;
const Detail = styled.div`
  display: flex;
  margin: 28px 0 100px;
  justify-content: space-between;
  &.last-item {
    margin-bottom: 60px;
  }
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin: 12px 0 40px;
    &.last-item {
      margin-bottom: 32px;
    }
  }
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const DetailSlug = styled.div`
  display: flex;
  margin-top: 28px;
  margin-bottom: 100px;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-top: 12px;
  }
`;

const UpdateDate = styled(Link)`
  position: sticky;
  top: 150px;
  height: 40px;
  ${ButtonText}
  max-width:200px;
  width: 100%;
  color: var(--title);
  :hover {
    color: var(--primary);
  }
  @media only screen and (max-width: 768px) {
    ${MbPrimaryBtn}
    margin-bottom:20px;
    height: unset;
    position: relative;
    top: 0;
  }
`;
const UpdateDetail = styled.div`
  max-width: 917px;
  width: 100%;
  ${Body4}
  *:last-child {
    margin-bottom: 0 !important;
  }
  .kg-video-player-container {
    display: none;
  }
  .kg-video-overlay {
    display: none;
  }
  video {
    width: 100%;
    height: 100%;
    border-radius: 6px;
    border: 1px solid var(--black);
  }
  code {
    padding: 2px 6px;
    background-color: var(--neutral);
    border-radius: 4px;
    ${MbBody5}
  }
  p + h3 {
    margin-top: 40px;
    @media only screen and (max-width: 768px) {
      margin-top: 20px;
    }
  }
  p + figure {
    margin-bottom: 40px;
    @media only screen and (max-width: 768px) {
      margin-bottom: 20px;
    }
  }
  ol + figure {
    margin-bottom: 40px;
    @media only screen and (max-width: 768px) {
      margin-bottom: 20px;
    }
  }
  ul + figure {
    margin-bottom: 40px;
    @media only screen and (max-width: 768px) {
      margin-bottom: 20px;
    }
  }
  ol + h3 {
    margin-top: 40px;
    @media only screen and (max-width: 768px) {
      margin-top: 20px;
    }
  }
  ul + h3 {
    margin-top: 40px;
    @media only screen and (max-width: 768px) {
      margin-top: 20px;
    }
  }
  figure {
    margin: 0 0 40px 0;
    object-fit: cover;
    img {
      border-radius: 0.375rem;
      border: 1px solid black;
      width: 100%;
      height: auto;
    }
    iframe {
      border-radius: 0.375rem;
      border: 1px solid black;
      width: 100%;
      height: 496px;
      @media only screen and (max-width: 768px) {
        height: 180px;
      }
    }
  }
  em {
    font-style: italic;
  }
  strong {
    font-weight: 600;
  }
  a {
    display: inline-block;
    color: var(--primary);
    :hover {
      color: var(--title);
    }
  }
  h2 {
    margin: 0px;
    ${Heading4}
    color : var(--title);
    margin-bottom: 16px;
    @media only screen and (max-width: 768px) {
      ${MobileH3}
      margin-bottom: 20px;
    }
  }
  h3 {
    ${Body1}
    margin-bottom: 8px;
    margin-top: 0;
    @media only screen and (max-width: 768px) {
      ${MobileH4}
      margin-bottom: 8px;
    }
  }
  p {
    margin-top: 0;
    margin-bottom: 16px;
    ${Body4}
    color : var(--body);
    @media only screen and (max-width: 768px) {
      ${Body5}
      margin-bottom: 12px;
    }
  }
  ul {
    padding-left: 25px;
    margin-top: 0;
    margin-bottom: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    li {
      padding-left: 1rem;
      ${Body4}
      color: var(--body);
      position: relative;
      @media only screen and (max-width: 768px) {
        ${Body5}
        padding-left: 8px;
      }
      ${Limarker}
      ::before {
        left: -24px;
        top: 6px;
      }
    }
    @media only screen and (max-width: 768px) {
      gap: 8px;
      margin-bottom: 12px;
    }
  }
  ol {
    margin-top: 0;
    margin-bottom: 16px;
    padding: 0 0 0 22px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    li {
      ${Body4}
      color: var(--body);
      position: relative;
      padding-left: 0;
      ::before {
        left: -24px;
        top: 6px;
      }
      @media only screen and (max-width: 768px) {
        ${Body5}
      }
    }
    @media only screen and (max-width: 768px) {
      gap: 8px;
      padding: 0 0 0 18px;
      margin-bottom: 12px;
    }
  }
`;
const Pagination = styled.div`
  display: flex;
  gap: 13px;
  .pagination-button {
    a {
      ${HeaderFont}
      color: var(--black);
      padding: 8px 32px;
      @media only screen and (max-width: 449px) {
        padding: 10px 16px;
        font-weight: 500;
        font-size: 12px;
        line-height: 12px;
      }
    }
  }
`;

const Left = styled.div`
  position: sticky;
  top: 150px;
  height: 40px;
  ${ButtonText}
  max-width:200px;
  width: 100%;
  color: var(--title);
  :hover {
    color: var(--primary);
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
export {
  UpadtePage,
  UpdateSubscribe,
  UpdateDes,
  Detail,
  UpdateDate,
  UpdateDetail,
  DetailSlug,
  Pagination,
  Left,
  Details
};
