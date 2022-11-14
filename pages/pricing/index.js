// TODO: switch is not working

import { NextSeo } from "next-seo";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar/navbar";
// import useMobileDevice from "../../hooks/useMobileDevice";
import {
  Container,
  PrimaryButton,
  SecondryButton,
} from "../../styles/commonStyles";
import {
  HeroSection,
  PricingSection,
  PriceMenu,
  PriceButton,
  YearlyButton,
  MonthlyButton,
  LeftTopBorder,
  RightTopBorder,
  WrapSlide,
  LeftbottomBorder,
  RightBottomBorder,
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
  LearnLink,
  ImgMargin,
  TextUnderline,
  PriceTxt,
  PricePadding,
  ImageWrap,
  PriceImage,
  PriceImageLeft,
  Pricefaq,
  PriceText,
} from "../../styles/pricingstyles";
import CTA from "../../components/cta/cta";
import FAQ from "../../components/faq/faq";

export default function NewIndex() {
  // const mobile = useMobileDevice();
  return (
    <>
      <NextSeo
        title="Create your portal, pick a plan later"
        description="Try Copilot free for 14 days, no credit card required"
      />
      <Layout>
        <Navbar />
        <HeroSection>
          <Container>
            <h2>
              Create your portal<span>,</span> pick a plan later
            </h2>
            <p>Try Copilot free for 14 days, no credit card required</p>
            <PrimaryButton>
              <Link href="/">Start Trial</Link>
            </PrimaryButton>
          </Container>
        </HeroSection>
        <PricingSection>
          <Container>
            <PriceMenu>
              <PriceButton>
                <WrapSlide>
                  <YearlyButton>
                    <Link href="/">Pay yearly</Link>
                  </YearlyButton>
                </WrapSlide>
                <MonthlyButton>
                  <Link href="/">Pay monthly</Link>
                </MonthlyButton>
              </PriceButton>
              <PricingMenu>
                <PriceOption>
                  <PriceMenuLeft>
                    <WrapSlide>
                      <LeftBorder></LeftBorder>
                      <PriceLeft>
                        <h4>Starter</h4>
                        <p>
                          Everything you need to run a modern services business
                        </p>
                        <PriceWrap>
                          <h2>$29</h2>
                          <p>per internal user per month</p>
                        </PriceWrap>
                        <PricePlan>
                          <h4>All Starter plans include</h4>
                          <PricePlanWrap>
                            <Image
                              src="/images/bullet.svg"
                              alt="main-logo"
                              height={23}
                              width={20}
                            />
                            <p>Up to 100 clients and 10GB of storage</p>
                          </PricePlanWrap>
                          <PricePlanWrap>
                            <Image
                              src="/images/bullet.svg"
                              alt="main-logo"
                              height={23}
                              width={20}
                            />
                            <p>Client management and custom fields</p>
                          </PricePlanWrap>
                          <PricePlanWrap>
                            <Image
                              src="/images/bullet.svg"
                              alt="main-logo"
                              height={23}
                              width={20}
                            />
                            <p>Customizable branding and color scheme</p>
                          </PricePlanWrap>
                          <PricePlanWrap>
                            <Image
                              src="/images/bullet.svg"
                              alt="main-logo"
                              height={23}
                              width={20}
                            />
                            <p>
                              Access to every Portal module including Messaging,
                              Billing, Files, Forms, and Surveys
                            </p>
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
                        <h4>Professional</h4>
                        <p>
                          Level up with more clients, custom domains,
                          automations, and extensions
                        </p>
                        <PriceWrap>
                          <h2>$69</h2>
                          <p>per internal user per month</p>
                        </PriceWrap>
                        <PricePlan>
                          <h4>Everything in Starter</h4>
                          <PricePlanWrap>
                            <Image
                              src="/images/bullet.svg"
                              alt="main-logo"
                              height={23}
                              width={20}
                            />
                            <p>Up to 100 clients and 10GB of storage</p>
                          </PricePlanWrap>
                          <PricePlanWrap>
                            <Image
                              src="/images/bullet.svg"
                              alt="main-logo"
                              height={23}
                              width={20}
                            />
                            <p>Up to 2,000 clients and 2TB storage</p>
                          </PricePlanWrap>
                          <PricePlanWrap>
                            <Image
                              src="/images/bullet.svg"
                              alt="main-logo"
                              height={23}
                              width={20}
                            />
                            <p>Automations</p>
                          </PricePlanWrap>
                          <PricePlanWrap>
                            <Image
                              src="/images/bullet.svg"
                              alt="main-logo"
                              height={23}
                              width={20}
                            />
                            <p>Extensions</p>
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
                        <h4>Advanced</h4>
                        <p>
                          Level up further with a fully white-label experience
                          and enterprise compliance
                        </p>
                        <PriceWrap>
                          <h2>$119</h2>
                          <PriceText>
                            <p>per internal user</p>
                            <p>per month</p>
                            <p>min. 5 users</p>
                          </PriceText>
                        </PriceWrap>
                        <PricePlan>
                          <h4>Everything in Professional</h4>
                          <PricePlanWrap>
                            <Image
                              src="/images/bullet.svg"
                              alt="main-logo"
                              height={23}
                              width={20}
                            />
                            <p>Up to 20,000 clients and 20TB storage</p>
                          </PricePlanWrap>
                          <PricePlanWrap>
                            <Image
                              src="/images/bullet.svg"
                              alt="main-logo"
                              height={23}
                              width={20}
                            />
                            <p>Remove ‘Powered by Copilot’</p>
                          </PricePlanWrap>
                          <PricePlanWrap>
                            <Image
                              src="/images/bullet.svg"
                              alt="main-logo"
                              height={23}
                              width={20}
                            />
                            <p>HIPAA compliance</p>
                          </PricePlanWrap>
                          <PricePlanWrap>
                            <Image
                              src="/images/bullet.svg"
                              alt="main-logo"
                              height={23}
                              width={20}
                            />
                            <p>Dedicated success manager</p>
                          </PricePlanWrap>
                        </PricePlan>
                      </PriceLeft>

                      <RightBorder> </RightBorder>
                    </WrapSlide>
                  </PriceMenuLeft>
                </PriceOption>
                <PlanButton>
                  <Link href="/">Hide plan features</Link>
                </PlanButton>
              </PricingMenu>
            </PriceMenu>
            <PriceTable>
              <table>
                <thead>
                  <tr>
                    <th className="tableBorder"></th>
                    <th>Starter</th>
                    <th>Professional</th>
                    <th>Advanced</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="tableBorder"></td>
                    <td>
                      <h3>$29</h3>
                      <span className="spantext">per internal user</span>
                    </td>
                    <td>
                      <h3>$69</h3>
                      <span className="spantext">per internal user</span>
                    </td>
                    <td>
                      <h3>$119</h3>
                      {/* <PriceTxt>
                        <p>per internal user</p>
                      </PriceTxt> */}
                      <span className="spantext">per internal user</span>
                      <span className="spantext">5 User Minimum</span>
                    </td>
                  </tr>

                  <tr className="tablecolor">
                    <td className="tablepadding">Access</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <h4>Total clients</h4>
                      <p>
                        A client user is any client of your business that has
                        their own login access to your portal. Internal users
                        (team members) are not considered client users.
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
                      <span className="spanpadding">100</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4>Total storage</h4>
                      <p>
                        File uploads in the Files module by any user contribute
                        to your file storage limit. When you reach your limit,
                        our team will get in touch and ask that you make space
                        or upgrade your account.
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
                      <span className="spanpadding">100</span>
                    </td>
                  </tr>
                  <tr className="tablecolor">
                    <td className="tablepadding">Features</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <h4>Client management</h4>
                      <p>
                        Client management functionality lets you create, invite,
                        organize, and manage client information.
                      </p>
                    </td>
                    <td>
                      <Image
                        src="/images/checkmark.svg"
                        alt="main-logo"
                        height={20}
                        width={20}
                      />
                    </td>
                    <td>
                      <Image
                        src="/images/checkmark.svg"
                        alt="main-logo"
                        height={20}
                        width={20}
                      />
                    </td>
                    <td>
                      <Image
                        src="/images/checkmark.svg"
                        alt="main-logo"
                        height={20}
                        width={20}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4>Custom fields</h4>
                      <p>
                        With custom fields, you can add and track custom
                        properties for your clients. For example, you can track
                        locations, addresses, or birthdays.
                      </p>
                    </td>
                    <td>
                      <Image
                        src="/images/checkmark.svg"
                        alt="main-logo"
                        height={20}
                        width={20}
                      />
                    </td>
                    <td>
                      <Image
                        src="/images/checkmark.svg"
                        alt="main-logo"
                        height={20}
                        width={20}
                      />
                    </td>
                    <td>
                      <Image
                        src="/images/checkmark.svg"
                        alt="main-logo"
                        height={20}
                        width={20}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4>Team collaboration</h4>
                      <p>
                        Assign a lead and one or more assignees to each of your
                        clients. This lets you stay organized and gives you full
                        control over which team member can access which client.
                      </p>
                      {/* <LearnLink>
                        <Link href="/">
                          
                            Learn More
                            <ImgMargin>
                              <Image
                                src="/images/right.svg"
                                alt="main-logo"
                                height={9}
                                width={6}
                              />
                            </ImgMargin>
                         
                        </Link>
                      </LearnLink> */}
                    </td>
                    <td>
                      <Image
                        src="/images/checkmark.svg"
                        alt="main-logo"
                        height={20}
                        width={20}
                      />
                    </td>
                    <td>
                      <Image
                        src="/images/checkmark.svg"
                        alt="main-logo"
                        height={20}
                        width={20}
                      />
                    </td>
                    <td>
                      <Image
                        src="/images/checkmark.svg"
                        alt="main-logo"
                        height={20}
                        width={20}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4>Customization</h4>
                      <p>
                        Customizations include the ability to upload you brand
                        assets, design your theme, set up a custom log in
                        screen, and more.
                      </p>
                    </td>
                    <td>
                      <Image
                        src="/images/checkmark.svg"
                        alt="main-logo"
                        height={20}
                        width={20}
                      />
                    </td>
                    <td>
                      <Image
                        src="/images/checkmark.svg"
                        alt="main-logo"
                        height={20}
                        width={20}
                      />
                    </td>
                    <td>
                      <Image
                        src="/images/checkmark.svg"
                        alt="main-logo"
                        height={20}
                        width={20}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4>Automations & Zapier</h4>
                      <p>
                        Use Portal API and Zapier triggers to set up automations
                        that streamline the experience for your clients.
                      </p>
                      {/* <LearnLink>
                        <Link href="/">
                       
                            Learn More
                            <ImgMargin>
                              <Image
                                src="/images/right.svg"
                                alt="main-logo"
                                height={9}
                                width={6}
                              />
                            </ImgMargin>
                          
                        </Link>
                      </LearnLink> */}
                    </td>
                    <td></td>
                    <td>
                      <Image
                        src="/images/checkmark.svg"
                        alt="main-logo"
                        height={20}
                        width={20}
                      />
                    </td>
                    <td>
                      <Image
                        src="/images/checkmark.svg"
                        alt="main-logo"
                        height={20}
                        width={20}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4>API Access</h4>
                      <p>
                        Use our REST API and Webhooks to set up automations and
                        connect other tools.
                      </p>
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
                    <td>
                      <h4>White labeling</h4>
                      <p>
                        With a custom domain you can host your portal on your
                        own URL. With a custom email domain you can send client
                        email notifications from your own email. Powered by
                        Portal is a small badge that shows in the client
                        experience and can be removed on the Advanced plan.
                      </p>
                    </td>
                    <td>
                      <span></span>
                    </td>
                    <td>
                      <span>Custom domain</span>

                      <span className="spanpadding">Custom email domain</span>
                    </td>
                    <td>
                      <span>Custom domain</span>
                      <span className="spanpadding">Custom email domain</span>
                      <span className="spanpadding">
                        Remove ‘Powered by Copilot’
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4>HIPAA compliance with BAA</h4>
                      <p>
                        If you're a covered entity or business associate subject
                        to HIPAA, contact our team to enter into a BAA.
                      </p>
                    </td>
                    <td>
                      <span></span>
                    </td>
                    <td>
                      <span></span>
                    </td>
                    <td>
                      <Image
                        src="/images/checkmark.svg"
                        alt="main-logo"
                        height={20}
                        width={20}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4>Custom roles & permissions</h4>
                      <p>
                        Create custom roles for your team if you want full
                        control over what functionality each internal user can
                        access in your portal.
                      </p>
                    </td>
                    <td></td>
                    <td></td>
                    <td>
                      <ImageWrap>
                        <Image
                          src="/images/checkmark.svg"
                          alt="main-logo"
                          height={20}
                          width={20}
                        />
                        <p className="imagretext">Coming Soon</p>
                      </ImageWrap>
                    </td>
                  </tr>

                  <tr className="tablecolor">
                    <td className="tablepadding">Copilot Apps</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <h4>Messaging</h4>
                      <p>
                        Securely communicate with clients in an integrated chat
                        experience. Clients can send messages in your portal or
                        reply to messaging email notifications in a seamless
                        experience.
                      </p>
                      {/* <LearnLink>
                        <Link href="/">
                         
                            Learn More
                            <ImgMargin>
                              <Image
                                src="/images/right.svg"
                                alt="main-logo"
                                height={9}
                                width={6}
                              />
                            </ImgMargin>
                      
                        </Link>
                      </LearnLink> */}
                    </td>
                    <td>
                      <Image
                        src="/images/checkmark.svg"
                        alt="main-logo"
                        height={20}
                        width={20}
                      />
                    </td>
                    <td>
                      <Image
                        src="/images/checkmark.svg"
                        alt="main-logo"
                        height={20}
                        width={20}
                      />
                    </td>
                    <td>
                      <Image
                        src="/images/checkmark.svg"
                        alt="main-logo"
                        height={20}
                        width={20}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4>Billing</h4>
                      <p>
                        Create one-time invoices and recurring subscriptions in
                        your portal. Give clients a way to seamlessly check out,
                        pay via credit card or ACH, access invoices, and manage
                        payment methods. Syncs with QuickBooks.
                      </p>
                      {/* <LearnLink>
                        <Link href="/">
                         
                            Learn More
                            <ImgMargin>
                              <Image
                                src="/images/right.svg"
                                alt="main-logo"
                                height={9}
                                width={6}
                              />
                            </ImgMargin>
                      
                        </Link>
                      </LearnLink> */}
                    </td>
                    <td>
                      <Image
                        src="/images/checkmark.svg"
                        alt="main-logo"
                        height={20}
                        width={20}
                      />
                    </td>
                    <td>
                      <Image
                        src="/images/checkmark.svg"
                        alt="main-logo"
                        height={20}
                        width={20}
                      />
                    </td>
                    <td>
                      <Image
                        src="/images/checkmark.svg"
                        alt="main-logo"
                        height={20}
                        width={20}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4>Files</h4>
                      <p>
                        Upload files, add links, and stay organized with
                        folders. Advanced controls let you specify whether
                        clients have the same controls or more limited access.
                      </p>
                    </td>
                    <td>
                      <Image
                        src="/images/checkmark.svg"
                        alt="main-logo"
                        height={20}
                        width={20}
                      />
                    </td>
                    <td>
                      <Image
                        src="/images/checkmark.svg"
                        alt="main-logo"
                        height={20}
                        width={20}
                      />
                    </td>
                    <td>
                      <Image
                        src="/images/checkmark.svg"
                        alt="main-logo"
                        height={20}
                        width={20}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4>Contracts</h4>
                      <p>
                        Upload PDFs and request eSignatures directly in your
                        portal.
                      </p>
                    </td>
                    <td>
                      <Image
                        src="/images/checkmark.svg"
                        alt="main-logo"
                        height={20}
                        width={20}
                      />
                    </td>
                    <td>
                      <Image
                        src="/images/checkmark.svg"
                        alt="main-logo"
                        height={20}
                        width={20}
                      />
                    </td>
                    <td>
                      <Image
                        src="/images/checkmark.svg"
                        alt="main-logo"
                        height={20}
                        width={20}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4>Forms</h4>
                      <p>
                        Streamline the client onboarding experience and data
                        intake with reusable forms.
                      </p>
                    </td>
                    <td>
                      <Image
                        src="/images/checkmark.svg"
                        alt="main-logo"
                        height={20}
                        width={20}
                      />
                    </td>
                    <td>
                      <Image
                        src="/images/checkmark.svg"
                        alt="main-logo"
                        height={20}
                        width={20}
                      />
                    </td>
                    <td>
                      <Image
                        src="/images/checkmark.svg"
                        alt="main-logo"
                        height={20}
                        width={20}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4>Knowledge base</h4>
                      <p>
                        Create a knowledge base for your clients to reduce
                        manual support time. With a powerful article editor, use
                        rich text, images, videos, and embeds to create content.
                        Use tags and custom visibility controls to organize
                        articles and indicate which client can see which content
                      </p>
                    </td>
                    <td>
                      <Image
                        src="/images/checkmark.svg"
                        alt="main-logo"
                        height={20}
                        width={20}
                      />
                    </td>
                    <td>
                      <Image
                        src="/images/checkmark.svg"
                        alt="main-logo"
                        height={20}
                        width={20}
                      />
                    </td>
                    <td>
                      <Image
                        src="/images/checkmark.svg"
                        alt="main-logo"
                        height={20}
                        width={20}
                      />
                    </td>
                  </tr>
                  <tr className="tablecolor">
                    <td className="tablepadding">Apps</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <h4>Partner Apps</h4>
                      <p>
                        Embed products like Airtable, ClickUp, Calendly, Google
                        Data Studio, and 1000s of others in your portal and give
                        clients a true one-stop shop experience.
                      </p>
                    </td>
                    <td></td>
                    <td>
                      <Image
                        src="/images/checkmark.svg"
                        alt="main-logo"
                        height={20}
                        width={20}
                      />
                    </td>
                    <td>
                      <Image
                        src="/images/checkmark.svg"
                        alt="main-logo"
                        height={20}
                        width={20}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4>Custom Apps</h4>
                      <p>
                        A custom app is a web application that can be embedded
                        into your portal and receives information about the
                        current user or company. You can render custom content
                        automatically depending on the client that is signed in.
                      </p>
                    </td>
                    <td></td>
                    <td></td>
                    <td>
                      <Image
                        src="/images/checkmark.svg"
                        alt="main-logo"
                        height={20}
                        width={20}
                      />
                    </td>
                  </tr>
                  <tr className="tablecolor">
                    <td className="tablepadding">Payment processing fees</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>

                  <tr>
                    <td>
                      <h4>Credit cards</h4>
                      <p>
                        Payment processing fee for credit cards. You can control
                        whether you want to absorb payment processing fees or
                        pass them on to your client.
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
                      <span className="spanpadding">100</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4>ACH</h4>
                      <p>
                        Payment processing fee for ACH Debit. You can control
                        whether you want to absorb payment processing fees or
                        pass them on to your client. Instant ACH powered by
                        Plaid and traditional ACH with micro-deposit
                        verification are both supported.
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

                  <tr className="tablecolor">
                    <td className="tablepadding">
                      Additional Payment processing fees
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <h4>
                        Payments for invoices generated by a recurring
                        subscription
                      </h4>
                      <p>
                        Payments for invoices that are generated by a
                        subscription may incur an additional fee.
                      </p>
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
                    <td>
                      <h4>International credit cards</h4>
                      <p>
                        International credit cards incur an additional 1% fee.
                      </p>
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
                    <td>
                      <h4>Currency conversion required</h4>
                      <p>
                        Credit card payments that require currency conversion
                        incur an additional 1% fee.
                      </p>
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
                  <tr className="tablecolor">
                    <td className="tablepadding">Support</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <h4>Email and community support</h4>
                      <p>
                        Receive support from our Slack community and get answers
                        from our support team.
                      </p>
                    </td>
                    <td>
                      <Image
                        src="/images/checkmark.svg"
                        alt="main-logo"
                        height={20}
                        width={20}
                      />
                    </td>
                    <td>
                      <Image
                        src="/images/checkmark.svg"
                        alt="main-logo"
                        height={20}
                        width={20}
                      />
                    </td>
                    <td>
                      <Image
                        src="/images/checkmark.svg"
                        alt="main-logo"
                        height={20}
                        width={20}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4>Priority support</h4>
                      <p>
                        Receive elevated support from our priority support team.
                      </p>
                    </td>
                    <td></td>
                    <td>
                      <Image
                        src="/images/checkmark.svg"
                        alt="main-logo"
                        height={20}
                        width={20}
                      />
                    </td>
                    <td>
                      <Image
                        src="/images/checkmark.svg"
                        alt="main-logo"
                        height={20}
                        width={20}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4>Dedicated expert</h4>
                      <p>
                        Meet 1:1 with an expert to help you set up your portal,
                        migrate data, set up workflow automations, and more.
                      </p>
                    </td>
                    <td></td>
                    <td></td>
                    <td>
                      <Image
                        src="/images/checkmark.svg"
                        alt="main-logo"
                        height={20}
                        width={20}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </PriceTable>
            <PriceImage>
              <PriceImageLeft>
                <Image
                  src="/images/logoplus.svg"
                  alt="main-logo"
                  height={40}
                  width={252}
                />
                <h3>
                  Starting at $2<span>,</span>000 USD/month
                </h3>
                <p>
                  For large businesses with custom requirements, enterprise
                  compliance, advanced reporting needs, and more.
                </p>
                <SecondryButton>
                  <Link href="/request-demo">Learn More</Link>
                </SecondryButton>
              </PriceImageLeft>
              <>
                <Image
                  src="/images/price.png"
                  alt="main-logo"
                  height={381}
                  width={421}
                />
              </>
            </PriceImage>
          </Container>
        </PricingSection>
        <FAQ />
        <CTA />
      </Layout>
    </>
  );
}
