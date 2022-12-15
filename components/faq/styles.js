import styled, { css } from 'styled-components';
import { Body1, Heading, Heading2, Heading3, Heading4 } from '../../styles/styles';

const FaqSection = styled.div`
  padding: 100px 0 60px 0;
  .ag {
    padding-bottom: 40px;
    :last-child {
      padding-bottom: 0;
    }
  }
  .ao {
    padding-bottom: 0;
  }
  .listcaption {
    padding-bottom: 40px;
    padding-right: 72px;
    @media only screen and (max-width: 991px) {
      padding-right: 32px;
    }
    @media only screen and (max-width: 749px) {
      padding-right: 0px;
    }
  }
  ${(props) =>
    props.enterprise &&
    css`
      padding: 100px 0 60px 0;
      background-color: ${({ theme }) => theme.colors.greenlight};
    `}
  .ak:last-child {
    border-bottom: none;
  }
  .c2:last-child {
    border-bottom: none;
  }
  @media only screen and (max-width: 991px) {
    padding: 80px 0 40px;
    .listtitle {
      font-size: 28px !important;
      line-height: 34px !important;
    }
    .listcaption {
      font-size: 18px !important;
      line-height: 22px !important;
    }
  }
  @media only screen and (max-width: 749px) {
    .listtitle {
      font-size: 22px !important;
      line-height: 23px !important;
    }
    .listcaption {
      font-size: 16px !important;
      line-height: 21px !important;
    }
  }
`;
const FaqTitle = styled.div`
  h3 {
    ${Heading3};
    margin: 0;
    color: ${({ theme }) => theme.colors.title};
  }
  margin-bottom: 20px;
  @media only screen and (max-width: 991px) {
    h3 {
      font-size: 50px;
      line-height: 55px;
    }
  }
`;
const FaqWrap = styled.div`
  .faq-list {
    list-style: none;
    padding: 0;
  }
  .faq-list li {
    border-bottom: 1px solid #131313;
    padding: 0px 0 40px;
    text-align: left;
    margin-bottom: 40px;
    :last-child {
      margin-bottom: 0;
      border-bottom: none;
      padding-bottom: 0;
    }
  }

  .faq-list .faq-heading::before {
    content: '';
    background-image: url('/images/plusicon.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    right: 0;
    top: 0px;
    width: 32px;
    height: 32px;
    display: block;
  }

  .faq-list .the-active .faq-heading::before {
    content: '';
    background-image: url('/images/minusicon.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    width: 32px;
    height: 32px;
  }

  .faq-heading {
    position: relative;
    cursor: pointer;
    ${Heading4};
    margin: 0;
    color: ${({ theme }) => theme.colors.title};
  }

  .faq-heading:hover {
    color: var(--theme-color);
  }

  .faq-text {
    display: none;
  }
  .container {
    width: 1200px;
    margin: auto;
  }
  .art-box svg {
    width: 100%;
  }
  .row {
    display: flex;
  }
  .row .col {
    flex-basis: 50%;
  }
  .read {
    ${Body1};
    margin: 0;
    color: ${({ theme }) => theme.colors.body};
    margin-top: 20px;
  }
`;

export { FaqSection, FaqWrap, FaqTitle };
