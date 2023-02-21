import { NextSeo } from 'next-seo';
import Image from 'next/image';
import ComparisonHero from '../../components/comparison/comparisonhero/comparisonhero';
import Modern from '../../components/comparison/modern/modern';
import Quote from '../../components/comparison/quote/quote';
import {
  ComparisonHide,
  ComparisonTable,
  Comparisontabledata,
  Details,
  G2criteria,
  G2group,
  G2progressbar,
  G2section,
  G2text,
  Groupdetail,
  Headingpart,
  MobileViewTable,
  Processdata
} from '../../components/comparison/styles';
import CTA from '../../components/cta/cta';
import Layout from '../../components/layout';
import Navbar from '../../components/navbar/navbar';
import { CopilotLogo } from '../../components/navbar/styles';
import { MainWrap } from '../../components/solution/clienttab/styles';
import { Container } from '../../styles/commonStyles';
import CopilotLogos from '../../public/images/blacklogo.svg';
import checkmark from '../../public/images/Check-mark.svg';
import cancelmark from '../../public/images/cancelmark.svg';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import FAQ from '../../components/faq/faq';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 12,
  borderRadius: 30,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 30,
    backgroundColor: theme.palette.mode === 'light' ? '#09AA6C' : 'red'
  }
}));
const BorderProgress = styled(LinearProgress)(({ theme }) => ({
  height: 12,
  borderRadius: 30,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 30,
    backgroundColor: theme.palette.mode === 'light' ? '#CCCCD0' : 'red'
  }
}));

