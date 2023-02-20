import Link from 'next/link';
import Image from 'next/image';
import { isEmpty } from '../../helpers/helpers';
import { MUDULE_LIST } from '../../constants/constant';
import { Container } from '../../styles/commonStyles';
import {
  ClientMain,
  ClientHero,
  CardSection,
  ModuleCard,
  CardText,
  BlockSection,
  BlockText,
  BlockWrap,
  HelpLeftSub,
  ImageWrapper,
  HelpLink
} from './styles';

export default function Client({ currentModule, title }) {
  const titleSplitList = title?.split(',');
  const seprateWithDotList = titleSplitList?.join(`<span>,</span>`)?.split('.');
  const finalTitle = seprateWithDotList?.join(`<span>.</span>`);

  return (
    <ClientMain>
      <Container>
        <ClientHero>
          {!isEmpty(title) && (
            <h2>
              <div dangerouslySetInnerHTML={{ __html: finalTitle }} />
            </h2>
          )}
          <CardSection>
            {currentModule !== MUDULE_LIST.BILLING && (
              <ModuleCard className='mydiv'>
                <Link href='/features/billing-app' className='learn-link mb0'>
                  <ImageWrapper>
                    <Image
                      src='/images/bill.svg'
                      alt='red-icon'
                      width={220}
                      height={165}
                      layout={'fixed'}
                      className='show'
                    />
                    <Image
                      src='/images/billhover.svg'
                      alt='red-icon'
                      width={220}
                      height={165}
                      layout={'fixed'}
                      className='hide'
                    />
                  </ImageWrapper>
                  <HelpLeftSub>
                    <HelpLink className='icon-link'>
                      Billing
                      <svg className='HoverArrow' width='10' height='10' viewBox='0 0 10 10' aria-hidden='true'>
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
            )}
            {currentModule !== MUDULE_LIST.FILES && (
              <ModuleCard className='mydiv file'>
                <Link href='/features/files-app' className='learn-link mb0'>
                  <ImageWrapper>
                    <Image
                      src='/images/file.svg'
                      alt='red-icon'
                      width={220}
                      height={165}
                      layout={'fixed'}
                      className='show'
                    />
                    <Image
                      src='/images/filehover.svg'
                      alt='red-icon'
                      width={220}
                      height={165}
                      layout={'fixed'}
                      className='hide'
                    />
                  </ImageWrapper>
                  <HelpLeftSub>
                    <HelpLink className='icon-link'>
                      Files
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
            )}
            {currentModule !== MUDULE_LIST.FORMS && (
              <ModuleCard className='mydiv form'>
                <Link href='/features/forms-app' className='learn-link mb0'>
                  <ImageWrapper>
                    <Image
                      src='/images/form.svg'
                      alt='red-icon'
                      width={220}
                      height={165}
                      layout={'fixed'}
                      className='show'
                    />
                    <Image
                      src='/images/formhover.svg'
                      alt='red-icon'
                      width={220}
                      height={165}
                      layout={'fixed'}
                      className='hide'
                    />
                  </ImageWrapper>
                  <HelpLeftSub>
                    <HelpLink className='icon-link'>
                      Forms
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
            )}
            {currentModule !== MUDULE_LIST.HELPDESK && (
              <ModuleCard className='mydiv Helpdesk'>
                <Link href='/features/helpdesk-app' className='learn-link mb0'>
                  <ImageWrapper>
                    <Image
                      src='/images/base.svg'
                      alt='red-icon'
                      width={220}
                      height={165}
                      layout={'fixed'}
                      className='show'
                    />
                    <Image
                      src='/images/basehover.svg'
                      alt='red-icon'
                      width={220}
                      height={165}
                      layout={'fixed'}
                      className='hide'
                    />
                  </ImageWrapper>
                  <HelpLeftSub>
                    <HelpLink className='icon-link'>
                      Helpdesk
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
            )}
            {currentModule !== MUDULE_LIST.MESSAGING && (
              <ModuleCard className='mydiv message'>
                <Link href='/features/messaging-app' className='learn-link mb0'>
                  <ImageWrapper>
                    <Image
                      src='/images/Messageicon.svg'
                      alt='red-icon'
                      width={220}
                      height={165}
                      layout={'fixed'}
                      className='show'
                    />
                    <Image
                      src='/images/messagehover.svg'
                      alt='red-icon'
                      width={220}
                      height={165}
                      layout={'fixed'}
                      className='hide'
                    />
                  </ImageWrapper>
                  <HelpLeftSub>
                    <HelpLink className='icon-link icon-message'>
                      Messaging
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
            )}
          </CardSection>
          <Link href='/apps' className='learn-link center'>
            <BlockSection>
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
          </Link>
        </ClientHero>
      </Container>
    </ClientMain>
  );
}
