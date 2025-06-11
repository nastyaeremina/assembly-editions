import styled, { css } from 'styled-components';
import { Body4, Heading3, Heading4, MbBody5 } from '../../../styles/styles';

const ModernSection = styled.div`
  padding: 100px 0 50px;
  overflow: hidden;
  ${(props) =>
    props.isStandardPage &&
    css`
      padding: 0 0 100px;
    `}
  @media only screen and (max-width: 749px) {
    padding: 80px 0 40px;
    ${(props) =>
      props.isStandardPage &&
      css`
        padding: 0 0 80px;
      `}
  }
`;
const HeadView = styled.div`
  max-width: 918px;
  width: 100%;
  margin-bottom: 40px;
  .button-group {
    margin-top: 28px;
  }
  h2 {
    ${Heading3};
    color: var(--title);
    margin: 0;
    span {
      color: var(--primary);
    }
  }
  @media only screen and (max-width: 749px) {
    max-width: 100%;
  }
`;
const ModernWrap = styled.div``;
const BoxWrap = styled.div`
  border: 1px solid var(--black);
  border-radius: 4px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  overflow: hidden;
  @media only screen and (max-width: 991px) {
    grid-template-columns: 1fr 1fr;
  }
`;
const BoxView = styled.div`
  padding: 29px 25px;
  border-right: 1px solid var(--dark-brown);
  border-bottom: 1px solid var(--dark-brown);
  margin: -2px;
  :last-child {
    border-right: none;
  }
  @media only screen and (max-width: 991px) {
    border-bottom: 1px solid var(--dark-brown);
    margin: -1px;
  }
  @media only screen and (max-width: 749px) {
    padding: 20px 16px;
  }
`;
const ImgIcon = styled.div`
  display: inline-flex;
  .desktop {
    @media only screen and (max-width: 749px) {
      display: none;
    }
  }
  .mobile {
    display: none;
    @media only screen and (max-width: 749px) {
      display: block;
    }
  }
`;
const DetailView = styled.div`
  h3 {
    ${Heading4};
    margin: 28px 0 0;
    color: var(--title);
  }
  p {
    ${Body4};
    margin: 12px 0 0;
    color: var(--body);
  }
  @media only screen and (max-width: 749px) {
    h3 {
      ${Heading4};
      margin: 12px 0 0;
    }
    p {
      ${MbBody5};
      margin: 8px 0 0;
    }
  }
`;

export { ModernSection, ModernWrap, HeadView, BoxWrap, BoxView, ImgIcon, DetailView };
