'use client';

import ReactMarkdown from 'react-markdown';
import { HeroCaption, HeroSection, MainHero } from '../../styles/affiliatesStyles';
import Button from '../button/button';
import { Container } from '../../styles/commonStyles';
import { isEmpty } from '../../helpers/helpers';

export default function HeroComponent({ data }) {
  const isShowButton = !isEmpty(data?.primaryButtonText) && !isEmpty(data?.primaryButtonLink)

  return (
    <>
      <MainHero>
        <Container>
          <HeroSection>
            <h1>{data?.heroTitle}</h1>
            <HeroCaption>
              <ReactMarkdown>{data?.heroDescription}</ReactMarkdown>
            </HeroCaption>
            {isShowButton && (
              <Button text={data?.primaryButtonText} href={data?.primaryButtonLink} className={'button-section'} />
            )}
          </HeroSection>
        </Container>
      </MainHero>
    </>
  );
}
