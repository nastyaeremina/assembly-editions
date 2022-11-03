import Link from "next/link";
import Image from "next/image";
import {
  Container,
} from "../../styles/commonStyles";
import {
  FooterSection,
  FooterInnerBlock,
  FooterSocialItem,
  FooterSocialList,
  FooterFirst,
  FooterRight,
  FooterMenu,
  FotterMenuLeft,
  FooterMenuList,
} from "./styles";

export default function Footer() {
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
          </FooterInnerBlock>
        </Container>
      </FooterSection>
    </>
  );
}
