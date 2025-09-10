import styled, { css } from 'styled-components';
import { button_regular } from '../../../styles/typography';
import { SectionTone } from '../../../constants/constant';

const DropdownWrapper = styled.div`
  position: relative;
  width: fit-content;
`;

const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-3) var(--space-16) 0;
  height: 40px;
  border-radius: var(--radius-30);
  border: 1px solid var(--border-default);
  ${button_regular}
  color: var(--title);
  gap: var(--space-8);
  cursor: pointer;
  svg {
    transition: transform 0.3s ease;
  }
  .rotate-icon {
    path {
      fill: var(--title);
    }
  }
  .rotate-down-icon {
    transform: rotate(180deg);
    path {
      fill: var(--title);
    }
  }
  ${({ tone }) =>
    tone === SectionTone.DARK &&
    css`
      border: 1px solid var(--off-white-100);
      color: var(--off-white-100);
      .rotate-icon {
        path {
          fill: var(--off-white-100);
        }
      }
      .rotate-down-icon {
        transform: rotate(180deg);
        path {
          fill: var(--off-white-100);
        }
      }
    `}
`;

const DropdownList = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: var(--space-20);
  padding: var(--space-8);
  background-color: var(--off-white-300);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-16);
  z-index: 10;
  min-width: 216px;
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  ${({ tone }) =>
    tone === SectionTone.DARK &&
    css`
      background-color: var(--gray-50);
    `}
`;

const DropdownItem = styled.button`
  padding: var(--space-8) var(--space-12);
  border-radius: var(--radius-8);
  ${button_regular}
  color: var(--title);
  cursor: pointer;
  text-align: left;
  ${({ selected }) =>
    selected &&
    css`
      background-color: var(--off-white-600);
    `}
  ${({ selected, tone }) =>
    selected &&
    tone === SectionTone.DARK &&
    css`
      background-color: var(--border-default);
    `}
    :focus-visible {
    border-radius: var(--radius-12);
  }
`;

const TabSectionMainDiv = styled.div`
  padding: var(--space-4);
  background-color: var(--gray-50);
  border-radius: var(--radius-30);
  display: flex;
  align-items: center;
  gap: var(--space-20);
  width: fit-content;
  position: relative;
  overflow: hidden;
  ${({ tone }) =>
    tone === SectionTone.DARK &&
    css`
      background-color: var(--gray-400);
    `}
`;

const TabHighlighter = styled.div`
  position: absolute;
  height: 40px;
  top: var(--space-4);
  left: 0;
  background-color: var(--off-white-100);
  border-radius: var(--radius-30);
  transition: transform 0.3s ease, width 0.3s ease;
  z-index: 0;
  width: ${({ highlighterWidth }) => `${highlighterWidth}px`};
  transform: ${({ highlighterLeft }) => `translateX(${highlighterLeft}px)`};
  ${({ tone }) =>
    tone === SectionTone.DARK &&
    css`
      background-color: var(--text-secondary);
    `}
`;

const TabSwitcherWrapperDiv = styled.div`
  display: flex;
  ${({ isButton }) =>
    isButton &&
    css`
      justify-content: flex-end;
    `}
  @media only screen and (max-width: 768px) {
    ${({ isButton }) =>
      isButton &&
      css`
        justify-content: flex-start;
      `}
  }
`;

const TabItems = styled.button`
  padding: var(--space-2) var(--space-16) 0;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-30);
  ${button_regular}
  color: var(--title);
  position: relative;
  z-index: 1;
  transition: color 0.3s ease;
  ${({ tone }) =>
    tone === SectionTone.DARK &&
    css`
      color: var(--off-white-100);
    `}
  @media only screen and (min-width: 991px) {
    :hover {
      color: ${({ selected }) => (selected ? 'var(--title)' : 'var(--text-secondary)')};
      ${({ tone }) =>
        tone === SectionTone.DARK &&
        css`
          color: ${({ selected }) => (selected ? 'var(--off-white-100)' : 'var(--text-secondary)')};
        `}
    }
  }
`;

export {
  DropdownWrapper,
  DropdownButton,
  DropdownList,
  DropdownItem,
  TabItems,
  TabSectionMainDiv,
  TabSwitcherWrapperDiv,
  TabHighlighter // Export TabHighlighter
};
