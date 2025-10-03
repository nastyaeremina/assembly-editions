import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SVGComponent from '../../../public/images/svg/SVGComponent';
import { isEmpty } from '../../helpers/helpers';
import {
  AppInformativeSection,
  ArrowIcon,
  BottomSection,
  CardDescription,
  CardEnd,
  CardInfo,
  CardSub,
  CardTitle,
  CardTop,
  CardTopInfo,
  CardTopSectionWrapper,
  ImgView,
  RatingNumber,
  RatingSection,
  ReviewSection
} from './styles';
import Tooltip from './tooltip';

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
          <CardTopSectionWrapper>
            <CardTopInfo>
              <CardInfo>
                {!isEmpty(icon) && (
                  <ImgView>
                    <Image src={icon} alt='app-icon' width={44} height={44} layout={'fixed'} />
                  </ImgView>
                )}
                <CardTitle>{!isEmpty(title) && <p>{title}</p>} </CardTitle>
              </CardInfo>
              <ArrowIcon>
                <SVGComponent
                  name='blog-card-hover-arrow-icon'
                  width='20'
                  height='20'
                  viewBox='0 0 16 16'
                  className='svg-icon'
                />
              </ArrowIcon>
            </CardTopInfo>
            <CardDescription>{description}</CardDescription>
          </CardTopSectionWrapper>
          <BottomSection>
            <ReviewSection isBottom={isBottom}>
              <RatingSection>
                {!isEmpty(reviews) && reviews !== 0 && (
                  <RatingNumber>
                    <p>{rate}</p>
                    <p>({reviews})</p>
                  </RatingNumber>
                )}
                {shouldShowFirstBullet && (
                  <SVGComponent
                    name='bullet-point-icon'
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                    className='dot-icon'
                  />
                )}
                {!isEmpty(appType) && (
                  <>
                    <AppInformativeSection>
                      <p>{appType}</p>
                      <Tooltip
                        message={appTypeInfo}
                        iconSize='12'
                        fill='var(--text-secondary)'
                        style={{ top: -8, marginLeft: 13 }}
                      />
                    </AppInformativeSection>
                  </>
                )}
                {shouldShowSecondBullet && (
                  <SVGComponent
                    name='bullet-point-icon'
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                    className='dot-icon'
                  />
                )}
                {!isEmpty(pricingStatus) && <p>{pricingStatus}</p>}
              </RatingSection>
            </ReviewSection>
            {isBottom && (
              <CardEnd isBottom={isBottom}>
                <p>{appVisibility}</p>
                <Tooltip
                  message={appVisibilityInfo}
                  iconSize='12'
                  fill='var(--text-secondary)'
                  style={{ top: -8, marginLeft: 13 }}
                />
              </CardEnd>
            )}
          </BottomSection>
        </CardTop>
      </Link>
    </CardSub>
  );
}
