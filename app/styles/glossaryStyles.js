import styled from 'styled-components';
import { Body3, HeaderFont, Heading2, LinkTxt, MbBody3, MobileH2, MobileH3, MobileH4 } from './styles';

const GlossaryContainer = styled.div`
  max-width: 880px;
  width: 100%;
  margin: 0 auto;
  padding-top: 120px;
`;
const DetailLink = styled.div`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  padding-bottom: 28px;
  p {
    ${LinkTxt};
    margin: 0;
    color: var(--medium-gray);
    @media only screen and (max-width: 749px) {
      ${HeaderFont};
    }
  }
  :hover {
    p {
      color: var(--title);
    }
    svg path {
      stroke: var(--title);
    }
  }
`;
const PageBack = styled.div`
  a {
    display: inline;
  }
`;
const GlossaryDetailTitle = styled.h1`
  ${Heading2}
  color: var(--title);
  margin: 0;
  @media (max-width: 479px) {
    ${MobileH2}
  }
`;

const GlossaryDetailcontent = styled.div`
  padding: 40px 0 100px;
  ${Body3}
  color: var(--body);
  @media only screen and (max-width: 450px) {
    padding: 20px 0 80px;
    ${MbBody3}
  }
  strong {
    font-weight: 500;
  }
  a {
    display: inline;
    ${Body3}
    color: var(--primary);
    @media only screen and (max-width: 450px) {
      ${MbBody3}
    }
    :hover {
      color: var(--title);
    }
  }
  ul {
    list-style-type: disc;
    margin-left: 15px;
    li {
      margin-top: 8px;
      strong,
      b {
        font-weight: 500;
        color: var(--title);
      }
      a {
        display: inline-block;
        ${Body3}
        color: var(--primary);
        @media only screen and (max-width: 450px) {
          ${MbBody3}
        }
        :hover {
          color: var(--title);
        }
      }
    }
    li::marker {
      color: var(--title);
      font-weight: 500;
    }
    span {
      font-weight: 500;
      color: var(--title);
    }
  }
  h2 {
    font-size: 50px;
    line-height: 55px;
    margin-top: -4rem;
    margin-bottom: 0;
    padding-top: 6rem;
    color: var(--title);
    font-weight: 400;
    strong {
      font-weight: 400;
    }
    @media only screen and (max-width: 991px) {
      ${MobileH2}
    }
    @media only screen and (max-width: 479px) {
      ${MobileH3}
    }
  }
  h3 {
    font-size: 32px;
    line-height: 105%;
    margin-bottom: 1rem;
    margin-top: 2rem;
    font-weight: 400;
    color: var(--title);
    strong {
      font-weight: 400;
    }
    @media only screen and (max-width: 479px) {
      ${MobileH4};
      margin-top: 20px;
    }
  }
  h4 {
    font-size: 24px;
    font-weight: 400;
    line-height: 31px;
    letter-spacing: 0.02em;
    color: var(--title);
    strong {
      font-weight: 400;
    }
    @media only screen and (max-width: 479px) {
      ${Body3}
    }
  }
  p {
    color: var(--body);
    margin-bottom: 1rem;
    margin-top: 1rem;
    ${Body3};
    :first-child {
      margin-top: 0;
    }
    @media only screen and (max-width: 450px) {
      font-size: 16px;
      line-height: 130%;
    }
    strong {
      font-weight: 500;
      color: var(--title);
    }
  }
  ol {
    padding-left: 20px;
    li {
      margin-top: 8px;
      strong,
      b {
        font-weight: 500;
        color: var(--title);
      }
      a {
        display: inline-block;
        ${Body3}
        color: var(--primary);
        @media only screen and (max-width: 450px) {
          ${MbBody3}
        }
        :hover {
          color: var(--title);
        }
      }
    }
    li::marker {
      color: var(--title);
      font-weight: 500;
    }
    span {
      font-weight: 500;
      color: var(--title);
    }
  }
`;
export { GlossaryContainer, DetailLink, PageBack, GlossaryDetailTitle, GlossaryDetailcontent };
