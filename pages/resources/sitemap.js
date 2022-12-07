import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/layout';
import Navbar from '../../components/navbar/navbar';
import { HEADER_LIST } from '../../constants/constant';
import { Container } from '../../styles/commonStyles';
import {
  MainSection,
  PrivacuHero,
  ContentInfo,
  InfoWrap,
  InfoLink,
  PrivacyContactData
} from '../../styles/resourcesStyles';

export default function Privacy() {
  return (
    <>
      <NextSeo
        title='Create your portal, pick a plan later'
        description='Try Copilot free for 14 days, no credit card required'
      />
      <Layout>
        <Navbar isEnterPrice={true} headerIndex={HEADER_LIST.ENTERPRICE} />
        <MainSection>
          <PrivacuHero>
            <Container>
              <h2>Sitemap</h2>
            </Container>
          </PrivacuHero>
          <ContentInfo>
            <Container>
              <InfoWrap>
                <h4>Company</h4>
                <InfoLink>
                  <Link href='/brands'>Brand</Link>
                  <Link href='/pricing'>Pricing</Link>
                  <Link href='/jobs'>Jobs</Link>
                  <Link href='/copilot-plus'>Copilot Plus</Link>
                </InfoLink>
              </InfoWrap>
              <InfoWrap>
                <h4>Resources</h4>
                <InfoLink>
                  <Link href='http://copilot.com/blog'>Blog</Link>
                  <Link href='http://security.copilot.com'>Security</Link>
                  <Link href='http://copilot.com/updates'>What’s New</Link>
                  <Link href='/university'>Video Tutorials</Link>
                  <Link href='http://docs.copilot.com/'>API Reference</Link>
                  <Link href='https://status.copilot.com/'>System Status</Link>
                </InfoLink>
              </InfoWrap>
              <InfoWrap>
                <h4>Features</h4>
                <InfoLink>
                  <Link href='/features/messaging-app'>Messaging App</Link>
                  <Link href='/features/billing-app'>Billing App</Link>
                  <Link href='/features/files-app'>Files App</Link>
                  <Link href='/features/forms-app'>Forms App</Link>
                  <Link href='/features/helpdesk-app'>Helpdesk App</Link>
                  <Link href='/apps'>Partner Apps</Link>
                </InfoLink>
              </InfoWrap>

              <InfoWrap>
                <h4>Solutions</h4>
                <InfoLink>
                  <Link href='/solutions/accounting-firms'>Accounting Firms</Link>
                  <Link href='/solutions/marketing-agencies'>Marketing Agencies</Link>
                  <Link href='/copilot.com/solutions/startups'>Startups</Link>
                </InfoLink>
              </InfoWrap>
              <InfoWrap>
                <h4>Legal</h4>
                <InfoLink>
                  <Link href='/legal/terms-of-service'>Terms of service</Link>
                  <Link href='/legal/privacy-policy'>Privacy policy</Link>
                </InfoLink>
              </InfoWrap>
              <InfoWrap>
                <h4>Contact us</h4>
                <InfoLink>
                  <Link href='/book-demo'>Book demo</Link>
                  <Link href='https://join.slack.com/t/copilotcommunity/shared_invite/zt-q6stzfgx-vBf7LBtbKFv63W4n_Otx4w'>
                    Join community
                  </Link>
                </InfoLink>
              </InfoWrap>
              <InfoWrap>
                <h4>Other</h4>
                <InfoLink>
                  <Link href='https://dashboard.copilot.com/login?step=signIn'>Log in</Link>
                  <Link href='https://dashboard.copilot.com/onboarding'>Start trial</Link>
                </InfoLink>
              </InfoWrap>
            </Container>
          </ContentInfo>
        </MainSection>
      </Layout>
    </>
  );
}
