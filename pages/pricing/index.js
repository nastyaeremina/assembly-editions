// TODO: switch is not working

import { useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout';
import Navbar from '../../components/navbar/navbar';
import SEO from '../../components/seo';

import { Container, SecondryButton } from '../../styles/commonStyles';
import {
  HeroSection,
  PricingSection,
  PriceMenu,
  PriceButton,
  YearlyButton,
  MonthlyButton,
  WrapSlide,
  PricingMenu,
  PriceOption,
  PriceMenuLeft,
  LeftBorder,
  RightBorder,
  PriceLeft,
  PriceWrap,
  PricePlan,
  PricePlanWrap,
  PlanButton,
  PriceTable,
  ImageWrap,
  PriceImage,
  PriceImageLeft,
  PriceText,
  BulletImage,
  PricePlusImage
} from '../../styles/pricingstyles';
import CTA from '../../components/cta/cta';
import FAQ from '../../components/faq/faq';
import Button from '../../components/button/button';
import { getSEOdata } from '../../lib/contentful-seo';
import { COPILOT_ONBORADING_LINK } from '../../constants/externalLinks';

export default function NewIndex({ faq, seoData }) {
  const [isShowFeature, setShowFeature] = useState(true);
  const [isYearly, Yearly] = useState(true);

  const toggleShowFeature = useCallback(() => {
    setShowFeature(!isShowFeature);
  }, [isShowFeature]);

  const setYearly = useCallback(() => {
    Yearly(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [true]);

  const setMonthly = useCallback(() => {
    Yearly(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [false]);

  return (
    <>
      <SEO seoData={seoData} />
      <Layout>
        <Navbar />
        <HeroSection>
          <Container>
            <h1>
              Create your portal<span>,</span> pick a plan later
            </h1>
            <p>Try Copilot free for 14 days, no credit card required</p>
            <Button text={'Start Trial'} hoverColor={'rgba(255, 255, 255, 0.8)'} href={COPILOT_ONBORADING_LINK} />
          </Container>
        </HeroSection>
        <PricingSection>
          <Container>
            <PriceMenu>
              <PriceButton>
                <WrapSlide>
                  <YearlyButton className={isYearly && 'active'} onClick={setYearly}>
                    <button>Pay yearly</button>
                  </YearlyButton>
                </WrapSlide>
                <MonthlyButton className={!isYearly && 'active'} onClick={setMonthly}>
                  <button>Pay monthly</button>
                </MonthlyButton>
              </PriceButton>
              <PricingMenu>
                <PriceOption>
                  <PriceMenuLeft>
                    <WrapSlide>
                      <LeftBorder></LeftBorder>
                      <PriceLeft>
                        <h2>Starter</h2>
                        <p>Everything you need to run a modern services business</p>
                        <PriceWrap>
                          <span>
                            {isYearly && '$29'}
                            {!isYearly && '$39'}
                          </span>
                          <p>per internal user per month</p>
                        </PriceWrap>
                        <PricePlan>
                          <h3>All Starter plans include</h3>
                          <PricePlanWrap>
                            <BulletImage></BulletImage>
                            <p>Up to 100 clients and 10GB of storage</p>
                          </PricePlanWrap>
                          <PricePlanWrap>
                            <BulletImage></BulletImage>
                            <p>Client management and custom fields</p>
                          </PricePlanWrap>
                          <PricePlanWrap>
                            <BulletImage></BulletImage>
                            <p>Customizable branding and color scheme</p>
                          </PricePlanWrap>
                          <PricePlanWrap>
                            <BulletImage></BulletImage>
                            <p>Access to every Copilot App including Messaging, Billing, Files, Forms, and Helpdesk</p>
                          </PricePlanWrap>
                        </PricePlan>
                      </PriceLeft>

                      <RightBorder> </RightBorder>
                    </WrapSlide>
                  </PriceMenuLeft>
                  <PriceMenuLeft>
                    <WrapSlide>
                      <LeftBorder></LeftBorder>

                      <PriceLeft>
                        <h2>Professional</h2>
                        <p>Level up with more clients, custom domains, automations, and apps</p>
                        <PriceWrap>
                          <span>
                            {isYearly && '$69'}
                            {!isYearly && '$89'}
                          </span>
                          <p>per internal user per month</p>
                        </PriceWrap>
                        <PricePlan>
                          <h3>Everything in Starter</h3>
                          <PricePlanWrap>
                            <BulletImage></BulletImage>
                            <p>Up to 2,000 clients and 2TB of storage</p>
                          </PricePlanWrap>
                          <PricePlanWrap>
                            <BulletImage></BulletImage>
                            <p>Custom domain and custom email domain</p>
                          </PricePlanWrap>
                          <PricePlanWrap>
                            <BulletImage></BulletImage>
                            <p>Automations, Zapier, and API</p>
                          </PricePlanWrap>
                          <PricePlanWrap>
                            <BulletImage></BulletImage>
                            <p>Support for Partner Apps and Custom Apps</p>
                          </PricePlanWrap>
                        </PricePlan>
                      </PriceLeft>

                      <RightBorder> </RightBorder>
                    </WrapSlide>
                  </PriceMenuLeft>
                  <PriceMenuLeft>
                    <WrapSlide>
                      <LeftBorder></LeftBorder>

                      <PriceLeft>
                        <h2>Advanced</h2>
                        <p>Level up further with a a fully white-label experience and dedicated expert</p>
                        <PriceWrap>
                          <span>
                            {isYearly && '$119'}
                            {!isYearly && '$139'}
                          </span>
                          <PriceText>
                            <p>per internal user</p>
                            <p>per month</p>
                          </PriceText>
                        </PriceWrap>
                        <PricePlan>
                          <h3>Everything in Professional</h3>
                          <PricePlanWrap>
                            <BulletImage></BulletImage>
                            <p>Up to 20,000 clients and 20TB of storage</p>
                          </PricePlanWrap>
                          <PricePlanWrap>
                            <BulletImage></BulletImage>
                            <p>Remove ‘Powered by Copilot’</p>
                          </PricePlanWrap>
                          <PricePlanWrap>
                            <BulletImage></BulletImage>
                            <p>HIPAA Compliance</p>
                          </PricePlanWrap>

                          <PricePlanWrap>
                            <BulletImage></BulletImage>
                            <p>Dedicated Copilot Expert</p>
                          </PricePlanWrap>
                        </PricePlan>
                      </PriceLeft>

                      <RightBorder> </RightBorder>
                    </WrapSlide>
                  </PriceMenuLeft>
                </PriceOption>
                <PlanButton>
                  <Button
                    isLink={false}
                    onClick={toggleShowFeature}
                    bgColor={'transparent'}
                    fontColor={'#000000'}
                    borderColor={'#000000'}
                    text={isShowFeature ? 'Show plan details' : 'Hide plan details'}
                    hoverColor={'rgba(0, 0, 0, 0.5)'}
                  />
                </PlanButton>
              </PricingMenu>
            </PriceMenu>
            <PriceTable>
              <table className={!isShowFeature && 'active'}>
                <thead>
                  <tr className='bordercolor'>
                    <th colSpan={3} className='tableBorder'></th>
                    <th className='radius'>Starter</th>
                    <th>Professional</th>
                    <th className='rightradius'>Advanced</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={3} className='tableBorder'></td>
                    <td>
                      <p className='amount'>
                        {isYearly && '$29'}
                        {!isYearly && '$39'}
                      </p>
                      <span className='spantext'>per internal user</span>
                    </td>
                    <td>
                      <p className='amount'>
                        {isYearly && '$69'}
                        {!isYearly && '$89'}
                      </p>
                      <span className='spantext'>per internal user</span>
                    </td>
                    <td>
                      <p className='amount'>
                        {isYearly && '$119'}
                        {!isYearly && '$139'}
                      </p>
                      <span className='spantext'>per internal user</span>
                      <span className='spantext'>5 user minimum</span>
                    </td>
                  </tr>

                  <tr className='tablecolor'>
                    <td colSpan={3} className='tablepadding'>
                      Access
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td colSpan={3}>
                      <h4>Total clients</h4>
                      <p>
                        A client user is any client of your business that has their own login access to your portal.
                        Internal users (team members) are not considered client users.
                      </p>
                    </td>
                    <td>
                      <span>100</span>
                    </td>
                    <td>
                      <span>2,000</span>
                    </td>
                    <td>
                      <span>20,000</span>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={3}>
                      <h4>Total storage</h4>
                      <p>
                        File uploads in the Files App by any user contribute to your file storage limit. When you reach
                        your limit, our team will get in touch and ask that you make space or upgrade your account.
                      </p>
                    </td>
                    <td>
                      <span>10GB</span>
                    </td>
                    <td>
                      <span>2TB</span>
                    </td>
                    <td>
                      <span>20TB</span>
                    </td>
                  </tr>
                  <tr className='tablecolor'>
                    <td colSpan={3} className='tablepadding'>
                      Features
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td colSpan={3}>
                      <h4>Client management</h4>
                      <p>
                        Client management functionality lets you create, invite, organize, and manage client
                        information.
                      </p>
                    </td>
                    <td>
                      <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} />
                    </td>
                    <td>
                      <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} />
                    </td>
                    <td>
                      <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={3}>
                      <h4>Custom fields</h4>
                      <p>
                        With custom fields, you can add and track custom properties for your clients. For example, you
                        can track locations, addresses, or birthdays.
                      </p>
                    </td>
                    <td>
                      <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} />
                    </td>
                    <td>
                      <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} />
                    </td>
                    <td>
                      <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={3}>
                      <h4>Team collaboration</h4>
                      <p>
                        Assign a lead and one or more assignees to each of your clients. This lets you stay organized
                        and gives you full control over which team member can access which client.
                      </p>
                    </td>
                    <td>
                      <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} />
                    </td>
                    <td>
                      <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} />
                    </td>
                    <td>
                      <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={3}>
                      <h4>Customization</h4>
                      <p>
                        Customizations include the ability to upload you brand assets, design your theme, set up a
                        custom log in screen, and more.
                      </p>
                    </td>
                    <td>
                      <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} />
                    </td>
                    <td>
                      <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} />
                    </td>
                    <td>
                      <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={3}>
                      <h4>Automations & Zapier</h4>
                      <p>
                        Use Copilot API and Zapier triggers to set up automations that streamline the experience for
                        your clients.
                      </p>
                    </td>
                    <td></td>
                    <td>
                      <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} />
                    </td>
                    <td>
                      <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={3}>
                      <h4>API Access</h4>
                      <p>Use our REST API and Webhooks to set up automations and connect other tools.</p>
                    </td>
                    <td>
                      <span></span>
                    </td>
                    <td>
                      <span>Professional Rate Limit</span>
                    </td>
                    <td>
                      <span>Advanced Rate Limit</span>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={3}>
                      <h4>White-labeling</h4>
                      <p>
                        With a custom domain, you can host your portal on your own URL. With a custom email domain, you
                        can send client email notifications from your own email. Powered by Copilot is a small badge
                        that shows in the client experience and can be removed on the Advanced plan.
                      </p>
                    </td>
                    <td>
                      <span></span>
                    </td>
                    <td>
                      <span>Custom domain</span>

                      <span className='spanpadding'>Custom email domain</span>
                    </td>
                    <td>
                      <span>Custom domain</span>
                      <span className='spanpadding'>Custom email domain</span>
                      <span className='spanpadding'>Remove ‘Powered by Copilot’</span>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={3}>
                      <h4>HIPAA compliance with BAA</h4>
                      <p>
                        If you're a covered entity or business associate subject to HIPAA, contact our team to enter
                        into a BAA.
                      </p>
                    </td>
                    <td>
                      <span></span>
                    </td>
                    <td>
                      <span></span>
                    </td>
                    <td>
                      <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={3}>
                      <h4>Custom roles & permissions</h4>
                      <p>
                        Create custom roles for your team if you want full control over what functionality each internal
                        user can access in your portal.
                      </p>
                    </td>
                    <td></td>
                    <td></td>
                    <td>
                      <ImageWrap>
                        <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} />
                        <p className='imagretext'>Coming Soon</p>
                      </ImageWrap>
                    </td>
                  </tr>

                  <tr className='tablecolor'>
                    <td colSpan={3} className='tablepadding'>
                      Copilot Apps
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td colSpan={3}>
                      <h4>Messaging</h4>
                      <p>
                        Securely communicate with clients in an integrated chat experience. Clients can send messages in
                        your portal or reply to messaging email notifications in a seamless experience.
                      </p>
                    </td>
                    <td>
                      <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} />
                    </td>
                    <td>
                      <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} />
                    </td>
                    <td>
                      <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={3}>
                      <h4>Billing</h4>
                      <p>
                        Create one-time invoices and recurring subscriptions in your portal. Give clients a way to
                        seamlessly check out, pay via credit card or ACH, access invoices, and manage payment methods.
                        Syncs with QuickBooks.
                      </p>
                    </td>
                    <td>
                      <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} />
                    </td>
                    <td>
                      <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} />
                    </td>
                    <td>
                      <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={3}>
                      <h4>Files</h4>
                      <p>
                        Upload files, add links, and stay organized with folders. Advanced controls let you specify
                        whether clients have the same controls or more limited access.
                      </p>
                    </td>
                    <td>
                      <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} />
                    </td>
                    <td>
                      <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} />
                    </td>
                    <td>
                      <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={3}>
                      <h4>Contracts</h4>
                      <p>Upload PDFs and request eSignatures directly in your portal.</p>
                    </td>
                    <td>
                      <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} />
                    </td>
                    <td>
                      <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} />
                    </td>
                    <td>
                      <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={3}>
                      <h4>Forms</h4>
                      <p>Streamline the client onboarding experience and data intake with reusable forms.</p>
                    </td>
                    <td>
                      <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} />
                    </td>
                    <td>
                      <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} />
                    </td>
                    <td>
                      <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={3}>
                      <h4>Knowledge base</h4>
                      <p>
                        Create a knowledge base for your clients to reduce manual support time. With a powerful article
                        editor, use rich text, images, videos, and embeds to create content. Use tags and custom
                        visibility controls to organize articles and indicate which client can see which content
                      </p>
                    </td>
                    <td>
                      <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} />
                    </td>
                    <td>
                      <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} />
                    </td>
                    <td>
                      <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} />
                    </td>
                  </tr>
                  <tr className='tablecolor'>
                    <td colSpan={3} className='tablepadding'>
                      Apps
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>

                  <tr>
                    <td colSpan={3}>
                      <h4>Partner Apps</h4>
                      <p>
                        Embed products like Airtable, ClickUp, Calendly, Google Data Studio, and 1000s of others in your
                        portal and give clients a true one-stop shop experience.
                      </p>
                    </td>
                    <td></td>
                    <td>
                      <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} />
                    </td>
                    <td>
                      <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} />
                    </td>
                  </tr>

                  <tr>
                    <td colSpan={3}>
                      <h4>Data Integration Apps</h4>
                      <p>
                        Connect products like QuickBooks and Google Analytics so that data can flow from Copilot into an
                        external system or the other way around.
                      </p>
                    </td>
                    <td></td>
                    <td>
                      <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} />
                    </td>
                    <td>
                      <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} />
                    </td>
                  </tr>

                  <tr>
                    <td colSpan={3}>
                      <h4>Custom Apps</h4>
                      <p>
                        A custom app is a web application that can be embedded into your portal and receives information
                        about the current user or company. You can render custom content automatically depending on the
                        client that is signed in.
                      </p>
                    </td>
                    <td></td>
                    <td>
                      <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} />
                    </td>
                    <td>
                      <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} />
                    </td>
                  </tr>
                  <tr className='tablecolor'>
                    <td colSpan={3} className='tablepadding'>
                      Payment processing fees
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>

                  <tr>
                    <td colSpan={3}>
                      <h4>Credit cards</h4>
                      <p>
                        Payment processing fee for credit cards. You can control whether you want to absorb payment
                        processing fees or pass them on to your client.
                      </p>
                    </td>
                    <td>
                      <span>3.5% + $0.30</span>
                    </td>
                    <td>
                      <span>3.2% + $0.30</span>
                    </td>
                    <td>
                      <span>3.1% + $0.30</span>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={3}>
                      <h4>ACH</h4>
                      <p>
                        Payment processing fee for ACH Debit. You can control whether you want to absorb payment
                        processing fees or pass them on to your client. Instant ACH powered by Plaid and traditional ACH
                        with micro-deposit verification are both supported.
                      </p>
                    </td>
                    <td>
                      <span>$5 or 1% (whichever is lower)</span>
                    </td>
                    <td>
                      <span>$5 or 1% (whichever is lower)</span>
                    </td>
                    <td>
                      <span>$5 or 1% (whichever is lower)</span>
                    </td>
                  </tr>

                  <tr className='tablecolor'>
                    <td colSpan={3} className='tablepadding'>
                      Additional Payment processing fees
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td colSpan={3}>
                      <h4>Payments for invoices generated by a recurring subscription</h4>
                      <p>Payments for invoices that are generated by a subscription may incur an additional fee.</p>
                    </td>
                    <td>
                      <span>+1%</span>
                    </td>
                    <td>
                      <span>+0.5%</span>
                    </td>
                    <td>
                      <span>Included</span>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={3}>
                      <h4>International credit cards</h4>
                      <p>International credit cards incur an additional 1% fee.</p>
                    </td>
                    <td>
                      <span>+1%</span>
                    </td>
                    <td>
                      <span>+1%</span>
                    </td>
                    <td>
                      <span>+1%</span>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={3}>
                      <h4>Currency conversion required</h4>
                      <p>Credit card payments that require currency conversion incur an additional 1% fee.</p>
                    </td>
                    <td>
                      <span>+1%</span>
                    </td>
                    <td>
                      <span>+1%</span>
                    </td>
                    <td>
                      <span>+1%</span>
                    </td>
                  </tr>
                  <tr className='tablecolor'>
                    <td colSpan={3} className='tablepadding'>
                      Support
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td colSpan={3}>
                      <h4>Email and community support</h4>
                      <p>Receive support from our Slack community and get answers from our support team.</p>
                    </td>
                    <td>
                      <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} />
                    </td>
                    <td>
                      <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} />
                    </td>
                    <td>
                      <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={3}>
                      <h4>Priority support</h4>
                      <p>Receive elevated support from our priority support team.</p>
                    </td>
                    <td></td>
                    <td>
                      <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} />
                    </td>
                    <td>
                      <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={3}>
                      <h4>Dedicated expert</h4>
                      <p>
                        Meet 1:1 with an expert to help you set up your portal, migrate data, set up workflow
                        automations, and more.
                      </p>
                    </td>
                    <td></td>
                    <td></td>
                    <td>
                      <Image src='/images/checkmark.svg' alt='main-logo' height={20} width={20} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </PriceTable>

            <PriceImage>
              <PriceImageLeft>
                <Image src='/images/logoplus.svg' alt='main-logo' height={40} width={252} />
                <h2>
                  Starting at $2<span>,</span>000 USD/month
                </h2>
                <p>
                  For businesses with custom requirements, enterprise compliance, advanced reporting needs, and more.
                </p>
                <SecondryButton>
                  <Link href='/copilot-plus'>Learn more</Link>
                </SecondryButton>
              </PriceImageLeft>
              <PricePlusImage>
                <Image src='/images/price.png' alt='plus-image' width={421} height={361} />
              </PricePlusImage>
            </PriceImage>
          </Container>
        </PricingSection>
        <FAQ contentID={'7zdbfGOwwHXppWfH9yA8KI'} />
        <CTA />
      </Layout>
    </>
  );
}
export async function getStaticProps({ preview = false }) {
  const seoData = (await getSEOdata('yof0gWCYzq1DaLbKJTFqb')) ?? [];
  seoData.canonical="https://www.copilot.com/pricing";
  return {
    props: {
      seoData
    }
  };
}
