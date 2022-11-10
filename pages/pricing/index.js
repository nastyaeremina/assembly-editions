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
            <h2>Create your portal<span>,</span> pick a plan later</h2>
            <p>Try Copilot free for 14 days, no credit card required</p>
            <PrimaryButton>
              <Link href="/">
                Start Trial
              </Link>
            </PrimaryButton>
          </Container>
        </HeroSection>
        <PricingSection>
          <Container>
            <PriceMenu>
              <PriceButton>
                <WrapSlide>
                

                  <YearlyButton>
                    <Link href="/">
                      Pay yearly
                    </Link>
                  </YearlyButton>
                </WrapSlide>
                <MonthlyButton>
                  <Link href="/">
                    Pay monthly
                  </Link>
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
                  <Link href="/">
                   Hide plan features
                  </Link>
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
                    <td className="tableBorder">
                     
                    </td>
                    <td className="tabletext">
                      $29<span>per internal user</span>
                    </td>
                    <td className="tabletext">
                      $69<span>per internal user</span>
                    </td>
                    <td className="tabletext">
                      $119
                      {/* <PriceTxt>
                        <p>per internal user</p>
                      </PriceTxt> */}
                      <p>5 User Minimum</p>
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
                      <h4>
                      Total clients</h4>
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
                      <h4>
                      Total storage
                      </h4>
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
                      <h4>
                      Client management
                      </h4>
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
                      <h4>
                      Custom fields
                      </h4>
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
                      <h4>
                      Team collaboration
                      </h4>
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
                      <h4>
                      Customization
                      </h4>
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
                      <h4>
                      Automations & Zapier</h4>
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
                      White labeling
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
                      <span>Professional Rate Limit</span>
                      <PricePadding>
                        <span>Professional Rate Limit</span>
                      </PricePadding>
                    </td>
                    <td>
                      <span>Professional Rate Limit</span>
                      <PricePadding>
                        <span>
                          Custom email domain Remove ‘Powered by Portal’
                        </span>
                      </PricePadding>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <TextUnderline>White labeling</TextUnderline>
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
                      <span>Professional Rate Limit</span>
                      <PricePadding>
                        <span>Professional Rate Limit</span>
                      </PricePadding>
                    </td>
                    <td>
                      <span>Professional Rate Limit</span>
                      <PricePadding>
                        <span>Professional Rate Limit</span>
                      </PricePadding>
                      <PricePadding>
                        <TextUnderline>
                          <span>Professional Rate Limit</span>
                        </TextUnderline>
                      </PricePadding>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Automations & Zapier
                      <p>
                        Use Portal API and Zapier triggers to set up automations
                        that streamline the experience for your clients.
                      </p>
                      <LearnLink>
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
                      </LearnLink>
                    </td>
                    <td></td>
                    <td>
                      <ImageWrap>
                        <Image
                          src="/images/checkmark.svg"
                          alt="main-logo"
                          height={20}
                          width={20}
                        />
                        <p>Coming Soon</p>
                      </ImageWrap>
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
                      Automations & Zapier
                      <p>
                        Use Portal API and Zapier triggers to set up automations
                        that streamline the experience for your clients.
                      </p>
                      <LearnLink>
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
                      </LearnLink>
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
                  <tr className="tablecolor">
                    <td>Features</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      Team collaboration
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
                      Team collaboration
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
                      Team collaboration
                      <p>
                        Assign a lead and one or more assignees to each of your
                        clients. This lets you stay organized and gives you full
                        control over which team member can access which client.
                      </p>
                      <LearnLink>
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
                      </LearnLink>
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
                      Team collaboration
                      <p>
                        Assign a lead and one or more assignees to each of your
                        clients. This lets you stay organized and gives you full
                        control over which team member can access which client.
                      </p>
                      <LearnLink>
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
                      </LearnLink>
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
                      Team collaboration
                      <p>
                        Assign a lead and one or more assignees to each of your
                        clients. This lets you stay organized and gives you full
                        control over which team member can access which client.
                      </p>
                      <LearnLink>
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
                      </LearnLink>
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
                      Team collaboration
                      <p>
                        Assign a lead and one or more assignees to each of your
                        clients. This lets you stay organized and gives you full
                        control over which team member can access which client.
                      </p>
                      <LearnLink>
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
                      </LearnLink>
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
                    <td>Payment processing fees</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      Credit cards
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
                    </td>
                  </tr>
                  <tr>
                    <td>
                      ACH
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
                    <td>Additional Payment processing fees</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      Payments for invoices generated by a recurring
                      subscription
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
                      International credit cards
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
                      Currency conversion required
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
                    <td>Support</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      Email and community support
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
                      Priority support
                      <p>
                        Receive elevated support from our priority support team.
                      </p>
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
                      Dedicated expert
                      <p>
                        Meet 1:1 with an expert to help you set up your portal,
                        migrate data, set up workflow automations and more.
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
                <h3>Starting at $2<span>,</span>000 USD/month</h3>
                <p>
                  For large businesses with custom requirements, enterprise
                  compliance, advanced reporting needs, and more.
                </p>
                <SecondryButton>
                  <Link href="/request-demo">
                    Learn More
                  </Link>
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
            <Pricefaq>
              <h3>Frequently Asked Questions</h3>
            </Pricefaq>
          </Container>
        </PricingSection> 
         <CTA />
      </Layout>
    </>
  );
}
