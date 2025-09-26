import styled from 'styled-components';
import { Heading4, LinkTxt } from './styles';
import { h1_semibold } from './typography';

const MainSection = styled.div`
  padding: var(--space-80) 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-80);
  @media only screen and (max-width: 991px) {
    padding: var(--space-64) 0;
    gap: var(--space-64);
  }
  @media only screen and (max-width: 449px) {
    padding: var(--space-64) 0 var(--space-48);
    gap: var(--space-48);
  }
`;
const PrivacuHero = styled.div`
  text-align: center;
  padding-bottom: var(--space-24);
  h1 {
    ${h1_semibold};
    color: var(--title);
    margin: 0;
  }
  @media only screen and (max-width: 991px) {
    padding-bottom: var(--space-20);
  }
  @media only screen and (max-width: 768px) {
    text-align: left;
  }
  @media only screen and (max-width: 449px) {
    padding-bottom: var(--space-24);
  }
`;
const PostContent = styled.div`
  padding: var(--space-16) 0 var(--space-64);
  max-width: 728px;
  width: 100%;
  margin: 0 auto;
  @media only screen and (max-width: 991px) {
    padding: var(--space-16) 0 var(--space-40);
  }
  @media only screen and (max-width: 449px) {
    padding: var(--space-16) 0 var(--space-48);
  }
`;

const ContentInfo = styled.div`
  padding: 28px 0 100px 0;
  @media only screen and (max-width: 749px) {
    padding: 10px 0 80px;
  }
`;
const InfoWrap = styled.div`
  padding: 40px 0;
  border-bottom: 1px solid var(--black);

  h2 {
    ${Heading4};
    margin: 0;
    color: var(--title);
  }
  @media only screen and (max-width: 749px) {
    h2 {
      font-size: 32px;
      line-height: 34px;
    }
  }
`;
const InfoLink = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding-top: 30px;
  row-gap: 16px;
  a {
    ${LinkTxt};
    color: var(--primary);
    display: block;
    transition: all 300ms;
    :hover {
      color: var(--black);
    }
  }
  @media only screen and (max-width: 991px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media only screen and (max-width: 749px) {
    grid-template-columns: 1fr;
    grid-row-gap: 26px;
  }
`;

export { MainSection, PrivacuHero, PostContent, ContentInfo, InfoWrap, InfoLink };
