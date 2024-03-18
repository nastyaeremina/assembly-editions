'use client';

import ReactMarkdown from 'react-markdown';
import Button from '../button/button';
import { Container } from '../../styles/commonStyles';
import { isEmpty } from '../../helpers/helpers';
import { black } from '../../styles/color';
import { HeroSection, MainHero, HeroCaption, ButtonGroup } from './style';

export default function SubHeroComponent({ data }) {
  const isShowPrimaryButton = !isEmpty(data?.primaryButtonText) && !isEmpty(data?.primaryButtonLink);
  const isShowSecondaryButton = !isEmpty(data?.secondaryButtonText) && !isEmpty(data?.secondaryButtonLink);
  return (
    <>
      <MainHero>
        <>
          <HeroSection>
            <h1>{data?.heroTitle}</h1>
            <HeroCaption>
              <ReactMarkdown>{data?.heroDescription}</ReactMarkdown>
            </HeroCaption>
            <ButtonGroup>
              {isShowPrimaryButton && (
                <Button text={data?.primaryButtonText} href={data?.primaryButtonLink} className={'button-section'} />
              )}
              {isShowSecondaryButton && (
                <Button
                  text={data?.secondaryButtonText}
                  href={data?.secondaryButtonLink}
                  className={'button-section'}
                  bgColor={'transparent'}
                  fontColor={black}
                  borderColor={black}
                  hoverColor={'rgba(0, 0, 0, 0.5)'}
                />
              )}
            </ButtonGroup>
          </HeroSection>
        </>
      </MainHero>
    </>
  );
}
