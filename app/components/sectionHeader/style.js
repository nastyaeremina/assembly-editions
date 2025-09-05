import styled, { css } from 'styled-components';
import { h2_semibold, body_regular, h1_semibold, body_semibold } from '../../styles/typography';
import { SectionTone } from '../../constants/constant';

const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-32);
  max-width: 600px;
  @media only screen and (max-width: 449px) {
    max-width: unset;
  }
`;

const Title = styled.div`
  h1 {
    ${h1_semibold}
    color: var(--title);
    margin: 0;
  }
  h2 {
    ${h2_semibold}
    color: var(--title);
    margin: 0;
  }
  p {
    ${body_semibold}
    color: var(--title);
    margin: 0;
  }
  ${({ tone }) =>
    tone === SectionTone.DARK &&
    css`
      h1 {
        color: var(--off-white-100);
      }
      h2 {
        color: var(--off-white-100);
      }
      p {
        color: var(--off-white-100);
      }
    `}
`;

const Description = styled.p`
  margin: 0;
  ${body_regular}
  color: var(--title);
  ${({ tone }) =>
    tone === SectionTone.DARK &&
    css`
      color: var(--off-white-100);
    `}
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-8);
`;

export { HeaderSection, Title, Description, ButtonGroup };
