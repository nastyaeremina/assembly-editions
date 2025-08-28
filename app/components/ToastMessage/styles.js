import styled from 'styled-components';
import { button_regular } from '../../styles/typography';

const MessageWrapper = styled.div`
  border: 1px solid var(--border-default);
  background-color: var(--off-white-100);
  padding: var(--space-12) var(--space-16) var(--space-8);
  border-radius: var(--radius-6);
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 300px;
  box-shadow: 0px 0px 12px 0px #1010100f;
  position: fixed;
  bottom: var(--space-24);
  right: var(--space-24);
  transform: ${(props) => {
    if (!props.isVisible) return 'translateY(100%)';
    if (props.isExitingMessage) return 'translateY(100%)';
    return 'translateY(0)';
  }};
  opacity: ${(props) => {
    if (!props.isVisible) return '0';
    if (props.isExitingMessage) return '0';
    return '1';
  }};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: bottom right;
  will-change: transform, opacity;
  backface-visibility: hidden;

  p {
    color: var(--title);
    ${button_regular}
    margin: 0;
  }
`;

export { MessageWrapper };
