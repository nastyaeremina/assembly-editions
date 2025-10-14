'use client';

import styled, { css } from 'styled-components';
import { ButtonText, HeaderFont, MbButtonText, MbPrimaryBtn } from './styles';
import {
  body_regular,
  body_semibold,
  h3_semibold,
  h4_semibold,
  tag,
  label_semibold,
  button_regular,
  h2_semibold,
  button_semibold
} from './typography';

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

  h5 {
    ${body_semibold}
    color: var(--title);
    margin: var(--space-24) 0;
    @media only screen and (max-width: 449px) {
      margin: var(--space-20) 0;
    }
  }
  h6 {
    ${body_semibold}
    color: var(--title);
    margin: var(--space-24) 0;
    @media only screen and (max-width: 449px) {
      margin: var(--space-20) 0;
    }
  }

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
    padding: var(--space-2) var(--space-24) 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: var(--space-48) 0 !important;
    transition: all 0.3s ease;
    cursor: pointer;
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
  .kg-gallery-container {
    margin-bottom: var(--space-32) !important;
    @media only screen and (max-width: 449px) {
      margin-bottom: var(--space-16) !important;
    }
  }
  ${(props) =>
    props.applyMargin &&
    css`
      @media only screen and (min-width: 1270px) {
        .kg-video-container {
          margin: 0 -34%;
        }
        .kg-width-wide {
          margin: 0 -34%;
        }
      }
    `}
  blockquote {
    margin: var(--space-40) 0 0 0;
    padding-bottom: var(--space-8);
    color: var(--title);
    ${h3_semibold}
    p {
      color: var(--title);
      ${h3_semibold}
    }
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
    border: 1px solid var(--border-secondary);
  }
  strong {
    font-weight: 600;
  }
  figure {
    margin: 0px;
    padding-bottom: var(--space-8);
    display: flex;
    flex-direction: column;
    gap: var(--space-24);
    img {
      width: 100%;
      border-radius: var(--radius-12);
      border: 1px solid var(--border-secondary);
      height: auto;
    }
    iframe {
      border-radius: var(--radius-12);
      border: 1px solid var(--border-secondary);
      width: 100%;
      height: auto;
      aspect-ratio: 16/9;
    }

    figcaption {
      display: flex;
      gap: var(--space-8);
      overflow: auto;
      padding: var(--space-3) var(--space-3);
      margin-top: var(--space-40) !important;
      &::-webkit-scrollbar {
        display: none;
      }
      & {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
      @media only screen and (max-width: 991px) {
        margin: 0 -32px;
        padding: var(--space-3) var(--space-32) var(--space-3);
      }
      @media only screen and (max-width: 449px) {
        margin: 0 -16px;
        padding: var(--space-3) var(--space-16) var(--space-3);
        margin-top: var(--space-24);
      }
    }
    // Chip styling for processed figcaption items
    figcaption .kg-chip {
      display: inline-flex;
      align-items: center;
      padding: var(--space-2) var(--space-16) 0;
      height: 40px;
      border-radius: 9999px;
      background: var(--gray-50);
      color: var(--title);
      ${button_regular}
      cursor: pointer;
      border: 1px solid transparent;
      transition: border 0.3s ease;
      white-space: nowrap;
      &:hover {
        border: 1px solid var(--border-hover);
      }
      &.active {
        background: var(--title);
        color: var(--off-white-100);
        border: 1px solid var(--title);
      }
    }
    figcaption .kg-chip.active {
      background: var(--title);
      color: var(--off-white-100);
      border: 1px solid var(--title);
    }
  }

  img {
    width: 100%;
    border-radius: var(--radius-12);
    border: 1px solid var(--border-secondary);
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
      p {
        margin-bottom: var(--space-12);
        margin-top: var(--space-12);
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
      ${body_regular}
    }
    span {
      font-weight: 500;
      color: var(--title);
    }
    @media only screen and (max-width: 449px) {
      margin-top: var(--space-20);
    }
  }
  h1 {
    ${h2_semibold}
    margin-top: var(--space-64);
    margin-bottom: var(--space-8);
    color: var(--title);
    @media only screen and (max-width: 449px) {
      margin-top: var(--space-48);
    }
  }
  h2 {
    ${h3_semibold}
    margin-top: var(--space-64);
    margin-bottom: var(--space-8);
    color: var(--title);
    a {
      margin-top: var(--space-6);
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
    position: relative;
    display: flex;
    align-items: center;
    gap: var(--space-10);
    a {
      &:focus-visible {
        border-radius: var(--radius-4);
        .copy-icon {
          opacity: 1;
          transition: all 0.3s;
        }
      }
    }
    .copy-icon {
      position: unset;
    }
    &:hover {
      .copy-icon {
        opacity: 1;
        transition: all 0.3s;
      }
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
    position: relative;
    display: flex;
    align-items: center;
    gap: var(--space-10);
    margin: var(--space-24) 0 var(--space-8);
    @media only screen and (max-width: 449px) {
      margin: var(--space-20) 0 var(--space-8);
    }
    .copy-icon {
      position: unset;
    }
    a {
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
    }
    &:hover {
      .copy-icon {
        opacity: 1;
        transition: all 0.3s;
      }
    }
  }
  h4 + p {
    margin-top: var(--space-16);
    @media only screen and (max-width: 449px) {
      margin-top: var(--space-12);
    }
  }
  h4 + ol {
    margin-top: var(--space-24);
    @media only screen and (max-width: 449px) {
      margin-top: var(--space-20);
    }
  }
  h4 + figure {
    margin-top: var(--space-24);
  }
  p {
    color: var(--title);
    margin-bottom: var(--space-24);
    margin-top: var(--space-24);
    ${body_regular}
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
      p {
        margin-bottom: var(--space-12);
        margin-top: var(--space-12);
      }
      u {
        text-decoration: none;
      }
    }
    li::marker {
      color: var(--title);
      ${body_regular}
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
    margin: var(--space-24) 0;
    @media only screen and (max-width: 449px) {
      margin: var(--space-20) 0;
    }
  }
  .code-block > div {
    padding: 0px;
    border-radius: var(--radius-12);
    background: var(--off-white-550);
    overflow: hidden;
  }
  .code-block > div > span {
    background: var(--off-white-550) !important;
    padding: var(--space-20);
    border-radius: var(--radius-12) !important;
    ${tag}
    scrollbar-width: none;
    ::webkit-scrollbar {
      display: none;
    }
    @media only screen and (max-width: 449px) {
      padding: var(--space-16);
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
      opacity: 1;
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
    background: var(--off-white-550);
    color: var(--text-secondary);
    padding: var(--space-20) !important;
    border-radius: var(--radius-12);
    ${tag}
    text-transform: uppercase;
    margin: var(--space-16) 0 !important;
  }
  code {
    color: var(--text-secondary);
    font-family: 'ABC Diatype Mono Unlicensed Trial' !important;
    font-size: var(--font-size-tag) !important;
    line-height: var(--line-height-24) !important;
    font-weight: var(--font-weight-regular) !important;
    letter-spacing: 0.2px !important;
    text-transform: uppercase;
    padding: 0 !important;
    span {
      color: var(--text-secondary);
    }
  }
  em {
    color: var(--title);
    ${body_regular}
  }
  p,
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
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    :last-child {
      padding-bottom: 0;
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
  .copy-icon {
    opacity: 0;
    cursor: pointer;
    transition: all 0.3s;
    border: none;
    margin-top: 0;
    display: flex;
    :hover {
      opacity: 1;
      transition: all 0.3s;
    }
    @media only screen and (max-width: 991px) {
      opacity: 1;
    }
  }
  .copy-icon-h4 {
    width: 18px;
    height: 18px;
    opacity: 0;
    cursor: pointer;
    transition: all 0.3s;
    :hover {
      opacity: 1;
      transition: all 0.3s;
    }
  }

  ${(props) =>
    props.hasWordBreak &&
    css`
      p {
        @media only screen and (max-width: 991px) {
          word-break: break-word;
        }
      }
    `}

  // isThemedContent enables special styling for rich text content like guide pages
  ${(props) =>
    props.isThemedContent &&
    css`
      h2 + p {
        margin-top: var(--space-12);
      }
      h2 + ol {
        margin-top: var(--space-16);
      }
      h2 + figure {
        margin-top: var(--space-16);
      }
      h2 {
        margin-top: var(--space-48);
      }
      h3 + p {
        margin-top: var(--space-12);
      }
      h3 + ol {
        margin-top: var(--space-16);
      }
      h3 + figure {
        margin-top: var(--space-16);
      }
      h4 + p {
        margin-top: var(--space-12);
      }
      h4 + ol {
        margin-top: var(--space-16);
      }
      h4 + figure {
        margin-top: var(--space-16);
      }
      h3 {
        margin-top: var(--space-48);
      }
      h4 {
        margin-top: var(--space-32);
      }
      p + figure {
        margin-top: var(--space-16);
      }
      p + div {
        margin-top: var(--space-16);
      }
      p {
        @media only screen and (max-width: 991px) {
          word-break: break-word;
        }
      }
      p {
        ${button_regular}
        margin-top: var(--space-16);
        margin-bottom: var(--space-16);
      }
      a {
        ${button_regular}
      }
      i {
        ${button_regular}
      }
      ul,
      ol {
        margin-top: var(--space-16);
        li {
          margin-top: var(--space-8);
          p {
            margin: 0;
          }
          a {
            ${button_regular}
          }
        }
      }
      ul {
        li::marker {
          ${button_regular}
        }
      }
      ol {
        ol {
          margin-top: var(--space-12);
        }
        li::marker {
          ${button_regular}
        }
      }
      table {
        margin-top: var(--space-16);
        p {
          margin: 0;
          ${button_regular}
        }
        th {
          ${button_semibold};
          p > b,
          p {
            ${button_semibold};
          }
        }
        td {
          ${button_regular};
          p {
            ${button_regular};
          }
          a {
            ${button_regular};
          }
        }
      }
    `}
`;

export { PrimaryButton, BlackButton, Container, SecondryButton, Content };
