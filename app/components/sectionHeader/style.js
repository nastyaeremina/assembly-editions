import styled, { css } from 'styled-components';
import { h2_semibold, body_regular } from '../../styles/typography';
import { SectionTone } from '../../constants/constant';

const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-24);
  max-width: 600px;
  @media only screen and (max-width: 991px) {
    gap: var(--space-20);
  }
  @media only screen and (max-width: 449px) {
    max-width: unset;
  }
`;

const TitleSection = styled.div`
  display: flex;
  gap: var(--space-12);
  flex-direction: column;
  @media only screen and (max-width: 449px) {
    gap: var(--space-16);
  }
`;

const Title = styled.h2`
  ${h2_semibold}
  color: var(--title);
  margin: 0;
  ${({ tone }) =>
    tone === SectionTone.DARK &&
    css`
      color: var(--off-white-100);
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
  flex-wrap: wrap;
  @media only screen and (max-width: 449px) {
    width: 100%;
    gap: var(--space-12);
  }
`;

export { HeaderSection, Title, Description, ButtonGroup, TitleSection };
