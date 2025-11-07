import styled from 'styled-components';
import css from 'styled-jsx/css';
import { body_regular, button_regular, h2_regular, h3_semibold, h4_semibold } from '../../../styles/typography';

const QuoteSection = styled.div`
  padding: 50px 0 100px;
  ${(props) =>
    props.isComparison &&
    css`
      padding: 0 0 100px;
    `}
  ${(props) =>
    props.isMasterComparison &&
    css`
      padding: 0 0 100px;
    `}
  overflow: hidden;
  @media only screen and (max-width: 991px) {
    padding: 40px 0 80px;
    ${(props) =>
      props.isComparison &&
      css`
        padding: 0 0 80px;
      `}
    ${(props) =>
      props.isMasterComparison &&
      css`
        padding: 0 0 80px;
      `}
  }
`;

const Mainss = styled.div`
  display: flex;
  border: 1px solid var(--black);
  border-radius: 4px;
  background: var(--white);
  overflow: hidden;
  @media only screen and (max-width: 991px) {
    overflow: hidden;
    flex-wrap: wrap;
  }
`;
const QuoteTxt = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px;
  gap: 30px;
  p {
    ${h2_regular};
    margin: 0px 0 30px 0;
    color: var(--title);
  }
  strong {
    font-weight: 500;
  }
  h2 {
    ${h3_semibold}
    margin: 0px 0 30px 0;
    color: var(--title);
  }
  h3 {
    ${h4_semibold}
    margin: 0px 0 30px 0;
    color: var(--title);
  }
  ul {
    margin: 12px 0 30px 0;
    list-style-type: none;
    gap: 12px;
    display: flex;
    flex-direction: column;
    padding-left: 0;
    li {
      color: var(--title);
      padding-left: 30px;
      position: relative;
      ${body_regular}
      p {
        color: var(--title);
        margin: 0;
      }
      &::before {
        content: '';
        position: absolute;
        width: 6px;
        height: 6px;
        background-color: var(--title);
        border-radius: 50%;
        left: 12px;
        top: 6px;
        padding-inline-end: 0;
        @media only screen and (max-width: 449px) {
          left: 0;
        }
      }
      @media only screen and (max-width: 449px) {
        padding-left: 22px;
      }
    }
  }
  ol {
    margin: 12px 0 30px 0;
    gap: 12px;
    display: flex;
    flex-direction: column;
    padding-left: 0;
    list-style-type: none;
    counter-reset: item;
    li {
      color: var(--title);
      padding-left: 30px;
      position: relative;
      ${body_regular}
      p {
        color: var(--title);
        margin: 0;
      }
      &::before {
        content: counter(item) '.';
        counter-increment: item;
        position: absolute;
        left: 12px;
        padding-inline-end: 0;
        @media only screen and (max-width: 449px) {
          left: 0;
        }
      }
      @media only screen and (max-width: 449px) {
        padding-left: 22px;
      }
    }
  }
  blockquote {
    border-left: 4px solid var(--neutral);
    padding-left: 20px;
    margin: 20px 0;
    font-style: italic;
    p {
      margin: 0;
      ${body_regular}
    }
    @media only screen and (max-width: 449px) {
      padding-left: 16px;
    }
  }
  @media only screen and (max-width: 749px) {
    padding: 30px;
    p {
      padding-bottom: 0px;
    }
  }
`;
const QuoteSubTxt = styled.div`
  span {
    display: block;
    margin: 0 0 4px 0;
    ${button_regular};
    color: var(--title);
  }
  p {
    margin: 0;
    ${button_regular};
    color: var(--text-secondary);
  }
  @media only screen and (max-width: 749px) {
    span {
      margin: 0 0 0 0;
    }
  }
`;
const ImageWrap = styled.div`
  position: relative;
  left: -1px;
  border-right: 1px solid var(--black);
  margin-top: -1px;
  img {
    height: 100%;
    object-fit: cover;
  }
  @media only screen and (max-width: 991px) {
    left: 0;
    width: 100%;
    border-right: 0;
    img {
      width: 100%;
    }
  }
`;
export { QuoteSection, Mainss, QuoteTxt, QuoteSubTxt, ImageWrap };
