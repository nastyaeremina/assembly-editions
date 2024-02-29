'use client';

import Link from 'next/link';
import Image from 'next/image';
import { DetailLink, AppsDetailMain } from '../../../styles/appsStyles';
import { Container } from '../../../styles/commonStyles';
import {
  DetailButtonSection,
  DetailCaption,
  DetailTitle,
  ImageSection,
  LogoSection
} from '../../../styles/automationStyles';
import Vector from '../../../../public/images/vector.svg';
import Make from '../../../../public/images/make.svg';
import Button from '../../button/button';
import { isEmpty } from '../../../helpers/helpers';

export default function AutomationDetailPage({ detail, relatedApps }) {
  return (
    <>
      <AppsDetailMain>
        <Container>
          <Link href={'/automations/directory'}>
            <DetailLink>
              <svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M8.42969 1.37109L3.8012 5.99958L8.42969 10.6281'
                  stroke='#757575'
                  stroke-width='1.92854'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
              <p>Back to all Automations</p>
            </DetailLink>
          </Link>
        </Container>
      </AppsDetailMain>
      <Container>
        <LogoSection>
          {detail?.productLogosCollection?.items?.map((logo, index) => {
            return (
              <Image
                key={`automation_logo_${index}`}
                src={logo?.url}
                alt='logo'
                width={80}
                height={80}
                className='logo'
              />
            );
          })}
        </LogoSection>
        <DetailTitle>{detail?.name}</DetailTitle>
        <DetailCaption>{detail?.description}</DetailCaption>
        <DetailButtonSection>
          {!isEmpty(detail?.zapierLink) && (
            <Button
              bgColor={'#09AA6C'}
              fontColor={'#fff'}
              borderColor={'#09AA6C'}
              text={'Go to Zapier'}
              href={detail?.zapierLink}
              hoverColor={'rgba(255, 255, 255,0.8)'}
              target={'_blank'}
              isicon={true}
              imgUrl={Vector}
              className={'iconbutton'}
              isCamelCase={false}
            />
          )}
          {!isEmpty(detail?.makeLink) && (
            <Button
              bgColor={'#09AA6C'}
              fontColor={'#fff'}
              borderColor={'#09AA6C'}
              text={'Go to Make'}
              href={detail?.makeLink}
              hoverColor={'rgba(255, 255, 255,0.8)'}
              target={'_blank'}
              isicon={true}
              imgUrl={Make}
              isCamelCase={false}
            />
          )}
          {!isEmpty(detail?.apiLink) && (
            <Button
              bgColor={'transparent'}
              fontColor={'#000000'}
              borderColor={'#000000'}
              text={'Read setup instructions'}
              href={detail?.apiLink}
              hoverColor={'rgba(0, 0, 0, 0.5)'}
              target={'_blank'}
            />
          )}
        </DetailButtonSection>
      </Container>
      <ImageSection>
        <Container>
          <Image
            src={detail?.automationImage?.url}
            alt='detail-image'
            width={849}
            height={232}
            className='detailimage'
          />
        </Container>
      </ImageSection>
    </>
  );
}
