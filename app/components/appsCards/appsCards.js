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
import AppTooltip from './appTooltip';

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
  reviews,
  isFeature
}) {
  const shouldShowFirstBullet = !isEmpty(reviews) && reviews !== 0 && !isEmpty(appType);
  const shouldShowSecondBullet = !isEmpty(appType) && !isEmpty(pricingStatus);

  return (
    <CardSub>
      <Link href={link}>
        <CardTop isFeature={isFeature}>
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
                      <AppTooltip message={appTypeInfo} iconSize='13' fill='var(--dark-gray)' style={{ top: 26 }} />
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
          <AppTooltip message={appVisibilityInfo} iconSize='13' fill='var(--dark-gray)' style={{ top: 24 }} />
        </CardEnd>
      </Link>
    </CardSub>
  );
}
