import styled, { css } from 'styled-components';
import { body_regular, body_semibold, button_regular, h2_semibold, h3_semibold, tag } from '../../styles/typography';

const QuoteSection = styled.div`
  padding: 100px 0 0px;
  overflow: hidden;
  @media only screen and (max-width: 991px) {
    padding: 80px 0 0px;
  }
`;

const ComparisonTable = styled.div`
  padding: var(--space-64) 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-80);

  h2 {
    margin: 0;
    ${h2_semibold}
    color: var(--title);
    max-width: 600px;
    width: 100%;
  }

  @media only screen and (max-width: 991px) {
    padding: var(--space-40) 0;
  }
  @media only screen and (max-width: 449px) {
    padding: var(--space-48) 0;
    gap: var(--space-48);
  }
`;

const MainTableSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-80);
  @media only screen and (max-width: 449px) {
    gap: var(--space-64);
  }
`;

const TableMainDiv = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-64);
  @media only screen and (max-width: 991px) {
    flex-direction: column;
  }
  @media only screen and (max-width: 449px) {
    gap: var(--space-48);
  }
  .table {
    max-width: 720px;
    width: 100%;
    border: 1px solid var(--border-default);
    border-radius: var(--radius-16);
    position: relative;
    overflow: auto;
    ::-webkit-scrollbar {
      display: none;
    }
    .icon-div {
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        height: auto;
        @media only screen and (max-width: 991px) {
          height: 28px;
          width: 100%;
          max-width: 130px;
        }
        @media only screen and (max-width: 449px) {
          height: 24px;
        }
      }
    }
    th {
      height: 40px;
      @media only screen and (max-width: 449px) {
        display: none;
      }
    }
    p {
      margin: 0;
      ${body_regular}
      color: var(--title);
    }
    table {
      border-collapse: collapse;
      width: 100%;
      background-color: var(--off-white-100);
      border-radius: var(--radius-16);
      position: relative;
      z-index: 2;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: var(--grad-left);
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, #d7f1f9 0%, rgba(188, 231, 244, 0) 100%);
        pointer-events: none;
        z-index: -1;
        width: var(--grad-width);
      }

      @media only screen and (max-width: 449px) {
        &::before {
          display: none;
        }
      }

      td {
        text-align: center;
        padding: var(--space-20) var(--space-20) var(--space-16);
        ${button_regular}
        color: var(--title);
        border-right: 1px solid var(--border-default);
        position: relative;
        z-index: 2;
        p {
          ${button_regular}
        }
        :nth-child(4) {
          min-width: 160px;
        }
        :first-child {
          text-align: start;
          max-width: 400px;
          width: 100%;
        }
        :nth-child(2),
        :nth-child(3) {
          display: none;
        }
        :last-child {
          border-right: none;
          min-width: 160px;
        }
        @media only screen and (max-width: 449px) {
          display: block;
          padding: var(--space-20) var(--space-20) var(--space-16);
          border-right: none;
          :nth-child(2) {
            background-color: unset;
          }
          :first-child {
            background-color: var(--gray-50);
            border-top: 1px solid var(--border-default);
            max-width: 100%;
          }
          :nth-child(2),
          :nth-child(3) {
            width: 50%;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            padding: var(--space-22) var(--space-20);
            border-bottom: 1px solid var(--border-default);
          }
          :nth-child(4),
          :nth-child(5) {
            width: 50%;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            padding: var(--space-20);
          }
          :nth-child(4) {
            background-color: unset;
          }
        }
      }

      @media only screen and (max-width: 449px) {
        tr:nth-child(2) td:first-child {
          border-top: none;
        }
      }

      th {
        height: 80px;
        border-color: black;
        text-align: center;
        width: 100%;
        padding: 0 var(--space-16);
        border-right: 1px solid var(--border-default);
        ${body_semibold}
        color: var(--title);
        width: 100%;
        max-width: 160px;
        position: relative;
        z-index: 2;
        :nth-child(2),
        :nth-child(3) {
          display: none;
        }
        :nth-child(4) {
        }
        :first-child {
          padding: 0 var(--space-20);
          width: 100%;
          max-width: 400px;
          text-align: left;
        }
        :last-child {
          border-right: none;
        }
      }
      tr {
        border-top: 1px solid var(--border-default);
        .leftside {
          text-align: left;
        }
        :first-child {
          border-top: none;
        }
        @media only screen and (max-width: 449px) {
          border-top: none;
        }
      }
    }
    @media only screen and (max-width: 991px) {
      max-width: unset;
      img {
        height: 24px;
        object-fit: contain;
      }
    }
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-24);
  max-width: 440px;
  width: 100%;
  @media only screen and (max-width: 991px) {
    max-width: 100%;
  }
`;

