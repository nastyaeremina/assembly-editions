'use client';

import Image from 'next/image';
import { AppsDetailMain } from '../../../styles/appsStyles';
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
import BackComponent from '../../backComponent/backComponent';

export default function AutomationDetailPage({ detail, relatedApps }) {
  if (isEmpty(detail)) return null;
  return (
    <>
      <AppsDetailMain>
        <BackComponent backtext={'Back to all Automations'} href={'/automations/directory'} isDirectorydetail />
      </AppsDetailMain>
      <Container>
        <LogoSection>
          {detail.productLogosCollection?.items?.map((logo, index) => {
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
        <DetailTitle>{detail.name}</DetailTitle>
        <DetailCaption>{detail.description}</DetailCaption>
        <DetailButtonSection>
          {!isEmpty(detail.zapierLink) && (
            <Button
              bgColor={'--primary'}
              fontColor={'--white'}
              borderColor={'--primary'}
              text={'Go to Zapier'}
              href={detail.zapierLink}
              hoverColor={'--secondary-hover-color'}
              target={'_blank'}
              isicon={true}
              imgUrl={Vector}
              className={'iconbutton'}
              isCamelCase={false}
            />
          )}
          {!isEmpty(detail.makeLink) && (
            <Button
              bgColor={'--primary'}
              fontColor={'--white'}
              borderColor={'--primary'}
              text={'Go to Make'}
              href={detail.makeLink}
              hoverColor={'--secondary-hover-color'}
              target={'_blank'}
              isicon={true}
              imgUrl={Make}
              isCamelCase={false}
            />
          )}
          {!isEmpty(detail.apiLink) && (
            <Button
              bgColor={'transparent'}
              fontColor={'--black'}
              borderColor={'--black'}
              text={'Read setup instructions'}
              href={detail.apiLink}
              hoverColor={'--hover-color'}
              target={'_blank'}
            />
          )}
        </DetailButtonSection>
      </Container>
      <ImageSection>
        <Container>
          <Image
            src={detail.automationImage?.url}
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
