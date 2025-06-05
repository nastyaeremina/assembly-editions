'use client';

import ReactMarkdown from 'react-markdown';
import ButtonGroup from '../ButtonGroup/buttonGroup';
import { isEmpty } from '../../helpers/helpers';
import { MainHero, SubHeroSection, SubHeroCaption } from './style';
/**
 * SubHeroComponent
 * @param {Object} props - Component props
 * @param {Object} props.data - Data for the hero section
 * @param {boolean} [props.hasFullWidth=false] - Flag indicating if the section should be full width
 * @returns {JSX.Element} - JSX markup for the SubHeroComponent
 */

export default function SubHeroComponent({ data, hasFullWidth = false }) {
  if (isEmpty(data)) return null;
  return (
    <>
      <MainHero>
        <>
          <SubHeroSection hasFullWidth={hasFullWidth}>
            <h2>{data.heroTitle}</h2>
            <SubHeroCaption hasFullWidth={hasFullWidth}>
              <ReactMarkdown>{data.heroDescription}</ReactMarkdown>
            </SubHeroCaption>
            <ButtonGroup
              primaryButtonLink={data.primaryButtonLink}
              primaryButtonText={data.primaryButtonText}
              secondaryButtonLink={data.secondaryButtonLink}
              secondaryButtonText={data.secondaryButtonText}
              marginTop={28}
            />
          </SubHeroSection>
        </>
      </MainHero>
    </>
  );
}
