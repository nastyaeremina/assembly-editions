'use client';

import ReactMarkdown from 'react-markdown';
import { HeroCaption, HeroSection, MainHero } from '../../styles/affiliatesStyles';
import { Container } from '../../styles/commonStyles';
import { isEmpty } from '../../helpers/helpers';
import ButtonGroup from '../ButtonGroup/buttonGroup';

export default function HeroComponent({
  title,
  description,
  isStandardPage,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink
}) {
  return (
    <>
      <MainHero isStandardPage={isStandardPage}>
        <Container>
          <HeroSection isStandardPage={isStandardPage}>
            {!isEmpty(title) && <h1>{title}</h1>}
            {!isEmpty(description) && (
              <HeroCaption>
                <ReactMarkdown>{description}</ReactMarkdown>
              </HeroCaption>
            )}
            <ButtonGroup
              primaryButtonText={primaryButtonText}
              primaryButtonLink={primaryButtonLink}
              secondaryButtonText={secondaryButtonText}
              secondaryButtonLink={secondaryButtonLink}
              marginTop={32}
            />
          </HeroSection>
        </Container>
      </MainHero>
    </>
  );
}
