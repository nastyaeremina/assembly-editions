'use client';

import styled, { css } from 'styled-components';
import { ButtonText, HeaderFont, MbButtonText, MbPrimaryBtn } from './styles';
import { body_regular, body_semibold, h3_semibold, h4_semibold, tag, label_semibold } from './typography';

const Container = styled.div`
  width: 100%;
  max-width: 1272px;
  margin: 0 auto;
  padding: 0 var(--space-24);
  @media only screen and (max-width: 991px) {
    padding: 0 var(--space-32);
  }
  @media only screen and (max-width: 449px) {
    padding: 0 var(--space-16);
  }
`;

const PrimaryButton = styled.div`
  a {
    ${ButtonText}
    display: inline-block;
    letter-spacing: 0.02em;
    padding: 11px 32px;
    border-radius: 26px;
    background-color: var(--primary);
    color: var(--white);
    border: 1px solid var(--primary);
    :hover {
      background-color: var(--primary);
    }
    ${(props) =>
      props.textColor &&
      css`
        color: var(${props.textColor});
      `}
    ${(props) =>
      props.backgroundColor &&
      css`
        background-color: var(${props.backgroundColor});
        border: 1px solid var(${props.backgroundColor});
        :hover {
          background-color: var(${props.backgroundColor});
        }
      `}
    text-decoration: none;
    transition: all 300ms;
  }
  @media only screen and (max-width: 991px) {
    a {
      padding: 11px 32px;
    }
  }
  @media only screen and (max-width: 749px) {
    a {
      ${MbPrimaryBtn};
      padding: 7px 32px;
    }
  }
`;

const SecondryButton = styled.div`
  a {
    ${ButtonText}
    display: inline-block;
    padding: 11px 32px;
    border: 1px solid var(--black);
    border-radius: 48px;
    background-color: transparent;
    color: var(--black);
    letter-spacing: 0.02em;
    text-decoration: none;
    transition: all 300ms;
    :hover {
      background-color: var(--hover-color);
    }
  }
  @media only screen and (max-width: 749px) {
    a {
      ${MbPrimaryBtn};
      padding: 7px 32px;
    }
  }
`;

const BlackButton = styled.div`
  a {
    margin-left: 14px;
    ${HeaderFont}
    display: inline-block;
    padding: 8px 32px;
    border-radius: 48px;
    ${(props) =>
      props.textColor &&
      css`
        color: var(${props.textColor});
      `}
    ${(props) =>
      props.backgroundColor &&
      css`
        background-color: var(${props.backgroundColor});
      `}
    text-decoration: none;
    transition: all 300ms;
  }
  @media only screen and (max-width: 749px) {
    a {
      ${MbButtonText};
      padding: 10px 16px;
      margin-left: 2px;
    }
  }
  @media only screen and (max-width: 434px) {
    a {
      ${MbButtonText};
      text-align: center;
    }
  }
`;

