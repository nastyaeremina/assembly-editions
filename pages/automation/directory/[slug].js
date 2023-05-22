import Layout from '/components/layout';
import Link from 'next/link';
import Navbar from '../../../components/navbar/navbar';
import { DetailLink, AppsDetailMain } from '../../../styles/appsStyles';
import { Container, PrimaryButton } from '../../../styles/commonStyles';
import CTA from '../../../components/cta/cta';
import Image from 'next/image';
import {
  DetailButtonSection,
  DetailCaption,
  DetailTitle,
  Head,
  IconButton,
  ImageSection,
  LogoSection
} from '../../../styles/automationStyles';
import bluelogo from '../../../public/images/bluelogo.png';
import Vector from '../../../public/images/vector.svg';
import Make from '../../../public/images/make.svg';
import IconWithButton from '../../../components/button/iconbutton';
import Button from '../../../components/button/button';
import Graphic from '../../../public/images/graphics.png';
import FeatureSlider from '../../../components/FeatureSlider/featureslider';

export default function AutomationDetail() {
  return (
    <>
      <Layout>
        <Navbar />
        <AppsDetailMain>
          <Container>
            <Link href='/apps'>
              <DetailLink>
                <svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M8.42969 1.37109L3.8012 5.99958L8.42969 10.6281'
                    stroke='#757575'
                    stroke-width='1.92854'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
                <p>Back to all Automations</p>
              </DetailLink>
            </Link>
          </Container>
        </AppsDetailMain>
        <Container>
          <LogoSection>
            <Image src={bluelogo} alt='logo' width={80} height={80} />
            <Image src={bluelogo} alt='logo' width={80} height={80} />
          </LogoSection>
          <DetailTitle>Create clients in Copilot when new forms are submitted in Calendly</DetailTitle>
          <DetailCaption>
            Are you spending too much time manually adding event attendees to your Copilot portal? With the power of
            this Zap, the repetitive work is done for you. This integration will automatically add every new Calendly
            invitee that books an event with you to Copilot as a new client, saving you time on manual work.
          </DetailCaption>
          <DetailButtonSection>
            <IconWithButton href={'#'} buttonname={'Go to Zapier'} img={Vector} />
            <IconWithButton href={'#'} buttonname={'Go to Make'} img={Make} />
            <Button
              bgColor={'transparent'}
              fontColor={'#000000'}
              borderColor={'#000000'}
              text={'Read setup instructions'}
              href={'#'}
              hoverColor={'rgba(0, 0, 0, 0.5)'}
              target={'_blank'}
            />
          </DetailButtonSection>
        </Container>
        <ImageSection>
          <Container>
            <Image src={Graphic} alt='detail-image' width={849} height={232} className='detailimage' />
          </Container>
        </ImageSection>
        <Container>
          <Head>Related Automations</Head>
        </Container>
        <FeatureSlider data={[1, 2, 3, 4, 5, 6, 7, 8, 9]} isDetailSlider={true} />
        <CTA />
      </Layout>
    </>
  );
}
