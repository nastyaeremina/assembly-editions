import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SVGComponent from '../../../public/images/svg/SVGComponent';
import { isEmpty } from '../../helpers/helpers';
import {
  AppInformativeSection,
  CardDescription,
  CardEnd,
  CardInfo,
  CardSub,
  CardTitle,
  CardTop,
  ImgView,
  Informative,
  Line,
  RatingNumber,
  RatingSection,
  Tooltip
} from './styles';

export default function AppsCards({
  appVisibility,
  appType,
  appTypeInfo,
  appVisibilityInfo,
  pricingStatus,
  icon,
  link,
  isBottom,
  title,
  rate,
  description,
  reviews
}) {
  const shouldShowFirstBullet = !isEmpty(reviews) && reviews !== 0 && !isEmpty(appType);
  const shouldShowSecondBullet = !isEmpty(appType) && !isEmpty(pricingStatus);

  return (
    <CardSub>
      <Link href={link}>
        <CardTop>
          <CardInfo>
            {!isEmpty(icon) && (
              <ImgView>
                <Image src={icon} alt='app-icon' width={40} height={40} layout={'fixed'} />
              </ImgView>
            )}
            <CardTitle>
              {!isEmpty(title) && <h3>{title}</h3>}{' '}
              <RatingSection>
                {!isEmpty(reviews) && reviews !== 0 && (
                  <RatingNumber>
                    <p>{rate}</p>
                    <SVGComponent name='green-star-icon' width='14' height='14' viewBox='14' />
                    <p>({reviews})</p>
                  </RatingNumber>
                )}
                {shouldShowFirstBullet && <SVGComponent name='bullet-point-icon' width='16' height='16' viewBox='16' />}
                {!isEmpty(appType) && (
                  <>
                    <AppInformativeSection>
                      <p>{appType}</p>
                      <Informative>
                        <SVGComponent name='information-icon' width='16' height='16' viewBox='16' />
                        <Tooltip className='tooltiptext' isApptooltip>
                          <Line>
                            <svg
                              width='2'
                              height='16'
                              viewBox='0 0 2 16'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'>
                              <line x1='1' y1='4.37114e-08' x2='0.999997' y2='57' stroke='#00160E' stroke-width='2' />
                            </svg>
                          </Line>
                          <p>{appTypeInfo}</p>
                        </Tooltip>
                      </Informative>
                    </AppInformativeSection>
                  </>
                )}
                {shouldShowSecondBullet && (
                  <SVGComponent name='bullet-point-icon' width='16' height='16' viewBox='16' />
                )}
                {!isEmpty(pricingStatus) && <p>{pricingStatus}</p>}
              </RatingSection>
            </CardTitle>
          </CardInfo>
          <CardDescription isBottom={isBottom}>{description}</CardDescription>
        </CardTop>
        <CardEnd isBottom={isBottom}>
          <p>{appVisibility}</p>
          <Informative>
            <SVGComponent name='informative-icon' width='13' height='13' viewBox='13' />
            <Tooltip className='tooltiptext'>
              <Line>
                <svg width='2' height='16' viewBox='0 0 2 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <line x1='1' y1='4.37114e-08' x2='0.999997' y2='57' stroke='#00160E' stroke-width='2' />
                </svg>
              </Line>
              <p>{appVisibilityInfo}</p>
            </Tooltip>
          </Informative>
        </CardEnd>
      </Link>
    </CardSub>
  );
}
