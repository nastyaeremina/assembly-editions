'use client';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import React, { useMemo, useState } from 'react';
import { isEmpty } from '../../helpers/helpers';
import { Container, PrimaryButton } from '../../styles/commonStyles';
import { ImgLine } from '../bookdemo/styles';
import {
  BtnWrap,
  HeroSection,
  ImageView,
  LeftWrap,
  MobileView,
  RightWrap,
  SolutionWrap
} from '../solution/solutionhero/styles';
import WeeklyDemoForm from './form';
import {
  Card,
  FormLine,
  FormRightLine,
  Line,
  MobileProfile,
  Profile,
  Profile2,
  Profiledetail,
  SpeakerProfile,
  Speakers,
  TextSection,
  TextWrap,
  Time,
  FormHeading3
} from './styles';

export default function WeeklyHero({ data }) {
  const [isRegister, setIsRegister] = useState(false);

  const sdpeakersRenderDynamic = useMemo(() => {
    if (isEmpty(data?.speakerCollection?.items)) return null;
    return data?.speakerCollection?.items?.map((item, index) => {
      return (
        <Profile key={`speakes_index_${index}`}>
          {!isEmpty(item?.profilePicture?.url) && (
            <Link href={item?.profileLink ?? ''} target='_blank' key={`teammember_index_${index}`}>
              <Image
                src={item?.profilePicture?.url}
                alt='profile'
                width={40}
                height={40}
                layout={'fixed'}
                className='tooltip'
              />
            </Link>
          )}
          <MobileProfile>
            {!isEmpty(item?.name) && <p>{item?.name}</p>}
            {!isEmpty(item?.about) && <span>{item?.about}</span>}
          </MobileProfile>
          <Profiledetail className='tooltiptext'>
            <Line>
              <svg width='2' height='57' viewBox='0 0 2 57' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <line x1='1' y1='4.37114e-08' x2='0.999997' y2='57' stroke='#00160E' stroke-width='2' />
              </svg>
            </Line>
            {!isEmpty(item?.name) && <p>{item?.name}</p>}
            {!isEmpty(item?.about) && <span>{item?.about}</span>}
          </Profiledetail>
        </Profile>
      );
    });
  }, [data?.speakerCollection?.items]);
  return (
    <HeroSection>
      <Container>
        <SolutionWrap isWeeklycontainer={true}>
          <LeftWrap>
            <Time>
              <p>{data?.tag}</p>
            </Time>
            <TextSection>
              <h1>
                <div>{data?.header}</div>
              </h1>
              <div style={{ margin: '20px 0' }}>
                {!isEmpty(data?.body?.json) && documentToReactComponents(data?.body?.json)}
              </div>
              {!isEmpty(data?.speakerCollection?.items) && (
                <Speakers>
                  <p>Speakers</p>
                  <SpeakerProfile>{sdpeakersRenderDynamic}</SpeakerProfile>
                </Speakers>
              )}
            </TextSection>
          </LeftWrap>
          <RightWrap className={classNames('weeklydemo-form', { 'message-card': isRegister })}>
            <FormLine>
              <svg width='1' height='100' viewBox='0 0 1 100' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <line x1='0.5' y1='-2.18557e-08' x2='0.500004' y2='100' stroke='#00160E' />
              </svg>
            </FormLine>
            <FormRightLine></FormRightLine>
            <ImageView className='comparison-img '>
              {isRegister ? (
                <Card>
                  <ImgLine>
                    <Image src='/images/upline.svg' alt='line-icon' width={200} height={25} />
                  </ImgLine>
                  <TextWrap>
                    <h2>Registration successful</h2>
                  </TextWrap>
                  <ImgLine>
                    <Image src='/images/downline.svg' alt='line-icon' width={200} height={25} />
                  </ImgLine>
                </Card>
              ) : (
                <>
                  <iframe
                    width='100%'
                    title='weekly-demo'
                    height='900'
                    frameborder='0'
                    // eslint-disable-next-line react/style-prop-object
                    style={{ overflow: 'hidden' }}
                    src='https://app.livestorm.co/p/3646fef7-f43b-4c20-a6d4-1b1c9c2ef665/form'></iframe>
                </>
                // <WeeklyDemoForm />
              )}
            </ImageView>
          </RightWrap>
        </SolutionWrap>
      </Container>
    </HeroSection>
  );
}
