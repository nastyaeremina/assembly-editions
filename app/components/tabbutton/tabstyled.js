'use client';

import styled, { css } from 'styled-components';
import { Label } from '../../styles/styles';
const Tabbutton = styled.div`
  .Tabs {
    width: 80%;
    height: auto;
    min-height: 400px;
    background: var(--tab-background-color);
    margin: 3.5rem auto 1.5rem;
    color: var(--tab-text-color);
    border-radius: 2rem;
    @media only screen and (max-width: 769px) {
      padding: 2rem 0;
    }
  }
  ul.nav {
    ${Label}
    color: var(--medium-gray);
    padding-left: 0px;
    display: flex;
    @media only screen and (max-width: 1440px) {
      margin: 0 -24px;
      padding: 0 24px;
      overflow: auto;
      display: flex;
    }
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
    ::-webkit-scrollbar {
      display: none; /* Safari and Chrome */
    }
  }
  ul.nav li:hover {
    color: var(--title);
  }
  ul.nav li.active {
    background: var(--dark-brown);
    color: var(--ul-active-text-color);
  }
  @media only screen and (max-width: 991px) {
    ul.nav {
      margin-bottom: 28px;
    }
  }
`;

const TabDetails = styled.div`
  .FirstTab p,
  .SecondTab p {
    font-size: 2rem;
    text-align: center;
  }
`;
const Tab = styled.li`
  white-space: nowrap;
  padding: 7px 20px;
  list-style: none;
  text-align: center;
  cursor: pointer;
  border-radius: 74px;
  &&.active {
    ${(props) =>
      props.textColor &&
      css`
        color: var(${props.textColor}) !important;
      `}
    ${(props) =>
      props.bgColor &&
      css`
        background: var(${props.bgColor}) !important;
      `}
  }
`;

export { Tabbutton, TabDetails, Tab };
