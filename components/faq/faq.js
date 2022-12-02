import Link from 'next/link';
import * as React from 'react';
import { Accordion, Panel } from 'baseui/accordion';
import { Container } from '../../styles/commonStyles';
import { useStyletron } from 'baseui';
import { FaqSection, FaqWrap, FaqTitle } from './styles';
import PlusIcon from '../../public/images/PlusIcons.svg';
import Plus from 'baseui/icon/plus';

function CustomPanel(props) {
  return <Panel {...props} />;
}

export default function FAQ({ enterprise }) {
  const [css] = useStyletron();
  return (
    <>
      <FaqSection enterprise={enterprise}>
        <Container>
          <FaqTitle>
            <h3 className='faqtitle'>Frequently Asked Questions</h3>
          </FaqTitle>
          <Accordion
            onChange={({ expanded }) => console.log(expanded)}
            overrides={{
              Header: {
                style: ({ $theme }) => ({
                  color: '#131313',
                  paddingTop: '40px',
                  paddingBottom: '0px',
                  paddingLeft: '0px',
                  paddingRight: '0px',
                  fontSize: '32px',
                  lineHeight: '34px',
                  fontFamily: 'Bagoss',
                  fontWeight: '400',
                  backgroundColor: 'transparent'
                  // ":hover": {
                  //   color: "white",
                  // },
                })
              },
              Content: {
                style: ({ $theme }) => ({
                  backgroundColor: 'transparent',
                  paddingTop: '20px',
                  paddingBottom: '0px',
                  paddingLeft: '0px',
                  paddingRight: '72px',
                  color: '#4C4C4C',
                  fontSize: '24px',
                  lineHeight: '31px',
                  fontFamily: 'Bagoss',
                  fontWeight: '400',
                  letterSpacing: '0.02em'
                })
              },
              ContentAnimationContainer: {
                style: ({ $theme }) => ({
                  padding: '0px'
                })
              },
              PanelContainer: {
                style: ({ $theme }) => ({
                  borderBottomColor: '#131313',
                  overflow: 'hidden',
                  paddingBottom: '40px',
                  transition: 'all 350ms ease-in-out',
                  ':hover': {
                    backgroundColor: 'rgba(5, 255, 0, 0.12)'
                  }
                })
              },
              ToggleIcon: {
                style: ({ $theme }) => ({
                  color: '#000000',
                  paddingRight: '0',
                  width: '32px',
                  height: '32px'
                })
              },
              ToggleIconGroup: {
                style: ({ $theme }) => ({
                  fontWeight: '100',
                  paddingRight: '0',
                  fontSize: '32px'
                })
              }
            }}>
            <CustomPanel title='Who is Copilot intended for?'>
              Copilot is a technology company that builds infrastructure for the services economy. Businesses of every
              size — from small agencies to large law firms — use Portal building blocks to productize their business
              and provide clients a streamlined experience.
            </CustomPanel>
            <CustomPanel title='What’s the difference between a marketing site & copilot ?'>
              Copilot is a technology company that builds infrastructure for the services economy. Businesses of every
              size — from small agencies to large law firms — use Portal building blocks to productize their business
              and provide clients a streamlined experience.
            </CustomPanel>
            <CustomPanel title='How many users can you have ?'>
              Copilot is a technology company that builds infrastructure for the services economy. Businesses of every
              size — from small agencies to large law firms — use Portal building blocks to productize their business
              and provide clients a streamlined experience.
            </CustomPanel>
            <CustomPanel title='Is Copilot secure ?  Where is my data stored ?'>
              Copilot is a technology company that builds infrastructure for the services economy. Businesses of every
              size — from small agencies to large law firms — use Portal building blocks to productize their business
              and provide clients a streamlined experience.
            </CustomPanel>
            <CustomPanel title='How many users can you have ?'>
              Copilot is a technology company that builds infrastructure for the services economy. Businesses of every
              size — from small agencies to large law firms — use Portal building blocks to productize their business
              and provide clients a streamlined experience.
            </CustomPanel>
            <CustomPanel title='What’s the difference between a marketing site & copilot ?'>
              Copilot is a technology company that builds infrastructure for the services economy. Businesses of every
              size — from small agencies to large law firms — use Portal building blocks to productize their business
              and provide clients a streamlined experience.
            </CustomPanel>
            <CustomPanel title='How much does Copilot+ cost ?'>
              Copilot is a technology company that builds infrastructure for the services economy. Businesses of every
              size — from small agencies to large law firms — use Portal building blocks to productize their business
              and provide clients a streamlined experience.
            </CustomPanel>
          </Accordion>
          {/* 
          <FaqWrap>
            <ul className="faq-list">
              <li>
                <h4 className="faq-heading">Who is Copilot intended for?</h4>
                <p className="read faq-text">
                  Copilot is a technology company that builds infrastructure for
                  the services economy. Businesses of every size — from small
                  agencies to large law firms — use Portal building blocks to
                  productize their business and provide clients a streamlined
                  experience.
                </p>
              </li>
              <li>
                <h4 className="faq-heading">
                  What’s the difference between a marketing site & copilot ?
                </h4>
                <p className="read faq-text">
                  Copilot is a technology company that builds infrastructure for
                  the services economy. Businesses of every size — from small
                  agencies to large law firms — use Portal building blocks to
                  productize their business and provide clients a streamlined
                  experience.
                </p>
              </li>
              <li>
                <h4 className="faq-heading">How many users can you have ?</h4>
                <p className="read faq-text">
                  Copilot is a technology company that builds infrastructure for
                  the services economy. Businesses of every size — from small
                  agencies to large law firms — use Portal building blocks to
                  productize their business and provide clients a streamlined
                  experience.
                </p>
              </li>
              <li>
                <h4 className="faq-heading">
                  Is Copilot secure ? Where is my data stored ?
                </h4>
                <p className="read faq-text">
                  Copilot is a technology company that builds infrastructure for
                  the services economy. Businesses of every size — from small
                  agencies to large law firms — use Portal building blocks to
                  productize their business and provide clients a streamlined
                  experience.
                </p>
              </li>
              <li>
                <h4 className="faq-heading">How many users can you have ?</h4>
                <p className="read faq-text">
                  Copilot is a technology company that builds infrastructure for
                  the services economy. Businesses of every size — from small
                  agencies to large law firms — use Portal building blocks to
                  productize their business and provide clients a streamlined
                  experience.
                </p>
              </li>
              <li>
                <h4 className="faq-heading">
                  What’s the difference between a marketing site & copilot ?
                </h4>
                <p className="read faq-text">
                  Copilot is a technology company that builds infrastructure for
                  the services economy. Businesses of every size — from small
                  agencies to large law firms — use Portal building blocks to
                  productize their business and provide clients a streamlined
                  experience.
                </p>
              </li>
              <li>
                <h4 className="faq-heading">How much does Copilot+ cost ?</h4>
                <p className="read faq-text">
                  Copilot is a technology company that builds infrastructure for
                  the services economy. Businesses of every size — from small
                  agencies to large law firms — use Portal building blocks to
                  productize their business and provide clients a streamlined
                  experience.
                </p>
              </li>
            </ul>
          </FaqWrap> */}
        </Container>
      </FaqSection>
    </>
  );
}
