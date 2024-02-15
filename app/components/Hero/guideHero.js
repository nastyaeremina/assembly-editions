'use client';
import ReactMarkdown from 'react-markdown';
import { isEmpty } from '../../helpers/helpers';
import { Caption, HeroSection, PageTitle } from './style';

export default function GuideHeroComponent({ title, description }) {
  return (
    <>
      <HeroSection>
        {!isEmpty(title) && <PageTitle>{title}</PageTitle>}
        {!isEmpty(description) && (
          <Caption>
            <ReactMarkdown>{description}</ReactMarkdown>
          </Caption>
        )}
      </HeroSection>
    </>
  );
}