const Content = styled.div`
  width: 100%;
  font-feature-settings: normal;
  ${body_regular}
  color: var(--title);

  ${(props) =>
    props.hasTopBar
      ? css`
          h2[id] {
            scroll-margin-top: 70px;
          }
        `
      : css`
          h2[id] {
            scroll-margin-top: 40px;
          }
        `}

  .code-block + div {
    margin: 0;
    h2 {
      margin-top: var(--space-64);
      @media only screen and (max-width: 449px) {
        margin-top: var(--space-48);
      }
    }
  }

  .code-block + .code-block {
    margin-top: var(--space-20);
  }
  .kg-button-card {
    background-color: var(--title);
    width: max-content;
    border-radius: var(--radius-30);
    height: 40px;
    padding: 0 var(--space-24);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: var(--space-48) 0;
    &:hover {
      background-color: var(--bg-card-dark-hover);
      a {
        color: var(--off-white-100);
      }
    }
    a {
      ${label_semibold}
      color: var(--off-white-100);
      &:focus-visible {
        outline: none;
        border-radius: var(--radius-30);
      }
    }
    @media only screen and (max-width: 449px) {
      padding: 0 var(--space-16);
      margin: var(--space-40) 0;
    }
  }
  .kg-align-center {
    margin: var(--space-48) auto;
  }

  .kg-video-player-container {
    display: none;
  }
  .kg-video-overlay {
    display: none;
  }
  ${(props) =>
    props.applyMargin &&
    css`
      @media only screen and (min-width: 1270px) {
        .kg-video-container {
          margin: 0 -34%;
        }
      }
      @media only screen and (min-width: 1228px) and (max-width: 1269px) {
        .kg-video-container {
          margin: 0 -34%;
        }
      }
    `}
  blockquote {
    margin: var(--space-40) 0 0 0;
    padding-bottom: var(--space-8);
    color: var(--title);
    ${h3_semibold}
    a {
      ${h3_semibold}
      color: var(--link-default);
      transition: color 0.3s ease;

      :hover {
        color: var(--link-hover);
      }
      :focus-visible {
        outline: 1px solid var(--link-default);
        border-radius: var(--radius-8);
      }
    }
    @media only screen and (max-width: 449px) {
      margin: var(--space-32) 0 var(--space-12) 0;
    }
  }
  video {
    width: 100%;
    height: 100%;
    border-radius: var(--radius-12);
    border: 1px solid var(--border-default);
  }
  strong {
    font-weight: 500;
  }
  figure {
    margin: 0px;
    padding-bottom: var(--space-8);
    display: flex;
    flex-direction: column;
    gap: var(--space-8);
    img {
      width: 100%;
      border-radius: var(--radius-12);
      border: 1px solid var(--border-default);
      height: auto;
    }
    iframe {
      border-radius: var(--radius-12);
      border: 1px solid var(--border-default);
      width: 100%;
      height: auto;
      aspect-ratio: 16/9;
    }
  }

  img {
    width: 100%;
    border-radius: var(--radius-12);
    border: 1px solid var(--border-default);
    height: auto;
  }

  figure + h2 {
    margin-top: 0;
    padding-top: var(--space-40);
    @media only screen and (max-width: 450px) {
      padding-top: var(--space-32);
    }
  }
  figure + h3 {
    margin-top: var(--space-40);
    @media only screen and (max-width: 450px) {
      margin-top: var(--space-32);
    }
  }
  a {
    display: inline;
    ${body_regular}
    color: var(--link-default);
    transition: color 0.3s ease;

    :hover {
      color: var(--link-hover);
    }
    :focus-visible {
      outline: 1px solid var(--link-default);
      border-radius: var(--radius-8);
    }
  }
  u {
    text-decoration: none;
  }
  ul {
    list-style-type: disc;
    margin-left: var(--space-26);
    margin-top: var(--space-24);
    li {
      margin-top: var(--space-12);
      padding-left: var(--space-3);
      strong {
        font-weight: 500;
        color: var(--title);
      }
      a {
        display: inline;
        ${body_regular}
        color: var(--link-default);
        transition: color 0.3s ease;

        :hover {
          color: var(--link-hover);
        }
        :focus-visible {
          outline: 1px solid var(--link-default);
          border-radius: var(--radius-8);
        }
      }
      u {
        text-decoration: none;
        transition: color 0.3s ease;
        :focus-visible {
          outline: 1px solid var(--link-default);
          border-radius: var(--radius-8);
        }
      }
      p {
        margin-bottom: var(--space-12);
        margin-top: var(--space-12);
      }
    }
    li::marker {
      color: var(--title);
    }
    span {
      font-weight: 500;
      color: var(--title);
    }
    @media only screen and (max-width: 449px) {
      margin-top: var(--space-20);
    }
  }
  h2 {
    ${h3_semibold}
    margin-top: var(--space-64);
    margin-bottom: var(--space-8);
    color: var(--title);
    strong {
      font-weight: 400;
    }
    @media only screen and (max-width: 449px) {
      margin-top: var(--space-48);
    }
  }
  h2 + p {
    margin-top: var(--space-16);
    @media only screen and (max-width: 449px) {
      margin-top: var(--space-12);
    }
  }
  h2 + ol {
    margin-top: var(--space-24);
    @media only screen and (max-width: 449px) {
      margin-top: var(--space-20);
    }
  }
  h2 + figure {
    margin-top: var(--space-24);
  }

  h3 {
    ${h4_semibold}
    margin-bottom: var(--space-8);
    margin-top: var(--space-40);
    color: var(--title);
    strong {
      font-weight: 400;
    }
    @media only screen and (max-width: 449px) {
      margin-top: var(--space-32);
    }
  }
  h3 + p {
    margin-top: var(--space-16);
    @media only screen and (max-width: 449px) {
      margin-top: var(--space-12);
    }
  }
  h3 + ol {
    margin-top: var(--space-24);
    @media only screen and (max-width: 449px) {
      margin-top: var(--space-20);
    }
  }
  h3 + figure {
    margin-top: var(--space-24);
  }
  ol + figure {
    margin-top: var(--space-24);
  }
  ul + figure {
    margin-top: var(--space-24);
  }
  ul + h2 {
    margin-top: var(--space-64);
    @media only screen and (max-width: 449px) {
      margin-top: var(--space-48);
    }
  }
  ol + h2 {
    margin-top: var(--space-64);
    @media only screen and (max-width: 449px) {
      margin-top: var(--space-48);
    }
  }
  h4 {
    ${body_semibold}
    color: var(--title);
    margin-bottom: var(--space-24);
    margin-top: var(--space-24);
    strong {
      font-weight: 400;
    }
  }
  p {
    color: var(--title);
    margin-bottom: var(--space-24);
    margin-top: var(--space-24);
    ${body_regular}
    strong {
      font-weight: 500;
      color: var(--title);
    }
    @media only screen and (max-width: 449px) {
      margin-top: var(--space-20);
      margin-bottom: var(--space-20);
    }
  }
  p + figure {
    margin-top: var(--space-24);
  }
  p + div {
    margin-top: var(--space-24);
  }
  div + h3 {
    margin-top: var(--space-48);
    @media only screen and (max-width: 449px) {
      margin-top: var(--space-32);
    }
  }
  ol + figure {
    margin-top: var(--space-24);
  }
  ol {
    padding-left: var(--space-30);
    margin-top: var(--space-24);
    li {
      margin-top: var(--space-12);
      strong {
        font-weight: 500;
        color: var(--title);
      }
      a {
        display: inline;
        ${body_regular}
        color: var(--link-default);
        transition: color 0.3s ease;

        :hover {
          color: var(--link-hover);
        }
        :focus-visible {
          outline: 1px solid var(--link-default);
          border-radius: var(--radius-8);
        }
      }
      u {
        text-decoration: none;
      }
    }
    li::marker {
      color: var(--title);
    }
    span {
      font-weight: 500;
      color: var(--title);
    }
    @media only screen and (max-width: 449px) {
      margin-top: var(--space-20);
      padding-left: var(--space-24);
    }
  }
  .code-block {
    position: relative;
    margin: 0 0 var(--space-24);
    @media only screen and (max-width: 449px) {
      margin: 0 0 var(--space-20);
    }
  }
  .code-block > div {
    padding: 0px;
    border-radius: var(--radius-12);
    border: 1px solid var(--border-default);
    background: var(--off-white-200);
    overflow: hidden;
  }
  .code-block > div > span {
    background: var(--off-white-200) !important;
    padding: var(--space-12);
    border-radius: var(--radius-12) !important;
    ${tag}
    @media only screen and (max-width: 449px) {
      padding: var(--space-8);
    }
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
    top: 5px;
    right: 5px;
    margin: 0;
    cursor: pointer;
  }
  pre {
    background-color: var(--other-bg-color);
    font-family: monospace;
    color: var(--text-secondary);
    padding: 15px !important;
    font-family: 'Azeret Mono', monospace !important;
    font-size: 15px !important;
    font-weight: 400;
    line-height: 20px !important;
  }
  code {
    color: var(--text-secondary);
    font-family: 'Azeret Mono', monospace !important;
    font-size: var(--font-size-tag) !important;
    line-height: var(--line-height-16) !important;
    font-weight: var(--font-weight-regular) !important;
    letter-spacing: 0.2px !important;
  }
  em {
    color: var(--title);
    ${body_regular}
  }
  p {
    :first-child {
      padding-top: 0;
      margin-top: 0;
    }
  }
  *:first-child {
    margin-top: 0;
    padding-top: 0;
  }
  *:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
  }
  // isThemedContent enables special styling for rich text content like guide pages
  ${(props) =>
    props.isThemedContent &&
    css`
      p {
        @media only screen and (max-width: 991px) {
          word-break: break-word;
        }
      }

      h2 {
        position: relative;
        display: flex;
        align-items: flex-start;
        gap: var(--space-10);
        a {
          margin-top: var(--space-6) !important;
          :focus-visible {
            border-radius: var(--radius-4);
            .copy-icon {
              opacity: 1;
              transition: all 0.3s;
            }
          }
          @media only screen and (max-width: 449px) {
            margin-top: var(--space-3);
          }
        }
        :hover {
          .copy-icon {
            opacity: 1;
            transition: all 0.3s;
          }
        }
      }
      h3 {
        position: relative;
        display: flex;
        align-items: flex-start;
        gap: var(--space-10);
        ${h3_semibold}
        a {
          margin-top: var(--space-4) !important;
          &:focus-visible {
            border-radius: var(--radius-4);
            .copy-icon {
              opacity: 1;
              transition: all 0.3s;
            }
          }
          @media only screen and (max-width: 449px) {
            margin-top: var(--space-1);
          }
        }
        :hover {
          .copy-icon {
            opacity: 1;
            transition: all 0.3s;
          }
        }
      }
      h4 {
        position: relative;
        display: flex;
        align-items: flex-start;
        gap: var(--space-10);
        margin: var(--space-24) 0;
        ${h4_semibold}
        a {
          margin-top: var(--space-4) !important;
          :focus-visible {
            border-radius: var(--radius-4);
            .copy-icon {
              opacity: 1;
              transition: all 0.3s;
            }
            .copy-icon-h4 {
              opacity: 1;
              transition: all 0.3s;
            }
          }
          @media only screen and (max-width: 449px) {
            margin-top: 0;
          }
        }
        .copy-icon {
          margin-top: 0;
        }
        :hover {
          .copy-icon {
            opacity: 1;
            transition: all 0.3s;
          }
          .copy-icon-h4 {
            opacity: 1;
            transition: all 0.3s;
          }
        }
      }
      i {
        ${body_regular}
      }
      ul,
      ol {
        li {
          p {
            margin: 0;
          }
        }
      }
      ol {
        ol {
          margin-top: var(--space-12);
        }
      }
      .copy-icon {
        position: unset;
        width: 24px;
        height: 24px;
        opacity: 0;
        cursor: pointer;
        transition: all 0.3s;
        border: none;
        margin-top: 0;
        display: flex;
      }
      .copy-icon-h4 {
        width: 18px;
        height: 18px;
        opacity: 0;
        cursor: pointer;
        transition: all 0.3s;
        position: unset;
      }
      pre {
        padding: var(--space-20) !important;
        border-radius: var(--radius-12);
        border: 1px solid var(--border-default);
        background: var(--off-white-200);
        margin: var(--space-16) 0 !important;
      }
      * {
        :last-child {
          margin-bottom: 0;
        }
      }
      table {
        width: 100%;
        margin-top: var(--space-24);
        box-shadow: var(--border-default) 0px 0px 0px 1px;
        border-radius: var(--radius-12);
        background-color: var(--off-white-200);
        overflow: auto;
        ::-webkit-scrollbar {
          display: none;
        }
        p {
          margin: 0;
        }
        @media only screen and (max-width: 449px) {
          margin-top: var(--space-20);
          margin-bottom: 0px;
          display: block;
        }
        tr {
          border-bottom: 1px solid var(--border-default);

          :last-child {
            td {
              :first-child {
                border-radius: 0 0 0 var(--radius-12);
              }
              :last-child {
                border-radius: 0 0 var(--radius-12) 0;
              }
            }
          }
          :last-child {
            border-bottom: none;
          }
        }
        th {
          background-color: var(--gray-50);
          padding: var(--space-12) var(--space-20);
          text-align: left;
          ${body_semibold};
          color: var(--title);
          p > b,
          p {
            ${body_semibold};
            color: var(--title);
            word-break: normal;
          }
          :first-child {
            border-radius: var(--radius-12) 0 0 0;
          }
          :last-child {
            border-radius: 0 var(--radius-12) 0 0;
          }
        }
        td {
          padding: var(--space-16) var(--space-20);
          ${body_regular};
          color: var(--title);
          vertical-align: top;
          p {
            ${body_regular};
            color: var(--title);
            padding-top: var(--space-20);
            word-break: normal;
            :first-child {
              padding-top: 0;
            }
            i {
              font-style: italic !important;
            }
          }
          a {
            ${body_regular};
            color: var(--link-default);
            transition: color 0.3s ease;

            :hover {
              color: var(--link-hover);
            }
          }
        }
      }
    `}
`;

export { PrimaryButton, BlackButton, Container, SecondryButton, Content };
