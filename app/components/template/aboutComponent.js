'use client';
import React from 'react';
import Link from 'next/link';
import { isEmpty } from '../../helpers/helpers';
import { AboutSection, Info, InfoDescription, InfoDiv, InfoTitle, Title } from './templateBodyStyle';
import Button from '../button/button';
import { black, gainsboro } from '../../styles/color';
import { Informative, Line } from '../appsCards/styles';
import AppTooltip from '../appsCards/appTooltip';
import SVGComponent from '../../../public/images/svg/SVGComponent';

export default function AboutComponent({ data, buttonText, buttonLink, isDirectory }) {
  const shouldButtonShow = !isEmpty(buttonText) && !isEmpty(buttonLink);
  const renderAboutItems = () => {
    return data.map((item, index) => {
      if (isEmpty(item.value)) return null;
      return (
        <>
          <InfoDiv>
            <InfoTitle>
              {item.label}
              {!isEmpty(item.labelInfo) && <AppTooltip message={item.labelInfo} />}
            </InfoTitle>
            <InfoDescription>
              {isEmpty(item.link) ? (
                <>
                  {item.value}
                  {!isEmpty(item.valueInfo) && <AppTooltip message={item.valueInfo} />}
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
      <Title>About</Title>
      <Info>
        {renderAboutItems()}
        {shouldButtonShow && (
          <Button
            bgColor={'transparent'}
            fontColor={black}
            borderColor={black}
            text={buttonText}
            href={buttonLink}
            target='_blank'
            hoverColor={gainsboro}
            className={'app-button'}
          />
        )}
      </Info>
    </AboutSection>
  );
}
