'use client';
import React, { useMemo } from 'react';
import { HeroTypes } from '../../constants/constant';
import SolutionHero from './solutionhero/solutionhero';
import HomeHeroSection from './hybrid';
import SimpleSection from './simpleSection/simpleSection';

export default function StandardHero({ type, data, isDownload = false, variant = HeroTypes.CENTER }) {
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
            isShowSocialProof={data.showSocialProof}
          />
        );
      case HeroTypes.CENTER:
        return (
          <HomeHeroSection
            title={data?.heroTitle}
            body={data?.heroDescription}
            image={data?.banner1?.url}
            isStandardPage={true}
            primaryButtonText={data?.primaryButtonText}
            primaryButtonLink={data?.primaryButtonLink}
            secondaryButtonText={data?.secondaryButtonText}
            secondaryButtonLink={data?.secondaryButtonLink}
            isDownload={isDownload}
            variant={variant}
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
    data?.heroDescription,
    data?.heroTitle,
    data?.primaryButtonLink,
    data?.primaryButtonText,
    data?.rating,
    data?.secondaryButtonLink,
    data?.secondaryButtonText,
    data.showSocialProof,
    data?.videoUrl,
    isDownload,
    type
  ]);

  return <div>{renderComponent}</div>;
}
