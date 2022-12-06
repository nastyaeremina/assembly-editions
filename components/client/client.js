import Link from 'next/link';
import Image from 'next/image';
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

export default function Client({ currentModule }) {
  return (
    <ClientMain>
      <Container>
        <ClientHero>
          <h3>Go beyond billing and streamline the client experience further</h3>
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
                      Billling
                      <svg class='HoverArrow' width='10' height='10' viewBox='0 0 10 10' aria-hidden='true'>
                        <g fill-rule='evenodd'>
                          <path class='HoverArrow__linePath' d='M0 5h7'></path>
                          <path class='HoverArrow__tipPath' d='M1 1l4 4-4 4'></path>
                        </g>
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
                    <HelpLink className='icon-link'>
                      Messaging
                      <svg class='HoverArrow' width='10' height='10' viewBox='0 0 10 10' aria-hidden='true'>
                        <g fill-rule='evenodd'>
                          <path class='HoverArrow__linePath' d='M0 5h7'></path>
                          <path class='HoverArrow__tipPath' d='M1 1l4 4-4 4'></path>
                        </g>
                      </svg>
                    </HelpLink>
                  </HelpLeftSub>
                </Link>
              </ModuleCard>
            )}
          </CardSection>
          <BlockSection>
            <Image
              src='/images/block.svg'
              alt='red-icon'
              width={185}
              height={145}
              // layout={"fixed"}
              className='show'
            />
            <Image
              src='/images/blockhover.svg'
              alt='red-icon'
              width={185}
              height={145}
              // layout={"fixed"}
              className='hide'
            />

            <BlockText>
              <h3>
                Embed products you already use to unify your interactions with clients, giving them an experience that’s
                proven to imrpove retention
              </h3>
              <HelpLeftSub>
                <HelpLink className='icon-link'>
                  <a href='#' className='learn-link mb0'>
                    Explore apps
                    <svg class='HoverArrow' width='10' height='10' viewBox='0 0 10 10' aria-hidden='true'>
                      <g fill-rule='evenodd'>
                        <path class='HoverArrow__linePath' d='M0 5h7'></path>
                        <path class='HoverArrow__tipPath' d='M1 1l4 4-4 4'></path>
                      </g>
                    </svg>
                  </a>
                </HelpLink>
              </HelpLeftSub>
            </BlockText>
          </BlockSection>
        </ClientHero>
      </Container>
    </ClientMain>
  );
}