export default function Comparison({ details }) {
  return (
    <>
      <Layout>
        <Navbar />
        <MainWrap>
          <ComparisonHero />
          <Modern />
          <Container>
            <ComparisonTable>
              <h2>Copilot and Suitedash Comparison</h2>
              <table>
                <thead>
                  <tr>
                    <th colSpan={3} className='leftheader'></th>
                    <th className='radius'>
                      <CopilotLogo alt='copilot logo' loading='lazy' width='188' height='40' src={CopilotLogos.src} />
                    </th>
                    <th className='secondheading'>Suitedash</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={3} className='leftside'>
                      Users
                    </td>
                    <td>Unlimited</td>
                    <td>Unlimited</td>
                  </tr>
                  <tr>
                    <td colSpan={3} className='leftside'>
                      Store leads and contacts
                    </td>
                    <td>50,000</td>
                    <td>Up to 30,000</td>
                  </tr>
                  <tr>
                    <td colSpan={3} className='leftside'>
                      Custom Fields
                    </td>
                    <td>
                      <Image src={checkmark} alt='check-mark' />
                    </td>
                    <td>
                      <Image src={checkmark} alt='check-mark' />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={3} className='leftside'>
                      Activity, task & pipeline management
                    </td>
                    <td>
                      <Image src={checkmark} alt='check-mark' />
                    </td>
                    <td>
                      <Image src={checkmark} alt='check-mark' />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={3} className='leftside'>
                      Calendar view and activity management
                    </td>
                    <td>
                      <Image src={checkmark} alt='check-mark' />
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td colSpan={3} className='leftside'>
                      Activity reminder notifications
                    </td>
                    <td>
                      <Image src={checkmark} alt='check-mark' />
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td colSpan={3} className='leftside'>
                      Meeting scheduler
                    </td>
                    <td>Unlimited</td>
                    <td>Limited</td>
                  </tr>
                </tbody>
              </table>
              <MobileViewTable>
                <ComparisonHide>
                  <Headingpart>
                    <CopilotLogo alt='copilot logo' loading='lazy' width='188' height='40' src={CopilotLogos.src} />
                  </Headingpart>
                  <Comparisontabledata>
                    <Details>
                      <Image src={checkmark} alt='check-mark' className='mobilecheckmark' />
                      <p>Unlimited Users</p>
                    </Details>
                    <Details>
                      <Image src={checkmark} alt='check-mark' className='mobilecheckmark' />
                      <p>50,000 Store leads and contacts</p>
                    </Details>
                    <Details>
                      <Image src={checkmark} alt='check-mark' className='mobilecheckmark' />
                      <p>Custom Fields</p>
                    </Details>
                    <Details>
                      <Image src={checkmark} alt='check-mark' className='mobilecheckmark' />
                      <p>Activity, task & pipeline management</p>
                    </Details>
                    <Details>
                      <Image src={checkmark} alt='check-mark' className='mobilecheckmark' />
                      <p>Calendar view and activity management</p>
                    </Details>
                    <Details>
                      <Image src={checkmark} alt='check-mark' className='mobilecheckmark' />
                      <p>Activity reminder notifications</p>
                    </Details>
                    <Details>
                      <Image src={checkmark} alt='check-mark' className='mobilecheckmark' />
                      <p>Unlimited Meeting scheduler</p>
                    </Details>
                  </Comparisontabledata>
                </ComparisonHide>
                <ComparisonHide className='mobilesecondtable'>
                  <Headingpart>
                    <h2>Suitedash</h2>
                  </Headingpart>
                  <Comparisontabledata>
                    <Details>
                      <Image src={checkmark} alt='check-mark' className='mobilecheckmark' />
                      <p>Unlimited Users</p>
                    </Details>
                    <Details>
                      <Image src={checkmark} alt='check-mark' className='mobilecheckmark' />
                      <p>Up to 30,000 Store leads and contacts</p>
                    </Details>
                    <Details>
                      <Image src={checkmark} alt='check-mark' className='mobilecheckmark' />
                      <p>Custom Fields</p>
                    </Details>
                    <Details>
                      <Image src={checkmark} alt='check-mark' className='mobilecheckmark' />
                      <p>Activity, task & pipeline management</p>
                    </Details>
                    <Details>
                      <Image src={cancelmark} alt='check-mark' className='mobilecheckmark' />
                      <p>Calendar view and activity management</p>
                    </Details>
                    <Details>
                      <Image src={cancelmark} alt='check-mark' className='mobilecheckmark' />
                      <p>Activity reminder notifications</p>
                    </Details>
                    <Details>
                      <Image src={cancelmark} alt='check-mark' className='mobilecheckmark' />
                      <p>Unlimited Meeting scheduler</p>
                    </Details>
                  </Comparisontabledata>
                </ComparisonHide>
              </MobileViewTable>
            </ComparisonTable>
            <G2section>
              <h2>What do customer say on G2?</h2>
              <G2group>
                <Groupdetail>
                  <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <rect width='16' height='16' rx='8' fill='#09AA6C' />
                  </svg>
                  <p>Copilot</p>
                </Groupdetail>
                <Groupdetail>
                  <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <rect width='16' height='16' rx='8' fill='#CCCCD0' />
                  </svg>
                  <p>Suitedash</p>
                </Groupdetail>
                <Groupdetail>
                  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' className='reporticon'>
                    <path
                      d='M17.1376 16.6182C17.9806 18.0542 18.8142 19.4739 19.6472 20.8921C15.9586 23.6641 10.2197 23.9991 5.97141 20.8069C1.0825 17.1304 0.278961 10.8573 2.89641 6.34171C5.90685 1.14777 11.5404 -0.000905633 15.1676 0.841372C15.0695 1.05056 12.897 5.47452 12.897 5.47452C12.897 5.47452 12.7253 5.48559 12.6282 5.48744C11.556 5.53204 10.7575 5.77691 9.90165 6.21128C8.96264 6.69225 8.15793 7.39166 7.55787 8.24838C6.9578 9.10511 6.58064 10.0931 6.45936 11.1259C6.33281 12.1733 6.48036 13.2352 6.88808 14.2111C7.23281 15.0361 7.72045 15.7689 8.37418 16.3875C9.37703 17.3375 10.5704 17.9256 11.9537 18.1204C13.2637 18.305 14.5236 18.1222 15.7041 17.5399C16.1469 17.3218 16.5236 17.0809 16.9639 16.7505C17.02 16.7148 17.0699 16.6696 17.1376 16.6182Z'
                      fill='#FF492C'
                    />
                    <path
                      d='M17.1463 4.02373C16.9322 3.81701 16.7339 3.62628 16.5364 3.43432C16.4186 3.31989 16.3051 3.20083 16.1845 3.08917C16.1412 3.04887 16.0905 2.9938 16.0905 2.9938C16.0905 2.9938 16.1315 2.90828 16.1491 2.87321C16.38 2.41824 16.742 2.08569 17.1713 1.82113C17.6461 1.52637 18.1993 1.37638 18.7609 1.39015C19.4795 1.40399 20.1476 1.57965 20.7114 2.05278C21.1276 2.40193 21.341 2.84491 21.3786 3.37372C21.4413 4.26583 21.0652 4.94907 20.3184 5.42589C19.8797 5.70644 19.4065 5.92332 18.932 6.18018C18.6703 6.322 18.4465 6.44659 18.1908 6.70315C17.9658 6.96063 17.9548 7.20335 17.9548 7.20335L21.3542 7.19904V8.68518H16.1071V8.54152C16.087 7.81121 16.1738 7.12398 16.5145 6.46074C16.8279 5.85226 17.3149 5.40682 17.9 5.06381C18.3506 4.79956 18.8251 4.57469 19.2767 4.31167C19.5553 4.14955 19.7521 3.91176 19.7506 3.56691C19.7506 3.27097 19.5312 3.00795 19.2178 2.92582C18.4788 2.73017 17.7267 3.04241 17.3356 3.70626C17.2785 3.80316 17.2202 3.89945 17.1463 4.02373ZM23.7215 15.0379L20.8568 10.1818H15.1879L12.3047 15.0881H18.0153L20.8333 19.9212L23.7215 15.0379Z'
                      fill='#FF492C'
                    />
                  </svg>
                  <p className='report'>Read full report</p>
                </Groupdetail>
              </G2group>
              <G2criteria>
                <G2text>
                  <h3>Ease of Setup</h3>
                  <G2progressbar>
                    <Processdata>
                      <span>9.0</span>
                      <BorderLinearProgress variant='determinate' value={90} />
                    </Processdata>
                    <Processdata>
                      <span className='seconddata'>6.6</span>
                      <BorderProgress variant='determinate' value={66} />
                    </Processdata>
                  </G2progressbar>
                </G2text>
                <G2text>
                  <h3>Ease of Admin</h3>
                  <G2progressbar>
                    <Processdata>
                      <span>7.5</span>
                      <BorderLinearProgress variant='determinate' value={75} />
                    </Processdata>
                    <Processdata>
                      <span className='seconddata'>8.6</span>
                      <BorderProgress variant='determinate' value={86} />
                    </Processdata>
                  </G2progressbar>
                </G2text>
                <G2text>
                  <h3>Ease of Use</h3>
                  <G2progressbar>
                    <Processdata>
                      <span>9.1</span>
                      <BorderLinearProgress variant='determinate' value={91} />
                    </Processdata>
                    <Processdata>
                      <span className='seconddata'>4.0</span>
                      <BorderProgress variant='determinate' value={40} />
                    </Processdata>
                  </G2progressbar>
                </G2text>
                <G2text>
                  <h3>Quality of Support</h3>
                  <G2progressbar>
                    <Processdata>
                      <span>8.8</span>
                      <BorderLinearProgress variant='determinate' value={88} />
                    </Processdata>
                    <Processdata>
                      <span className='seconddata'>9.6</span>
                      <BorderProgress variant='determinate' value={96} />
                    </Processdata>
                  </G2progressbar>
                </G2text>
              </G2criteria>
            </G2section>
          </Container>
          <Quote />
          <FAQ contentID={'724Cny0Z9XBus7znacIxWs'} />
          <CTA />
        </MainWrap>
      </Layout>
    </>
  );
}
