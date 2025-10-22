import styled, { css } from 'styled-components';
import { body_regular, body_semibold, h3_semibold, label_semibold } from './typography';
import { BRAND_PAGE_ASSET_TONE } from '../constants/constant';

const BrandMain = styled.div``;

const BrandName = styled.div`
  &.first-item {
    h2 {
      margin-top: 0;
    }
  }
  h2 {
    ${h3_semibold};
    color: var(--title);
    margin: 0 0 var(--space-16) 0;
    margin-top: var(--space-64);
  }
  p {
    margin: var(--space-16) 0 0 0;
    color: var(--title);
    ${body_regular};
  }
  p + p {
    margin-top: var(--space-24);
  }
  @media only screen and (max-width: 449px) {
    h2 {
      margin-top: var(--space-48);
      margin-bottom: var(--space-12);
    }
    p {
      margin-top: var(--space-12);
    }
    p + p {
      margin-top: var(--space-20);
    }
    &.first-item {
      h2 {
        margin-top: 0;
      }
    }
  }
`;

const Block1 = styled.button`
  width: 100%;
  height: 252px;
  padding: var(--space-80) var(--space-24) var(--space-24);
  background-color: var(--title);
  border-radius: var(--radius-12);
  display: flex;
  flex-direction: column;
  .download-button {
    margin: 0 auto;
  }
  &:hover {
    .download-button {
      opacity: 1;
      transition: opacity 0.4s ease;
    }
  }
  &:focus-visible {
    outline: 2px solid var(--link-default);
    border-radius: var(--radius-12);
  }
  ${(props) =>
    props.tone === BRAND_PAGE_ASSET_TONE.DARK &&
    css`
      background-color: var(--title);
    `}
  ${(props) =>
    props.tone === BRAND_PAGE_ASSET_TONE.BLUE &&
    css`
      background-color: var(--assembly-blue);
    `}
  @media only screen and (max-width: 449px) {
    height: 240px;
  }
`;

const SectionWrapper = styled.div`
  max-width: 728px;
  width: 100%;
  margin: 0 auto;
  padding: var(--space-64) 0;
  @media only screen and (max-width: 991px) {
    padding: var(--space-48) 0;
  }
  @media only screen and (max-width: 449px) {
    padding: var(--space-40) 0;
  }
`;

const BrandImageSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-24);
  margin-top: var(--space-24);
`;

const Card = styled.a`
  background-color: var(--title);
  border-radius: var(--radius-12);
  padding: var(--space-96) var(--space-24) var(--space-24);
  width: 100%;
  height: 256px;
  &:focus-visible {
    border-radius: var(--radius-12);
  }
  &:hover {
    .download-button {
      opacity: 1;
      transition: opacity 0.4s ease;
    }
  }
  ${(props) =>
    props.tone === BRAND_PAGE_ASSET_TONE.DARK &&
    css`
      background-color: var(--title);
      .logo-icon {
        path {
          fill: var(--off-white-100);
        }
      }
      .circle-logo-icon {
        path {
          fill: var(--title);
        }
        circle {
          fill: var(--off-white-500);
        }
      }
    `}
  ${(props) =>
    props.tone === BRAND_PAGE_ASSET_TONE.BLUE &&
    css`
      background-color: var(--assembly-blue);
    `}
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-32);
  justify-content: center;
  align-items: center;
`;

const LogoIcon = styled.div`
  display: flex;
  padding: var(--space-7);
  @media only screen and (max-width: 991px) {
    padding: var(--space-12);
    .logo-icon {
      width: 218px;
      height: 40px;
    }
  }
`;

const DownloadButton = styled.div`
  ${label_semibold};
  color: var(--title);
  background-color: var(--off-white-200);
  height: 40px;
  padding: var(--space-2) var(--space-24) 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-30);
  opacity: 0;

  ${(props) =>
    props.tone === BRAND_PAGE_ASSET_TONE.DARK &&
    css`
      color: var(--title);
      &:hover {
        background-color: var(--bg-primary-hover);
      }
    `}
  ${(props) =>
    props.tone === BRAND_PAGE_ASSET_TONE.BLUE &&
    css`
      color: var(--off-white-100);
      background-color: var(--title);
      &:hover {
        background-color: var(--bg-card-dark-hover);
      }
    `}
    @media only screen and (max-width: 991px) {
    display: none;
  }
`;

const LogoSection = styled.div`
  display: grid;
  gap: var(--space-24);
  margin-top: var(--space-24);
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

const Logo = styled.div`
  display: flex;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-16);
`;
const ColorCode = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-4);
  p {
    margin: 0 !important;
    ${body_regular}
    color: var(--off-white-100);
  }
  p {
    &.color-name {
      ${body_semibold}
    }
  }
  ${(props) =>
    props.tone === BRAND_PAGE_ASSET_TONE.DARK &&
    css`
      p {
        color: var(--off-white-100);
      }
    `}
  ${(props) =>
    props.tone === BRAND_PAGE_ASSET_TONE.BLUE &&
    css`
      p {
        color: var(--title);
      }
    `}
`;

export {
  BrandName,
  Block1,
  BrandMain,
  SectionWrapper,
  BrandImageSection,
  Card,
  Content,
  LogoIcon,
  DownloadButton,
  LogoSection,
  Logo,
  Detail,
  ColorCode
};