const Tag = styled.div`
  margin: 0;
  ${tag}
  color: var(--title);
  padding: var(--space-12) var(--space-16);
  background-color: var(--gray-50);
  border-radius: var(--radius-30);
  text-transform: uppercase;
`;

const TitleSection = styled.div`
  h3 {
    ${h3_semibold};
    color: var(--title);
    margin: 0;
  }
  p {
    margin: 0;
    margin-top: var(--space-24);
    ${body_regular};
    color: var(--title);
  }
`;

const G2section = styled.div`
  margin: 0 auto;
  padding: var(--space-64) 0;
  h2 {
    margin: 0;
    ${h2_semibold}
    color: var(--title);
    max-width: 600px;
    width: 100%;
  }
  p {
    padding: var(--space-32) 0;
    margin: 0;
    ${body_regular};
    color: var(--title);
    max-width: 600px;
    width: 100%;
  }
  @media only screen and (max-width: 991px) {
    padding: var(--space-40) 0;
  }
  @media only screen and (max-width: 449px) {
    padding: var(--space-48) 0;
  }
`;
const G2group = styled.div`
  display: flex;
  padding-bottom: var(--space-64);
  .button {
    svg {
      path {
        fill: var(--off-white-100);
      }
    }
  }
`;

const G2criteria = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(294px, 1fr));
  gap: var(--space-24);
`;
const G2text = styled.div`
  border: 1px solid var(--border-default);
  background-color: var(--off-white-300);
  border-radius: var(--radius-12);
  padding: var(--space-20);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: var(--space-20);
  width: 100%;
  h3 {
    margin: 0;
    ${body_semibold}
    color: var(--title);
  }
`;
const G2progressbar = styled.div`
  display: flex;
  gap: var(--space-12);
  flex-direction: column;
`;
const Processdata = styled.div`
  .progress-number-div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    z-index: 1;
    top: var(--space-14);
    left: var(--space-12);
    right: var(--space-12);
  }
  span {
    ${button_regular}
    display: flex;
    color: var(--title);
  }
  .item-title {
    ${button_regular};
    color: var(--title);
  }
`;
const Carditem = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border-default);
  border-radius: var(--radius-12);
  height: 100%;
  .svg-icon {
    opacity: 0;
    transform: translateX(-2px) scale(0.98);
    transition: transform 0.25s, opacity 0.25s;
    transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  &:hover {
    .svg-icon {
      transform: none;
      opacity: 1;
    }
  }
`;
const ComparisonLogo = styled.div`
  display: flex;
  img {
    height: 36px;
    width: auto;
  }
`;

const CardMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-40);
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-24);
  max-width: 600px;
  width: 100%;
`;

const Allcard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-24);
  @media only screen and (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Title = styled.h3`
  ${h3_semibold};
  margin: 0;
  color: var(--title);
`;

const Description = styled.p`
  ${body_regular};
  margin: 0;
  color: var(--title);
`;

const TopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-20);
`;
const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
  padding: var(--space-20);
  border-top: 1px solid var(--border-default);
`;

const Icon = styled.div`
  display: flex;
`;

const CompareTitle = styled.p`
  margin: 0;
  ${body_semibold}
  color: var(--title);
`;

const CompareDescription = styled.p`
  margin: 0;
  ${button_regular}
  color: var(--text-secondary);
`;

const ProgressBar = styled.div`
  width: ${(props) => props.width}%;
  height: 48px;
  background-color: ${(props) => props.color};
  border-radius: var(--radius-8);
  transition: width 0.3s ease-in-out;
  position: relative;
`;
export {
  QuoteSection,
  ComparisonTable,
  G2section,
  G2group,
  G2criteria,
  G2text,
  G2progressbar,
  Processdata,
  Carditem,
  ComparisonLogo,
  Allcard,
  Title,
  CardMainDiv,
  TableMainDiv,
  LeftSection,
  TitleSection,
  MainTableSection,
  TitleWrapper,
  Description,
  TopSection,
  BottomSection,
  Icon,
  CompareTitle,
  CompareDescription,
  Tag,
  ProgressBar
};
