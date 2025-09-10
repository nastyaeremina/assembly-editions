import styled from 'styled-components';
import { body_regular } from '../../../styles/typography';

const defaultTabWidth = 175;
const lightGreyInitialOffset = 105;
const darkGreyInitialOffset = 55;
const lightGreyScaleOffset = 70;
const darkGreyScaleOffset = 120;
const responsiveOffset = 100;

const MainBlock = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-40);
`;

const Icon = styled.div`
  display: flex;
  border-radius: var(--radius-4);
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 449px) {
    svg {
      width: 42px;
      height: 42px;
    }
  }
`;

const Tabs = styled.div`
  display: flex;
  gap: var(--space-24);
  cursor: pointer;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: ${({ progress }) => `${progress}%`};
    max-width: 105%;
    background: linear-gradient(
      to right,
      var(--title) 0%,
      var(--border-default)
        calc(
          100% -
            ${({ activeTabWidth }) =>
              activeTabWidth ? activeTabWidth - lightGreyScaleOffset : lightGreyInitialOffset}px
        ),
      var(--bg-card-dark-hover)
        calc(
          100% -
            ${({ activeTabWidth }) => (activeTabWidth ? activeTabWidth - darkGreyScaleOffset : darkGreyInitialOffset)}px
        ),
      var(--title) 100%
    );
    transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1;
  }

  @media only screen and (max-width: 991px) and (min-width: 636px) {
    overflow-x: auto;
    scrollbar-width: none;
    gap: var(--space-16);
    justify-content: flex-start;
    &::after {
      width: ${({ activeIndex, activeTabWidth, cumulativeTabWidth, offsetWidth, progress, tabsCount }) => {
        const tabWidthOffset = cumulativeTabWidth > offsetWidth ? responsiveOffset : 0;
        const currentTabWidth = activeTabWidth ? activeTabWidth : defaultTabWidth;

        if (tabsCount <= 3) {
          return `calc(${progress}%)`;
        } else {
          if (activeIndex === 0) {
            return `calc(${currentTabWidth + tabWidthOffset}px)`;
          } else {
            return `calc(${progress - 10}% + ${currentTabWidth + tabWidthOffset}px)`;
          }
        }
      }};
      ${({ tabsCount }) => (tabsCount > 3 ? 'max-width: unset;' : '')}
    }
  }
  @media only screen and (max-width: 635px) {
    justify-content: center;
    gap: 0;
    &::after {
      width: ${({ progress }) => `${progress}%`};
      background: linear-gradient(
        to right,
        var(--title) 0%,
        var(--border-default) 50%,
        var(--bg-card-dark-hover) 75%,
        var(--title) 100%
      );
    }
  }
`;

const Numbers = styled.p`
  color: var(--text-secondary);
  ${body_regular};
  margin: 0;
  transition: color 600ms cubic-bezier(0.4, 0, 0.2, 1);
`;

const TabName = styled.p`
  color: ${({ active }) => (active ? 'var(--off-white-100)' : 'var(--text-secondary)')};
  ${body_regular};
  margin: 0;
  transition: color 600ms cubic-bezier(0.4, 0, 0.2, 1);
`;

const Tab = styled.button`
  display: flex;
  gap: var(--space-8);
  align-items: center;
  padding: var(--space-12) var(--space-8);
  background: none;
  border: none;
  cursor: pointer;
  &:focus-visible {
    box-shadow: inset 0 0 0 2px var(--link-default);
    outline: unset;
    border-radius: var(--radius-12);
    z-index: 11;
  }
  @media only screen and (min-width: 992px) {
    &:hover {
      ${Numbers} {
        color: ${({ active }) => (active ? 'var(--text-secondary)' : 'var(--gray-200)')};
      }
      ${TabName} {
        color: ${({ active }) => (active ? 'var(--off-white-100)' : 'var(--gray-200)')};
      }
    }
  }
  @media only screen and (max-width: 635px) {
    padding: var(--space-8) 0;
  }
`;

export { MainBlock, Icon, Tabs, Tab, Numbers, TabName };
