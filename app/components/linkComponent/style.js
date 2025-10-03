import Link from 'next/link';
import styled, { css } from 'styled-components';
import { body_regular, button_regular, label_regular } from '../../styles/typography';
import { LinkSize, LinkTone } from '../../constants/constant';

const LinkSection = styled(Link)`
  gap: var(--space-4);
  display: flex;
  align-items: center;
  ${body_regular}
  color: var(--off-white-100);
  transition: color 0.3s ease;
  white-space: nowrap;

  .hover-line-path {
    opacity: 0;
    transition: opacity 0.4s ease, transform 0.4s ease;
  }

  .hover-tip-path {
    transition: opacity 0.4s ease, transform 0.4s ease;
  }

  svg {
    path {
      transition: fill 0.3s ease;
      fill: var(--off-white-100);
    }
  }

  :hover {
    color: var(--text-secondary);
    svg {
      path {
        fill: var(--text-secondary);
      }
    }
    .hover-line-path {
      opacity: 1;
      transform: translateX(2px);
    }
    .hover-tip-path {
      transform: translateX(2px);
    }
  }

  ${({ tone }) =>
    tone === LinkTone.BLACK &&
    css`
      color: var(--title);
      svg {
        path {
          fill: var(--title);
        }
      }
      :hover {
        color: var(--text-secondary);
        svg {
          path {
            fill: var(--text-secondary);
          }
        }
      }
    `}
  ${({ tone }) =>
    tone === LinkTone.BLUE &&
    css`
      color: var(--link-default);
      svg {
        path {
          fill: var(--link-default);
        }
      }
      :hover {
        color: var(--link-hover);
        svg {
          path {
            fill: var(--link-hover);
          }
        }
      }
    `}
    ${({ tone }) =>
    tone === LinkTone.GRAY &&
    css`
      color: var(--text-secondary);
      svg {
        path {
          fill: var(--text-secondary);
        }
      }
      :hover {
        color: var(--title);
        svg {
          path {
            fill: var(--title);
          }
        }
      }
    `}
    ${({ size }) =>
    size === LinkSize.MEDIUM &&
    css`
      ${button_regular}
    `}
    ${({ size }) =>
    size === LinkSize.SMALL &&
    css`
      ${label_regular}
    `}
  :focus-visible {
    outline: 1px solid var(--link-default);
    border-radius: var(--radius-8);
    ${({ size }) =>
      size === LinkSize.SMALL &&
      css`
        border-radius: var(--radius-4);
      `}
  }
`;

const Icon = styled.div`
  display: flex;

  ${(props) =>
    props.size === LinkSize.MEDIUM &&
    css`
      svg {
        width: 16px;
        height: 14px;
      }
    `}

  ${(props) =>
    props.size === LinkSize.SMALL &&
    css`
      svg {
        width: 14px;
        height: 12px;
      }
    `}
`;

export { LinkSection, Icon };
