'use client';
import React from 'react';
import Link from 'next/link';
import { isEmpty } from '../../helpers/helpers';
import { AboutSection, Info, InfoDescription, InfoDiv, InfoTitle, Title } from './templateBodyStyle';
import Button from '../button/button';
import AppTooltip from '../appsCards/appTooltip';
import ButtonV2Component from '../button/buttonV2/buttonV2';
import { ButtonVariant } from '../../constants/constant';
import { useIsMobile } from '../../hooks/useMobileDevice';

export default function AboutComponent({ data, buttonText, buttonLink, isDirectory, showTitle = true }) {
  const shouldButtonShow = !isEmpty(buttonText) && !isEmpty(buttonLink);
  const renderAboutItems = () => {
    const isMobile = useIsMobile();
    return data.map((item, index) => {
      if (isEmpty(item.value)) return null;
      return (
        <>
          <InfoDiv>
            <InfoTitle>
              <p>{item.label}</p>
              {!isEmpty(item.labelInfo) && (
                <AppTooltip
                  message={item.labelInfo}
                  iconSize={isMobile ? '12' : '16'}
                  fill='var(--title)'
                  mainDivStyle={{ marginTop: 'var(--space-5)' }}
                  isAppDetailtooltip
                />
              )}
            </InfoTitle>
            <InfoDescription>
              {isEmpty(item.link) ? (
                <>
                  {item.value}
                  {!isEmpty(item.valueInfo) && (
                    <AppTooltip
                      message={item.valueInfo}
                      iconSize={isMobile ? '12' : '16'}
                      fill='var(--title)'
                      mainDivStyle={{ marginTop: 'var(--space-5)' }}
                      isAppDetailtooltip
                    />
                  )}
                </>
              ) : (
                <Link href={item.link} target='_blank'>
                  {item?.value}
                </Link>
              )}
            </InfoDescription>
          </InfoDiv>
        </>
      );
    });
  };
  return (
    <AboutSection isDirectory={isDirectory}>
      {showTitle && <Title>About</Title>}
      <Info hasSpacing={isDirectory}>
        {renderAboutItems()}
        {shouldButtonShow && (
          <ButtonV2Component
            title={buttonText}
            href={buttonLink}
            variant={ButtonVariant.SECONDARY_WITH_BORDER}
            target={'_blank'}
          />
        )}
      </Info>
    </AboutSection>
  );
}
