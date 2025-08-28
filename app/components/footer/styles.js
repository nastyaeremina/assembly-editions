import styled from 'styled-components';
import { button_regular, label_regular, label_semibold } from '../../styles/typography';

const FooterSection = styled.div`
  background-color: var(--off-white-500);
  padding: var(--space-64) 0 var(--space-120);
  @media only screen and (max-width: 768px) {
    padding: var(--space-64) 0 var(--space-96);
  }
  @media only screen and (max-width: 749px) {
    padding: var(--space-40) 0;
  }
`;

const FooterSectionLegal = styled.div`
  background-color: var(--neutral);
  padding: var(--space-40) 0;
`;

const FooterInnerBlock = styled.div`
  display: flex;
  gap: var(--space-120);
  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
    gap: var(--space-40);
  }
`;

const FooterMenu = styled.ul`
  margin: 0;
  list-style: none;
  p {
    ${label_semibold};
    color: var(--text-secondary);
    margin: 0;
    padding-bottom: var(--space-12);
  }
`;

const FooterSocialList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: var(--space-24);
`;
const FooterSocialItem = styled.li`
  display: flex;
  transition: 0.3s;
  cursor: pointer;
  svg {
    path {
      transition: 0.3s;
      fill: var(--title);
    }
  }
  :hover {
    svg {
      path {
        fill: var(--text-secondary);
      }
      fill: var(--text-secondary);
    }
  }
  a {
    display: inline-block;
    overflow: hidden;
    border-radius: 50%;
    transform: translateY(0);
    transition: color 0.3s ease;
    :hover {
      transform: translateY(-6px);
    }
  }
  img {
    display: block;
  }
  @media only screen and (max-width: 768px) {
    a {
      :hover {
        transform: translateY(0);
      }
    }
  }
`;
const FooterRight = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  row-gap: var(--space-80);
  column-gap: var(--space-40);
  grid-auto-flow: column;
  grid-template-rows: repeat(3, auto);
  @media only screen and (max-width: 991px) {
    grid-template-rows: repeat(4, auto);
    grid-template-columns: repeat(2, 1fr);
    row-gap: var(--space-48);
  }
  @media only screen and (max-width: 749px) {
    display: none;
  }
`;
const FooterFirst = styled.div`
  max-width: 242px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--space-24);
  p {
    ${button_regular};
    color: var(--title);
    margin: 0;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`;
const FooterMenuLeft = styled.div`
  max-width: 290px;
  width: 100%;
  display: grid;
  .padding {
    padding-top: var(--space-94);
  }
`;
const FooterMenuList = styled.li`
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
  a {
    ${label_regular};
    color: var(--title);
    display: block;
    transition: color 0.3s ease;
    cursor: pointer;
    :last-child {
      padding: 0;
    }
    :hover {
      color: var(--text-secondary);
    }
    :focus-visible {
      outline: 1px solid var(--link-default);
      border-radius: var(--radius-4);
    }
  }
`;
const FooterMobile = styled.div`
  display: none;
  @media only screen and (max-width: 749px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
    row-gap: var(--space-40);
  }
`;
const FooterMenuMobile = styled.div`
  width: 100%;
  .padding {
    padding-top: var(--space-40);
  }
`;
const FooterSub = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;

  p {
    ${label_regular};
    margin: 0;
    color: var(--medium-gray);
  }
`;
export {
  FooterSection,
  FooterInnerBlock,
  FooterSocialList,
  FooterSocialItem,
  FooterFirst,
  FooterRight,
  FooterMenu,
  FooterMenuLeft,
  FooterMenuList,
  FooterMobile,
  FooterMenuMobile,
  FooterSectionLegal,
  FooterSub
};
