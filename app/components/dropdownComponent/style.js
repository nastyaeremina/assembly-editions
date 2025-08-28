import styled from 'styled-components';
import { body_regular, button_regular } from '../../styles/typography';

const DropDownWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const DropDownHeader = styled.div`
  cursor: pointer;
  display: flex;
  gap: var(--space-4);
  align-items: center;
  width: fit-content;
  ${body_regular}
  color: var(--title);
`;

const DropDownListContainer = styled.div`
  padding: var(--space-8);
  position: absolute;
  top: 110%;
  left: 0;
  width: 100%;
  background: var(--off-white-300);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-12);
  box-shadow: 0px 10px 10px -4px #00000014;
  z-index: 100;
  margin-top: var(--space-8);
`;

const DropDownList = styled.ul`
  max-height: 200px;
  overflow-y: auto;
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
`;

const ListItem = styled.li`
  padding: var(--space-8) var(--space-12);
  cursor: pointer;
  ${button_regular}
  border-radius: var(--radius-8);
  color: var(--title);
  &:hover {
    background-color: var(--off-white-600);
  }
  &.active {
    background-color: var(--off-white-600);
  }
`;

export { ListItem, DropDownHeader, DropDownList, DropDownListContainer, DropDownWrapper };
