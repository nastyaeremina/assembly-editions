import styled from 'styled-components';
import { body_regular, h4_semibold } from '../../styles/typography';

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
    border-bottom: 1px solid var(--dark-green);
    p {
      :first-child {
        ${h4_semibold};
        color: var(--title);
        margin: 0;
      }
      :nth-child(2) {
        ${body_regular};
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
    @media only screen and (max-width: 768px) {
      display: block;
      border: none;
      border-top: 0.5px solid var(--dark-green);
      border-bottom: 0.5px solid var(--dark-green);
      padding: 20px;
    }
  }
  @media only screen and (max-width: 768px) {
    tr:nth-child(2) td:first-child {
      border-top: none;
    }
    tr:last-child td:last-child {
      border-bottom: none;
    }
  }
  @media only screen and (min-width: 769px) {
    tr:last-child td {
      border-bottom: none;
    }
  }
`;

export { SectionDiv };
