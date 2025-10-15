'use client';
import React from 'react';
import Link from 'next/link';
import { isEmpty } from '../../helpers/helpers';
import { AboutSection, Info, InfoDescription, InfoDiv, InfoTitle, Title } from './templateBodyStyle';
import Tooltip from '../appsCards/tooltip';
import { useIsMobile } from '../../hooks/useMobileDevice';

export default function AboutComponent({ data, buttonText, buttonLink, isDirectory, showTitle = true }) {
  const renderAboutItems = () => {
    const isMobile = useIsMobile();
    return data.map((item) => {
      if (isEmpty(item.value)) return null;
      return (
        <>
          <InfoDiv>
            <InfoTitle>
              <p>{item.label}</p>
              {!isEmpty(item.labelInfo) && (
                <Tooltip
                  message={item.labelInfo}
                  iconSize={isMobile ? '12' : '14'}
                  fill='var(--title)'
                  mainDivStyle={{ marginTop: 'var(--space-7)' }}
                  style={{ marginLeft: 14 }}
                />
              )}
            </InfoTitle>
            <InfoDescription>
              {isEmpty(item.link) ? (
                <>
                  {item.value}
                  {!isEmpty(item.valueInfo) && (
                    <Tooltip
                      message={item.valueInfo}
                      iconSize={isMobile ? '12' : '14'}
                      fill='var(--title)'
                      mainDivStyle={{ marginTop: 'var(--space-7)' }}
                      style={{ marginLeft: 14 }}
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
      <Info hasSpacing={isDirectory}>{renderAboutItems()}</Info>
    </AboutSection>
  );
}
