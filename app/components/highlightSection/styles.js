import styled from 'styled-components';
import { Body4, Heading4 } from '../../styles/styles';

const SectionDiv = styled.div`
  padding-bottom: 100px;
  @media (max-width: 449px) {
    padding-bottom: 80px;
  }
  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    border: 1px solid var(--dark-green);
    border-radius: 4px;
    overflow: hidden;
    table-layout: fixed;
  }
  th {
    display: none;
  }
  td {
    border: 0.5px solid var(--dark-green);
    border-top: none;
    border-bottom: none;
    text-align: center;
    padding: 32px;
    p {
      :first-child {
        ${Heading4};
        color: var(--title);
        margin: 0;
        @media (max-width: 449px) {
          font-size: 32px;
          line-height: 34px;
        }
      }
      :nth-child(2) {
        ${Body4};
        color: var(--body);
        margin: 0;
        margin-top: 12px;
      }
    }
    :first-child {
      border-left: none;
    }
    :last-child {
      border-right: none;
    }
    @media screen and (max-width: 768px) {
      display: block;
      border: none;
      border-top: 0.5px solid var(--dark-green);
      border-bottom: 0.5px solid var(--dark-green);
      :first-child {
        border-top: none;
      }
      :last-child {
        border-bottom: none;
      }
    }
  }
`;

export { SectionDiv };
