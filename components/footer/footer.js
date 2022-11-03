import Link from "next/link";
import Image from "next/image";
import {
  Container,
  PrimaryButton,
  SecondryButton,
} from "../../styles/commonStyles";
import {
  FooterSection,
  SectionHeading,
  FooterInnerBlock,
  FooterTitleBlock,
  FooterTitleLeft,
  FooterTitleRight,
  FooterPara,
  MobileFooterList,
  MobileFooterListItem,
  FooterSocialItem,
  FooterSocialList,
  FooterFirst,
  FooterRight,
  FooterMenu,
  FotterMenuLeft,
  FooterMenuList,
} from "./styles";

export default function Footer() {
  const solution = (
    <MobileFooterList>
      <MobileFooterListItem>
        <Link href="/solution/startup-crm">
          <a>Startup</a>
        </Link>
      </MobileFooterListItem>
      <MobileFooterListItem>
        <Link href="/solution/saas-crm">
          <a>Saas</a>
        </Link>
      </MobileFooterListItem>
      <MobileFooterListItem>
        <Link href="/solution/real-estate-crm">
          <a>Real Estate</a>
        </Link>
      </MobileFooterListItem>
      <MobileFooterListItem>
        <Link href="/solution/agency-crm">
          <a>Agencies</a>
        </Link>
      </MobileFooterListItem>
      <MobileFooterListItem>
        <Link href="/solution/remote-sales-crm">
          <a>Remote Sales</a>
        </Link>
      </MobileFooterListItem>
    </MobileFooterList>
  );
  const product = (
    <MobileFooterList>
      <MobileFooterListItem>
        <Link href="/features/lead-management">
          <a>Lead Management</a>
        </Link>
      </MobileFooterListItem>
      <MobileFooterListItem>
        <Link href="/features/sales-reporting">
          <a>Sales Reporting</a>
        </Link>
      </MobileFooterListItem>
      <MobileFooterListItem>
        <Link href="/features/deal-pipeline">
          <a>Deal Pipeline</a>
        </Link>
      </MobileFooterListItem>
      <MobileFooterListItem>
        <Link href="/features/activities-goals">
          <a>Activities & Goals</a>
        </Link>
      </MobileFooterListItem>
      <MobileFooterListItem>
        <Link href="/features">
          <a>More Features</a>
        </Link>
      </MobileFooterListItem>
    </MobileFooterList>
  );
  const resource = (
    <MobileFooterList>
      <MobileFooterListItem>
        <Link href="/blog">
          <a>Blogs</a>
        </Link>
      </MobileFooterListItem>
      <MobileFooterListItem>
        <Link href="/updates">
          <a>Updates</a>
        </Link>
      </MobileFooterListItem>
      <MobileFooterListItem>
        <Link href="/help">
          <a>Help Center</a>
        </Link>
      </MobileFooterListItem>
      <MobileFooterListItem>
        <Link href="/">
          <a>Roadmap</a>
        </Link>
      </MobileFooterListItem>
      <MobileFooterListItem>
        <Link href="/free-sales-tools">
          <a>Free tools</a>
        </Link>
      </MobileFooterListItem>
      <MobileFooterListItem>
        <Link href="/">
          <a>API Doc</a>
        </Link>
      </MobileFooterListItem>
    </MobileFooterList>
  );
  const company = (
    <MobileFooterList>
      <MobileFooterListItem>
        <Link href="/pricing">
          <a>Pricing</a>
        </Link>
      </MobileFooterListItem>
      <MobileFooterListItem>
        <Link href="/contact-us">
          <a>Contact Us</a>
        </Link>
      </MobileFooterListItem>
      <MobileFooterListItem>
        <Link href="/download">
          <a>Download</a>
        </Link>
      </MobileFooterListItem>
      <MobileFooterListItem>
        <Link href="/affiliate">
          <a>Affiliate</a>
        </Link>
      </MobileFooterListItem>
      <MobileFooterListItem>
        <Link href="/terms-of-use">
          <a>Terms of Use</a>
        </Link>
      </MobileFooterListItem>
      <MobileFooterListItem>
        <Link href="/privacy-policy">
          <a>Privacy Policy</a>
        </Link>
      </MobileFooterListItem>
    </MobileFooterList>
  );
  return (
    <>
      <FooterSection>
        <Container>
          <FooterInnerBlock>
            <FooterFirst>
              <Image
                src="/images/blacklogo.svg"
                alt="main-logo"
                height={31}
                width={143}
              />
              <p>The new standard for modern services business.</p>
              <FooterSocialList>
                <FooterSocialItem>
                  <Image
                    src="/images/twittersvg.svg"
                    alt="main-logo"
                    height={24}
                    width={24}
                  />
                </FooterSocialItem>
                <FooterSocialItem>
                  <Image
                    src="/images/facebook.svg"
                    alt="main-logo"
                    height={24}
                    width={24}
                  />
                </FooterSocialItem>
                <FooterSocialItem>
                  <Image
                    src="/images/linkedin.svg"
                    alt="main-logo"
                    height={24}
                    width={24}
                  />
                </FooterSocialItem>
                <FooterSocialItem>
                  <Image
                    src="/images/youtubesvg.svg"
                    alt="main-logo"
                    height={24}
                    width={24}
                  />
                </FooterSocialItem>
                <FooterSocialItem>
                  <Image
                    src="/images/instagramsvg.svg"
                    alt="main-logo"
                    height={24}
                    width={24}
                  />
                </FooterSocialItem>
              </FooterSocialList>
            </FooterFirst>
            <FooterRight>
              <FotterMenuLeft>
                <FooterMenu>
                  <p>Features</p>
                  <FooterMenuList>
                    <a>Messaging</a>
                    <a>Billing</a>
                    <a>Files </a>
                    <a>Forms</a>
                    <a>Helpdesk</a>
                    <a>Contracts</a>
                    <a>Extensions</a>
                  </FooterMenuList>
                  <FooterMenu className="padding">
                    <p>Platform</p>
                    <FooterMenuList>
                      <a>Automations</a>
                      <a>Extensions</a>
                    </FooterMenuList>
                  </FooterMenu>
                </FooterMenu>
              </FotterMenuLeft>
              <FotterMenuLeft>
                <FooterMenu>
                  <p>Use cases</p>
                  <FooterMenuList>
                    <a>Accounting & Financial Services</a>
                    <a>Marketing & Creative</a>
                    <a>Legal Services</a>
                    <a>Startups & Tech-enabled services</a>
                  </FooterMenuList>
                  <FooterMenu className="padding">
                    <p>Company</p>
                    <FooterMenuList>
                      <a>Pricing</a>
                      <a>Enterprise</a>
                      <a>Jobs</a>
                    </FooterMenuList>
                  </FooterMenu>
                </FooterMenu>
              </FotterMenuLeft>
              <FotterMenuLeft>
                <FooterMenu>
                  <p>Resources</p>
                  <FooterMenuList>
                    <a>Blog</a>
                    <a>API Reference</a>
                    <a>Security</a>
                    <a>What’s new</a>
                    <a>Help center</a>
                    <a>Video tutorials</a>
                  </FooterMenuList>
                  <FooterMenu className="padding">
                    <p>Learn</p>
                    <FooterMenuList>
                      <a>Customizing your portal</a>
                      <a>Customizing your portal</a>
                      <a>Why you need a customer billing portal</a>
                    </FooterMenuList>
                  </FooterMenu>
                </FooterMenu>
              </FotterMenuLeft>
            </FooterRight>
            {/* <FooterTitleBlock>
              <FooterTitleLeft>
                <SectionHeading>Try copilot for free</SectionHeading>
                <FooterPara>
                  Be the hero of your sales team. Never miss an opportunity
                </FooterPara>
              </FooterTitleLeft>
              <FooterTitleRight>
                <PrimaryButton>
                  <Link href="/">
                    <a>Get Started for Free</a>
                  </Link>
                </PrimaryButton>
                <SecondryButton>
                  <Link href="/request-demo">
                    <a>Request a Demo</a>
                  </Link>
                </SecondryButton>
              </FooterTitleRight>
            </FooterTitleBlock> */}
            {/* <FooterLinkBlock>
              <FooterLinkList>
                <FooterLinkItem>
                  <h3>solution</h3>
                </FooterLinkItem>
                <FooterLinkItem>
                  <Link href="/solution/startup-crm">
                    <a>Startup</a>
                  </Link>
                </FooterLinkItem>
                <FooterLinkItem>
                  <Link href="/solution/saas-crm">
                    <a>Saas</a>
                  </Link>
                </FooterLinkItem>
                <FooterLinkItem>
                  <Link href="/solution/real-estate-crm">
                    <a>Real Estate</a>
                  </Link>
                </FooterLinkItem>
                <FooterLinkItem>
                  <Link href="/solution/agency-crm">
                    <a>Agencies</a>
                  </Link>
                </FooterLinkItem>
                <FooterLinkItem>
                  <Link href="/solution/remote-sales-crm">
                    <a>Remote Sales</a>
                  </Link>
                </FooterLinkItem>
              </FooterLinkList>
              <FooterLinkList>
                <FooterLinkItem>
                  <h3>product</h3>
                </FooterLinkItem>
                <FooterLinkItem>
                  <Link href="/features/lead-management">
                    <a>Lead Management</a>
                  </Link>
                </FooterLinkItem>
                <FooterLinkItem>
                  <Link href="/features/sales-reporting">
                    <a>Sales Reporting</a>
                  </Link>
                </FooterLinkItem>
                <FooterLinkItem>
                  <Link href="/features/deal-pipeline">
                    <a>Deal Pipeline</a>
                  </Link>
                </FooterLinkItem>
                <FooterLinkItem>
                  <Link href="/features/activities-goals">
                    <a>Activities & Goals</a>
                  </Link>
                </FooterLinkItem>
                <FooterLinkItem>
                  <Link href="/features">
                    <a>More Features</a>
                  </Link>
                </FooterLinkItem>
              </FooterLinkList>
              <FooterLinkList>
                <FooterLinkItem>
                  <h3>resource</h3>
                </FooterLinkItem>
                <FooterLinkItem>
                  <Link href="/blog">
                    <a>Blogs</a>
                  </Link>
                </FooterLinkItem>
                <FooterLinkItem>
                  <Link href="/updates">
                    <a>Updates</a>
                  </Link>
                </FooterLinkItem>
                <FooterLinkItem>
                  <Link href="/help">
                    <a>Help Center</a>
                  </Link>
                </FooterLinkItem>
                <FooterLinkItem>
                  <Link href="/">
                    <a>Roadmap</a>
                  </Link>
                </FooterLinkItem>
                <FooterLinkItem>
                  <Link href="/">
                    <a>Free tools</a>
                  </Link>
                </FooterLinkItem>
                <FooterLinkItem>
                  <Link href="/">
                    <a>API Doc</a>
                  </Link>
                </FooterLinkItem>
              </FooterLinkList>
              <FooterLinkList>
                <FooterLinkItem>
                  <h3>company</h3>
                </FooterLinkItem>
                <FooterLinkItem>
                  <Link href="/pricing">
                    <a>Pricing</a>
                  </Link>
                </FooterLinkItem>
                <FooterLinkItem>
                  <Link href="/contact-us">
                    <a>Contact Us</a>
                  </Link>
                </FooterLinkItem>
                <FooterLinkItem>
                  <Link href="/download">
                    <a>Download</a>
                  </Link>
                </FooterLinkItem>
                <FooterLinkItem>
                  <Link href="/affiliate">
                    <a>Affiliate</a>
                  </Link>
                </FooterLinkItem>
                <FooterLinkItem>
                  <Link href="/terms-of-use">
                    <a>Terms of Use</a>
                  </Link>
                </FooterLinkItem>
                <FooterLinkItem>
                  <Link href="/privacy-policy">
                    <a>Privacy Policy</a>
                  </Link>
                </FooterLinkItem>
              </FooterLinkList>
            </FooterLinkBlock>
            <MobileFooterMain>
              <Accordion
                overrides={{
                  Header: {
                    style: ({ $theme }) => ({
                      backgroundColor: "#131823",
                      color: "white",
                      paddingTop: "16px",
                      paddingBottom: "16px",
                      paddingLeft: "16px",
                      paddingRight: "16px",
                      textTransform: "uppercase",
                      fontSize: "16px",
                      lineHeight: "24px",
                      ":hover": {
                        color: "white",
                      },
                    }),
                  },
                  Content: {
                    style: ({ $theme }) => ({
                      backgroundColor: "transparent",
                      paddingTop: "16px",
                      paddingBottom: "16px",
                      paddingLeft: "0px",
                      paddingRight: "0px",
                      borderTopWidth: "1px",
                      borderTopColor: "#222836",
                    }),
                  },
                  ContentAnimationContainer: {
                    style: ({ $theme }) => ({
                      backgroundColor: "#131823",
                      padding: "0 16px",
                    }),
                  },
                  PanelContainer: {
                    style: ({ $theme }) => ({
                      borderBottomColor: "transparent",
                      borderRadius: "6px",
                      overflow: "hidden",
                      marginBottom: "10px",
                    }),
                  },
                  ToggleIcon: {
                    style: ({ $theme }) => ({
                      color: "white",
                    }),
                  },
                }}
              >
                <Panel title="solution">{solution}</Panel>
                <Panel title="product">{product}</Panel>
                <Panel title="resource">{resource}</Panel>
                <Panel title="company">{company}</Panel>
              </Accordion>
            </MobileFooterMain>
            <FooterLastBlock>
              <Link href="/index">
                <a>
                  <img
                    src="/images/Footer-Logo.svg"
                    loading="lazy"
                    width="160"
                    height="38"
                    alt="copilot Logo"
                  />
                </a>
              </Link>
              <CopyRightText>Copyright © 2021 copilot</CopyRightText>
              <FooterSocialList>
                <FooterSocialItem>
                  <Link href="https://www.linkedin.com/company/">
                    <a target="_blank">
                      <img
                        src="/images/linkedin.svg"
                        loading="lazy"
                        alt="linkedin_logo"
                      />
                    </a>
                  </Link>
                </FooterSocialItem>
                <FooterSocialItem>
                  <Link href="https://www.youtube.com/channel/UCdgma87EVzs6EqHaSGXfirg">
                    <a target="_blank">
                      <img
                        src="/images/youtube.svg"
                        loading="lazy"
                        alt="youtube_logo"
                      />
                    </a>
                  </Link>
                </FooterSocialItem>
                <FooterSocialItem>
                  <Link href="https://www.instagram.com/">
                    <a target="_blank">
                      <img
                        src="/images/instagram.svg"
                        loading="lazy"
                        alt="instagram_logo"
                      />
                    </a>
                  </Link>
                </FooterSocialItem>
                <FooterSocialItem>
                  <Link href="https://twitter.com/">
                    <a target="_blank">
                      <img
                        src="/images/twitter_1.svg"
                        loading="lazy"
                        alt="twitter_logo"
                      />
                    </a>
                  </Link>
                </FooterSocialItem>
              </FooterSocialList>
            </FooterLastBlock>
          </FooterInnerBlock> */}
          </FooterInnerBlock>
        </Container>
      </FooterSection>
    </>
  );
}
