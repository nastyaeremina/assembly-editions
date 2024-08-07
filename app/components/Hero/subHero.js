'use client';

import ReactMarkdown from 'react-markdown';
import Button from '../button/button';
import { isEmpty } from '../../helpers/helpers';
import { black } from '../../styles/color';
import { MainHero, ButtonGroup, SubHeroSection, SubHeroCaption } from './style';

/**
 * SubHeroComponent
 * @param {Object} props - Component props
 * @param {Object} props.data - Data for the hero section
 * @param {boolean} [props.hasFullWidth=false] - Flag indicating if the section should be full width
 * @returns {JSX.Element} - JSX markup for the SubHeroComponent
 */

export default function SubHeroComponent({ data, hasFullWidth = false }) {
  const showPrimaryButton = !isEmpty(data?.primaryButtonText) && !isEmpty(data?.primaryButtonLink);
  const showSecondaryButton = !isEmpty(data?.secondaryButtonText) && !isEmpty(data?.secondaryButtonLink);
  return (
    <>
      <MainHero>
        <>
          <SubHeroSection hasFullWidth={hasFullWidth}>
            <h1>{data?.heroTitle}</h1>
            <SubHeroCaption hasFullWidth={hasFullWidth}>
              <ReactMarkdown>{data?.heroDescription}</ReactMarkdown>
            </SubHeroCaption>
            {(showPrimaryButton || showSecondaryButton) && (
              <ButtonGroup>
                {showPrimaryButton && (
                  <Button text={data?.primaryButtonText} href={data?.primaryButtonLink} className={'button-section'} />
                )}
                {showSecondaryButton && (
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
            )}
          </SubHeroSection>
        </>
      </MainHero>
    </>
  );
}
