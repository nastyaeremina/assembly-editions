import styled, { css } from 'styled-components';
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
  color: ${(props) => (props.isPlaceholderColor ? 'var(--gray-200)' : 'var(--title)')};
  outline: 0;
  svg {
    transition: transform 0.3s ease;
  }
  .rotate-icon {
    transform: rotate(180deg);
  }
  &:focus-visible {
    outline: 2px solid var(--link-default);
    outline-offset: 1px;
    border-radius: var(--radius-8);
  }
  ${(props) =>
    props.applyDropdownCss &&
    css`
      margin-bottom: var(--space-20);
      padding: var(--space-13) var(--space-16) var(--space-9);
      border: 1px solid ${props.isOpen ? 'var(--title)' : 'var(--border-default)'};
      border-radius: var(--radius-8);
      background-color: var(--off-white-300);
      ${button_regular}
      width: 100%;
      justify-content: space-between;

      svg {
        width: 12px;
        height: 12px;
        margin-top: -4px;
      }
    `}
  ${(props) =>
    props.isError &&
    css`
      border: 1px solid var(--error-color);
      margin-bottom: 0;
    `}
`;

const DropDownListContainer = styled.div`
  padding: var(--space-8);
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: var(--off-white-300);
  border: 1px solid var(--border-secondary);
  border-radius: var(--radius-12);
  box-shadow: 0px 10px 10px -4px #00000014;
  z-index: 100;
  margin-top: var(--space-8);
  ${(props) =>
    props.applyDropdownCss &&
    css`
      top: 70%;
      border-radius: var(--radius-16);
    `}
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
  scrollbar-width: none;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  &::-webkit-scrollbar {
    display: none;
  }
  ${(props) =>
    props.applyDropdownCss &&
    css`
      max-height: 260px;
    `}
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
