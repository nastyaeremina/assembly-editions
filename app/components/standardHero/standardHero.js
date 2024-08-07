'use client';
import React, { useMemo } from 'react';
import SolutionHero from './solutionhero/solutionhero';
import HomeHeroSection from './hybrid';
import SimpleSection from './simpleSection/simpleSection';

export const HeroTypes = {
  LEFT: 'Hero - Left',
  CENTER: 'Hero - Center',
  SIMPLE: 'Hero - Simple',
  SIMPLE_ALT: 'Simple'
};
export default function StandardHero({ type, data }) {
  // useMemo to memoize the component to be rendered based on the type prop
  const renderComponent = useMemo(() => {
    switch (type) {
      case HeroTypes.LEFT:
        return (
          <SolutionHero
            title={data?.heroTitle} // Title for the hero section
            description={data?.heroDescription} // Description for the hero section
            mobileImage={data?.banner2?.url} // URL for the mobile banner image
            webImage={data?.banner1?.url} // URL for the web banner image
            primaryButtonText={data?.primaryButtonText} // Text for the primary button
            primaryButtonLink={data?.primaryButtonLink} // Link for the primary button
            secondaryButtonText={data?.secondaryButtonText} // Text for the secondary button
            secondaryButtonLink={data?.secondaryButtonLink} // Link for the secondary button
            isStandardPage={true}
          />
        );
      case HeroTypes.CENTER:
        return (
          <HomeHeroSection
            title={data?.heroTitle}
            body={data?.heroBody}
            image1={data?.banner1?.url}
            isLight={true}
            isStandardPage={true}
            ratingList={data?.rating}
            primaryButtonText={data?.primaryButtonText}
            primaryButtonLink={data?.primaryButtonLink}
            secondaryButtonText={data?.secondaryButtonText}
            secondaryButtonLink={data?.secondaryButtonLink}
          />
        );
      case HeroTypes.SIMPLE:
        return (
          <SimpleSection
            title={data?.heroTitle}
            description={data?.heroDescription}
            primaryButtonText={data?.primaryButtonText}
            primaryButtonLink={data?.primaryButtonLink}
            secondaryButtonText={data?.secondaryButtonText}
            secondaryButtonLink={data?.secondaryButtonLink}
            banner={data?.banner1?.url}
            videoUrl={data?.videoUrl}
            isHeading1
          />
        );
      case HeroTypes.SIMPLE_ALT:
        return (
          <SimpleSection
            title={data?.heroTitle}
            description={data?.heroDescription}
            primaryButtonText={data?.primaryButtonText}
            primaryButtonLink={data?.primaryButtonLink}
            secondaryButtonText={data?.secondaryButtonText}
            secondaryButtonLink={data?.secondaryButtonLink}
            banner={data?.banner1?.url}
            videoUrl={data?.videoUrl}
          />
        );
      default: // or some default component or message
        return null;
    }
  }, [
    data?.banner1?.url,
    data?.banner2?.url,
    data?.heroBody,
    data?.heroDescription,
    data?.heroTitle,
    data?.primaryButtonLink,
    data?.primaryButtonText,
    data?.rating,
    data?.secondaryButtonLink,
    data?.secondaryButtonText,
    data?.videoUrl,
    type
  ]);

  return <div>{renderComponent}</div>;
}
