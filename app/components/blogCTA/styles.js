import styled, { css } from 'styled-components';
import { Body4, Body5, Heading4, MobileH3 } from '../../styles/styles';

const BlogCTACard = styled.div`
  max-width: 880px;
  width: 100%;
  border: 1px solid var(--black);
  border-radius: 4px;
  background: var(--white);
  margin: 100px auto;
  display: flex;
  min-height: 256px;
  transition: all 0.3s;
  ${(props) =>
    props.isBlogCTAheight &&
    css`
      min-height: 174px;
      transition: all 0.3s;
    `}
  @media only screen and (max-width: 479px) {
    margin: 80px auto;
  }
`;

const BlogLeftCTA = styled.div`
  padding: 40px;
  h2 {
    ${Heading4}
    margin-top:0px;
    margin-bottom: 8px;
    color: var(--title);
  }
  p {
    ${Body4}
    margin: 0px;
    color: var(--body);
  }
  .blogerror {
    margin-top: 12px;
    margin-bottom: 0;
    margin-left: 15px;
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
    svg {
      width: 20px;
      height: 20px;
    }
  }
  @media only screen and (max-width: 479px) {
    padding: 24px;
    h2 {
      ${MobileH3}
    }
    p {
      ${Body5}
    }
    .blogerror {
      font-size: 15px;
      line-height: 24px;
      font-weight: 400;
    }
  }
`;
const BlogRightCTA = styled.div`
  display: flex;
  padding-right: 40px;
  @media only screen and (max-width: 749px) {
    display: none;
  }
`;
const Input = styled.input`
  padding: 13px 20px;
  background-color: var(--white);
  border: 1px solid var(--border);
  border-radius: 71px;
  outline: 0;
  height: 50px;
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
  width: 100%;
  color: var(--title);
  :hover {
    border-color: var(--primary);
  }
  :focus {
    border-color: var(--primary);
  }
  @media only screen and (max-width: 449px) {
    font-size: 16px;
    line-height: 20px;
  }
`;

const Form = styled.form`
  display: flex;
  gap: 20px;
  margin-top: 32px;

  @media only screen and (max-width: 749px) {
    button {
      height: 50px;
      align-items: center;
    }
  }
  @media only screen and (max-width: 449px) {
    flex-direction: column;
    gap: 16px;
    button {
      width: 100%;
      justify-content: center;
    }
  }
`;

const BlogSubscribeForm = styled.div`
  width: 100%;
`;
export { BlogCTACard, BlogLeftCTA, BlogRightCTA, Input, Form, BlogSubscribeForm };
