import styled from 'styled-components';
import { Body4, Heading2, Heading3, Heading4, Heading6 } from './styles';
const MainSection = styled.div`
  padding-bottom: 60px;
`;
const PrivacuHero = styled.div`
  background-color: ${({ theme }) => theme.colors.greendark};
  padding: 196px 0 100px 0;
  text-align: center;
  h2 {
    ${Heading2};
    color: ${({ theme }) => theme.colors.greenlight};
    margin: 0;
  }
  @media only screen and (max-width: 749px) {
    padding-top: 148px;
  }
`;
const SubData = styled.div`
  padding-top: 60px;
  margin: 0;
  p {
    ${Body4};
    color: ${({ theme }) => theme.colors.body};
    margin: 0 0 10px 0;
    :last-child {
      margin-bottom: 0;
    }
  }
  h4 {
    ${Heading4};
    color: ${({ theme }) => theme.colors.title};
    margin: 60px 0 12px 0;
    white-space: break-spaces;
  }
  h6 {
    ${Heading6};
    color: ${({ theme }) => theme.colors.title};
    white-space: break-spaces;
    margin: 30px 0 16px 0;
  }
  span {
    ${Heading6};
    color: ${({ theme }) => theme.colors.title};
    margin-left: 13px;
  }
  .pt30 {
    padding-top: 30px;
  }
  .margin {
    margin: 0 0 12px 0;
  }
  ol {
    padding-left: 34px;
    margin: 0;
    li {
      ${Body4};
      margin-bottom: 10px;
      padding-left: 12px;
      color: ${({ theme }) => theme.colors.body};
      :last-child {
        margin-bottom: 0;
      }
    }
  }
`;
const Catagory = styled.ol`
  padding: 0;
  margin: 0;
  padding-left: 24px;
`;
const SubDataWrap = styled.li``;

export { PrivacuHero, MainSection, SubData,  SubDataWrap,  Catagory };
