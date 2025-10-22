import styled, { css } from 'styled-components';
import { h2_semibold, button_regular } from '../../styles/typography';
import Link from 'next/link';

const DetailHero = styled.div`
  max-width: 804px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-20);
  margin: 0px auto;
  h1 {
    ${h2_semibold};
    color: var(--title);
    margin: 0;
    text-align: center;
  }
  a {
    display: inline;
  }
  @media only screen and (max-width: 449px) {
    align-items: flex-start;
    gap: var(--space-16);
    h1 {
      text-align: left;
    }
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
    border-radius: var(--radius-20);
    border: 1px solid var(--border-default);
    @media only screen and (max-width: 768px) {
      width: 100%;
    }
    @media only screen and (max-width: 449px) {
      border-radius: var(--radius-12);
    }
  }
`;
const BlogTime = styled.div`
  display: flex;
  justify-content: space-between;
  span:hover {
    color: var(--title);
    cursor: pointer;
  }
`;
const Post = styled.div`
  ${button_regular}
  display:flex;
  color: var(--text-secondary);
  gap: var(--space-10);
  align-items: center;
  justify-content: center;
  span {
    ${button_regular};
    color: var(--text-secondary);
    &:hover {
      color: var(--title);
    }
  }
  a {
    display: inline;
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
  li {
    list-style-type: none;
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
`;

const Image = styled.img``;
const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-64);
  padding-bottom: var(--space-80);
  @media only screen and (max-width: 991px) {
    padding-bottom: var(--space-48);
  }
  @media only screen and (max-width: 449px) {
    gap: var(--space-24);
    padding-bottom: var(--space-32);
  }
`;

export { DetailHero, BlogImage, BlogTime, Post, Image, HeroWrapper };
