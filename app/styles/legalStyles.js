import styled from 'styled-components';
import { Body4, Heading2, Heading4, Heading6 } from './styles';
import { body, greendark, greenlight, title } from './color';
const MainSection = styled.div`
  padding-bottom: 60px;
`;
const PrivacuHero = styled.div`
  background-color: ${greendark};
  padding: 180px 0 100px 0;
  text-align: center;
  h1 {
    ${Heading2};
    color: ${greenlight};
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
    color: ${body};
    margin: 0 0 10px 0;
    :last-child {
      margin-bottom: 0;
    }
  }
  h4 {
    ${Heading4};
    color: ${title};
    margin: 60px 0 12px 0;
    white-space: break-spaces;
  }
  h6 {
    ${Heading6};
    color: ${title};
    white-space: break-spaces;
    margin: 30px 0 16px 0;
  }
  span {
    ${Heading6};
    color: ${title};
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
      color: ${body};
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
