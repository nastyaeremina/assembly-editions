import Link from "next/link";
import Image from "next/image";
import { Container } from "../../styles/commonStyles";
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
                    <Link href="/modules/messege">Messaging</Link>
                    <Link href="#">Billing</Link>
                    <Link href="#">Files</Link>
                    <Link href="#">Forms</Link>
                    <Link href="#">Helpdesk</Link>
                    <Link href="#">Contracts</Link>
                    <Link href="#">Apps</Link>
                  </FooterMenuList>
                </FooterMenu>
              </FotterMenuLeft>
              <FotterMenuLeft>
                <FooterMenu>
                  <p>Solutions</p>
                  <FooterMenuList>
                    <Link href="/solution">
                      Accounting & Financial Services
                    </Link>
                    <Link href="#">Marketing & Creative</Link>
                    <Link href="#">Startups & Tech-enabled services</Link>
                  </FooterMenuList>
                  <FooterMenu className="padding">
                    <p>Company</p>
                    <FooterMenuList>
                      <Link href="/enterprise">Enterprise</Link>
                      <Link href="#">Pricing</Link>
                      <Link href="/jobs">Jobs</Link>
                      <Link href="#">Brand</Link>
                    </FooterMenuList>
                  </FooterMenu>
                </FooterMenu>
              </FotterMenuLeft>
              <FotterMenuLeft>
                <FooterMenu>
                  <p>Resources</p>
                  <FooterMenuList>
                    <Link href="#">Blog</Link>
                    <Link href="#">Security</Link>
                    <Link href="#">What’s New</Link>
                    <Link href="#">Help Center</Link>
                    <Link href="#">Video Tutorials</Link>
                    <Link href="#">API Reference</Link>
                    <Link href="#">System Status</Link>
                  </FooterMenuList>
                </FooterMenu>
              </FotterMenuLeft>
            </FooterRight>
          </FooterInnerBlock>
        </Container>
      </FooterSection>
    </>
  );
}
