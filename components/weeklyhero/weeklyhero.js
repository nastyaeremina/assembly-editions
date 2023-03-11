import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
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
  Time
} from './styles';

export default function WeeklyHero() {
  const [isRegister, setIsRegister] = useState(false);
  return (
    <HeroSection>
      <Container>
        <SolutionWrap isWeeklycontainer={true}>
          <LeftWrap>
            <Time>
              <p>Every Thursday at 10 a.m. EST</p>
            </Time>
            <TextSection>
              <h1>
                <div>Weekly Live Demo</div>
              </h1>
              <p>
                Join our team as we take you on a tour of the Copilot platform in a 20-minute demo followed by a live
                Q&A.
              </p>
              <p className='demo-detail'>
                Copilot’s product suite gives you an all-in-one solution for client communication, payments,
                file-sharing, contracts, forms, help desks, and more. Additionally, Copilot lets you offer your clients
                a unified experience with a branded client portal.
              </p>
              <Speakers>
                <p>Speakers</p>
                <SpeakerProfile>
                  <Profile>
                    <Image
                      src={'/images/adamprofile.png'}
                      alt='profile'
                      width={40}
                      height={40}
                      layout={'fixed'}
                      className='tooltip'
                    />
                    <MobileProfile>
                      <p>Adam Seitzman</p>
                      <span>Adam is the Head of Sales at Copilot. </span>
                    </MobileProfile>
                    <Profiledetail className='tooltiptext'>
                      <Line>
                        <svg width='2' height='57' viewBox='0 0 2 57' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <line x1='1' y1='4.37114e-08' x2='0.999997' y2='57' stroke='#00160E' stroke-width='2' />
                        </svg>
                      </Line>
                      <p>Adam Seitzman</p>
                      <span>Adam is the Head of Sales and Partnerships at Copilot</span>
                    </Profiledetail>
                  </Profile>
                  <Profile2>
                    <Image
                      src={'/images/alleneprofile.png'}
                      alt='profile'
                      width={40}
                      height={40}
                      layout={'fixed'}
                      className='tooltip'
                    />
                    <MobileProfile>
                      <p>Allene Norton</p>
                      <span>Allene is the Head of Support and Developer Relationships Lead at Copilot </span>
                    </MobileProfile>
                    <Profiledetail className='tooltiptext'>
                      <Line>
                        <svg width='2' height='57' viewBox='0 0 2 57' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <line x1='1' y1='4.37114e-08' x2='0.999997' y2='57' stroke='#00160E' stroke-width='2' />
                        </svg>
                      </Line>
                      <p>Allene Norton</p>
                      <span>Allene is the Head of Support and Developer Relationships Lead at Copilot</span>
                    </Profiledetail>
                  </Profile2>
                </SpeakerProfile>
              </Speakers>
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
                <WeeklyDemoForm />
              )}
            </ImageView>
          </RightWrap>
        </SolutionWrap>
      </Container>
    </HeroSection>
  );
}
