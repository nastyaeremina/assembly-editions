'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useMemo } from 'react';
import { isEmpty } from '../../helpers/helpers';
import { FEATURE_THEME_LIST } from '../../constants/constant';
import { Container } from '../../styles/commonStyles';
import {
  ClientMain,
  ClientHero,
  CardSection,
  ModuleCard,
  BlockSection,
  BlockText,
  HelpLeftSub,
  ImageWrapper,
  HelpLink
} from './styles';

export default function Client({ data, title, isProductdemo }) {
  const titleSplitList = title?.split(',');
  const seprateWithDotList = titleSplitList?.join(`<span>,</span>`)?.split('.');
  const finalTitle = seprateWithDotList?.join(`<span>.</span>`);

  const renderFeatureAppView = useMemo(() => {
    if (isEmpty(data)) return null;
    return data?.map((item, index) => {
      return (
        <ModuleCard
          key={`featureapp_index_${index}`}
          className={`mydiv ${item?.name?.toLowerCase()}`}
          isProductdemo={isProductdemo}
          bgImage={FEATURE_THEME_LIST[item?.theme]?.imageList.bgImage}
          strokecolor={FEATURE_THEME_LIST[item?.theme]?.colorList?.lineColor}>
          <Link href={`/features/${item?.slug}`} className='learn-link mb0'>
            <ImageWrapper>
              <div dangerouslySetInnerHTML={{ __html: item?.featureIconSvg }} />
            </ImageWrapper>
            <HelpLeftSub>
              <HelpLink className='icon-link'>
                {item?.name}
                <svg class='HoverArrow' width='10' height='10' viewBox='0 0 10 10' aria-hidden='true'>
                  <g fill-rule='evenodd'>
                    <path class='HoverArrow__linePath' d='M0 5h7'></path>
                    <path class='HoverArrow__tipPath' d='M1 1l4 4-4 4'></path>
                  </g>
                </svg>
                <svg
                  width='8'
                  height='14'
                  viewBox='0 0 8 14'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  class='mobilearrow'>
                  <path
                    d='M2 3L6 7L2 11'
                    stroke='#131313'
                    stroke-width='1.85714'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              </HelpLink>
            </HelpLeftSub>
          </Link>
        </ModuleCard>
      );
    });
  }, [data, isProductdemo]);

  return (
    <ClientMain>
      <Container>
        <ClientHero>
          {!isEmpty(title) && (
            <h2>
              <div dangerouslySetInnerHTML={{ __html: finalTitle }} />
            </h2>
          )}
          <CardSection isProductdemo={isProductdemo}>
            {renderFeatureAppView}
            {/* <LastCardSection> */}
            {/* <Link href='/apps' className='learn-link center'> */}
            <BlockSection href='/apps' className='learn-link center'>
              <Image src='/images/block.svg' alt='red-icon' width={185} height={145} className='show' />
              <Image src='/images/blockhover.svg' alt='red-icon' width={185} height={145} className='hide' />

              <BlockText>
                <h3>
                  Embed products like Airtable, Calendly, Jotform, and Custom Apps to streamline the client experience
                  even more.
                </h3>
                <HelpLeftSub>
                  <HelpLink className='icon-link'>
                    <Link href='/apps' className='learn-link center'>
                      Apps
                      <svg class='HoverArrow' width='10' height='10' viewBox='0 0 10 10' aria-hidden='true'>
                        <g fill-rule='evenodd'>
                          <path class='HoverArrow__linePath' d='M0 5h7'></path>
                          <path class='HoverArrow__tipPath' d='M1 1l4 4-4 4'></path>
                        </g>
                      </svg>
                      <svg
                        width='8'
                        height='14'
                        viewBox='0 0 8 14'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        class='mobilearrow'>
                        <path
                          d='M2 3L6 7L2 11'
                          stroke='#131313'
                          stroke-width='1.85714'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </svg>
                    </Link>
                  </HelpLink>
                </HelpLeftSub>
              </BlockText>
            </BlockSection>
            {/* </Link> */}

            {isProductdemo && (
              <>
                {/* <Link > */}
                <BlockSection href='/automations' className='learn-link center'>
                  <Image src='/images/lastpcard.svg' alt='red-icon' width={185} height={145} className='show' />
                  <Image src='/images/lasthovercard.svg' alt='red-icon' width={185} height={145} className='hide' />

                  <BlockText>
                    <h3>
                      Save time on mundane admin work and automate the client experience. Copilot works with 1000s of
                      popular products you can connect via API, Zapier, or Make. Start saving time and focus on what
                      sets you apart.
                    </h3>
                    <HelpLeftSub>
                      <HelpLink className='icon-link'>
                        <Link href='/apps' className='learn-link center'>
                          Automations
                          <svg class='HoverArrow' width='10' height='10' viewBox='0 0 10 10' aria-hidden='true'>
                            <g fill-rule='evenodd'>
                              <path class='HoverArrow__linePath' d='M0 5h7'></path>
                              <path class='HoverArrow__tipPath' d='M1 1l4 4-4 4'></path>
                            </g>
                          </svg>
                          <svg
                            width='8'
                            height='14'
                            viewBox='0 0 8 14'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                            class='mobilearrow'>
                            <path
                              d='M2 3L6 7L2 11'
                              stroke='#131313'
                              stroke-width='1.85714'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                          </svg>
                        </Link>
                      </HelpLink>
                    </HelpLeftSub>
                  </BlockText>
                </BlockSection>
                {/* </Link> */}
              </>
            )}
            {/* </LastCardSection> */}
          </CardSection>
        </ClientHero>
      </Container>
    </ClientMain>
  );
}
