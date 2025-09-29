import styled, { css } from 'styled-components';
import { body_regular } from '../../../styles/typography';
import { SectionTone } from '../../../constants/constant';

const MainBlock = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-40);
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
    width: ${({ progress, activeIndex }) => (activeIndex === 0 ? `calc(${progress}% - 17px)` : `${progress}%`)};
    background: linear-gradient(to right, var(--off-white-300) 0%, var(--title) 100%, var(--off-white-300) 100%);
    ${({ tone }) =>
      tone === SectionTone.DARK &&
      css`
        background: linear-gradient(to right, var(--title) 0%, var(--border-default) 100%, var(--title) 100%);
      `}
    transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1;
  }

  @media only screen and (max-width: 991px) and (min-width: 450px) {
    overflow-x: auto;
    scrollbar-width: none;
    gap: var(--space-16);
    justify-content: flex-start;
    &::after {
      width: ${({ activeIndex, progress, tabsCount }) => {
        if (tabsCount <= 3) {
          return `calc(${progress}%)`;
        } else {
          if (activeIndex === 0) {
            return `calc(${progress}%)`;
          } else {
            return `calc(${progress + 3}%)`;
          }
        }
      }};
      ${({ tabsCount }) => (tabsCount > 3 ? 'max-width: unset;' : '')}
    }
  }
  @media only screen and (max-width: 449px) {
    justify-content: center;
    gap: 0;
    &::after {
      width: ${({ progress }) => `${progress}%`};
    }
  }
`;

const TabName = styled.p`
  color: ${({ active }) => (active ? 'var(--title)' : 'var(--text-secondary)')};
  ${body_regular};
  margin: 0;
  transition: color 600ms cubic-bezier(0.4, 0, 0.2, 1);
  ${({ tone }) =>
    tone === SectionTone.DARK &&
    css`
      color: ${({ active }) => (active ? 'var(--off-white-100)' : 'var(--text-secondary)')};
    `}
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
    :hover {
      ${TabName} {
        color: var(--title);
        ${({ tone }) =>
          tone === SectionTone.DARK &&
          css`
            color: ${({ active }) => (active ? 'var(--off-white-100)' : 'var(--gray-200)')};
          `}
      }
    }
  }
  @media only screen and (max-width: 635px) {
    padding: var(--space-8) 0;
  }
`;

export { MainBlock, Tabs, Tab, TabName };
