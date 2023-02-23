import Image from 'next/image';
import copy from 'copy-to-clipboard';
import { useMemo, useState } from 'react';
import Layout from '../../components/layout';
import Navbar from '../../components/navbar/navbar';
import { Container } from '../../styles/commonStyles';
import {
  BrandHeroSection,
  BrandName,
  BrandImage,
  BrandImageLeft,
  HoverSection,
  BlackHover,
  BrandImageRight,
  CompanyIcon,
  HoverLink,
  Block1,
  ColorSection,
  BlockSub,
  BlockLight,
  BrandMain,
  ImgWrap
} from '../../styles/brandStyles';
import Button from '../../components/button/button';
import SEO from '../../components/seo';
import { BRAND_SEO_ID } from '../../constants/constant';
import { getSEOdata } from '../../lib/contentful-seo';

export default function Brand({ seoData }) {
  const [copy1, setCopy1] = useState('Copy');
  const [copy2, setCopy2] = useState('Copy');
  const [copy3, setCopy3] = useState('Copy');

  const copyBlock1 = useMemo(() => {
    return (
      <ImgWrap>
        <Block1 className='effect-goliath'>
          <BlockSub
            className='hover-name'
            onClick={() => {
              copy('#09AA6C');
              setCopy1('Copied!');
              const interval = setInterval(() => {
                setCopy1('Copy');
              }, 5000);
            }}>
            <p>{copy1}</p>
            <span>#09AA6C</span>
          </BlockSub>
        </Block1>
      </ImgWrap>
    );
  }, [copy1]);

  const copyBlock2 = useMemo(() => {
    return (
      <ImgWrap>
        <Block1 className='block2color effect-goliath'>
          <BlockSub
            className='hover-name'
            onClick={() => {
              copy('#E3FFEE');
              setCopy2('Copied!');
              const interval = setInterval(() => {
                setCopy2('Copy');
              }, 5000);
            }}>
            <p>{copy2}</p>
            <span>#E3FFEE</span>
          </BlockSub>
        </Block1>
      </ImgWrap>
    );
  }, [copy2]);

  const copyBlock3 = useMemo(() => {
    return (
      <ImgWrap>
        <Block1 className='block3color effect-goliath'>
          <BlockLight
            className='hover-name'
            onClick={() => {
              copy('#00160E');
              setCopy3('Copied!');
              const interval = setInterval(() => {
                setCopy3('Copy');
              }, 5000);
            }}>
            <p>{copy3}</p>
            <span>#00160E</span>
          </BlockLight>
        </Block1>
      </ImgWrap>
    );
  }, [copy3]);

  return (
    <>
      <SEO seoData={seoData} />
      <Layout>
        <Navbar />
        <BrandMain>
          <Container>
            <BrandHeroSection>
              <h1>Copilot Brand Guidelines</h1>
              <p>Resources for presenting the Copilot brand consistently and professionally.</p>
              <Button text={'Download Brand Assets'} href={'images/Copilot_Brand_Assets.zip'} />
            </BrandHeroSection>
            <BrandName>
              <h2>Naming</h2>
              <p>
                “Copilot” is a single word that is always spelled with a capital “C”, lowercase “p”, and without a dash.
                It is the brand name of our company and product. The company legal name is Copilot Platforms Inc.
              </p>
            </BrandName>
            <BrandName>
              <h2>Wordmark</h2>
              <p>
                The Copilot wordmark should be used in all references to Copilot as space allows. Monochrome usage is
                also acceptable, preferably using the brand colors below.
              </p>
              <BrandImage>
                <ImgWrap>
                  <BrandImageLeft className='effect-goliath'>
                    <Image
                      src='/images/logo.svg'
                      alt='logo'
                      width={405}
                      height={90}
                      layout={'fixed'}
                      className='firsticon'
                    />
                    <Image
                      src='/images/brandmobi.svg'
                      alt='logo'
                      width={226}
                      height={50}
                      layout={'fixed'}
                      className='mobileshow'
                    />
                    <a href='/images/Copilot_Wordmark_LightGreen.png' download>
                      <HoverSection className='hover-name'>
                        <p>Download</p>
                        <Image
                          src='/images/download.svg'
                          alt='download'
                          width={20}
                          height={20}
                          layout={'fixed'}
                          className='downdesk'
                        />
                        <Image
                          src='/images/mobidown.svg'
                          alt='download'
                          width={12}
                          height={12}
                          layout={'fixed'}
                          className='downmobi'
                        />
                      </HoverSection>
                    </a>
                  </BrandImageLeft>
                </ImgWrap>
                <ImgWrap>
                  <BrandImageRight className='effect-goliath'>
                    <Image
                      src='/images/blacklogo.svg'
                      alt='logo'
                      width={405}
                      height={90}
                      layout={'fixed'}
                      className='firsticon'
                    />
                    <Image
                      src='/images/logoblackbg.svg'
                      alt='logo'
                      width={226}
                      height={50}
                      layout={'fixed'}
                      className='mobileshow'
                    />
                    <a href='/images/Copilot_Wordmark_DarkGreen.png' download>
                      <BlackHover className='hover-name'>
                        <p>Download</p>
                        <Image
                          src='/images/whitedownload.svg'
                          alt='download'
                          width={20}
                          height={20}
                          layout={'fixed'}
                          className='downdesk'
                        />
                        <Image
                          src='/images/lightdown.svg'
                          alt='download'
                          width={12}
                          height={12}
                          layout={'fixed'}
                          className='downmobi'
                        />
                      </BlackHover>
                    </a>
                  </BrandImageRight>
                </ImgWrap>
              </BrandImage>
            </BrandName>
            <BrandName>
              <h2>Logo</h2>
              <p>
                For tight layouts or logo-only grids, the Coplilot logomark is a concise way to refer to Copilot. Use
                with good judgment for your audience, as the Copilot wordmark has a stronger brand recognition.
              </p>
              <BrandImage>
                <ImgWrap>
                  <BrandImageLeft className='effect-goliath'>
                    <Image
                      src='/images/smalllogo.svg'
                      alt='logo'
                      width={133}
                      height={90}
                      layout={'fixed'}
                      className='firsticon'
                    />
                    <Image
                      src='/images/smalllogo.svg'
                      alt='logo'
                      width={74}
                      height={50}
                      layout={'fixed'}
                      className='mobileshow'
                    />
                    <a href='/images/Copilot_Symbol_Light-Green.png' download>
                      <HoverSection className='hover-name'>
                        <p>Download</p>
                        <Image
                          src='/images/download.svg'
                          alt='download'
                          width={20}
                          height={20}
                          layout={'fixed'}
                          className='downdesk'
                        />
                        <Image
                          src='/images/mobidown.svg'
                          alt='download'
                          width={12}
                          height={12}
                          layout={'fixed'}
                          className='downmobi'
                        />
                      </HoverSection>
                    </a>
                  </BrandImageLeft>
                </ImgWrap>
                <ImgWrap>
                  <BrandImageRight className='effect-goliath'>
                    <Image
                      src='/images/brandlogo.svg'
                      alt='logo'
                      width={133}
                      height={90}
                      layout={'fixed'}
                      className='firsticon'
                    />
                    <Image
                      src='/images/brandlogo.svg'
                      alt='logo'
                      width={74}
                      height={50}
                      layout={'fixed'}
                      className='mobileshow'
                    />
                    <a href='/images/Copilot_Symbol_Dark-Green.png' download>
                      <BlackHover className='hover-name'>
                        <p>Download</p>
                        <Image
                          src='/images/whitedownload.svg'
                          alt='download'
                          width={20}
                          height={20}
                          layout={'fixed'}
                          className='downdesk'
                        />
                        <Image
                          src='/images/mobidownl.svg'
                          alt='download'
                          width={12}
                          height={12}
                          layout={'fixed'}
                          className='downmobi'
                        />
                      </BlackHover>
                    </a>
                  </BrandImageRight>
                </ImgWrap>
              </BrandImage>
            </BrandName>
            <BrandName>
              <h2>Company icon</h2>
              <p>
                When referring to Copilot as a company, such as on social media, or where a “chip” design is required,
                it is acceptable to use this stylized icon with an appropriate corner radius.
              </p>
              <BrandImage>
                <ImgWrap>
                  <CompanyIcon className='effect-goliath'>
                    <Image
                      src='/images/primarylogo.svg'
                      alt='logo'
                      width={200}
                      height={200}
                      layout={'fixed'}
                      className='companyicon'
                    />
                    <Image
                      src='/images/mobicom.svg'
                      alt='logo'
                      width={104}
                      height={104}
                      layout={'fixed'}
                      className='companyiconmobi'
                    />

                    <a href='/images/Copilot_Icon_Square.png' download>
                      <HoverLink className='hover-name'>
                        <p>Download</p>
                        <Image
                          src='/images/whitedownload.svg'
                          alt='download'
                          width={20}
                          height={20}
                          layout={'fixed'}
                          className='downdesk'
                        />
                        <Image
                          src='/images/mobidownl.svg'
                          alt='download'
                          width={12}
                          height={12}
                          layout={'fixed'}
                          className='downmobi'
                        />
                      </HoverLink>
                    </a>
                  </CompanyIcon>
                </ImgWrap>
                <ImgWrap>
                  <CompanyIcon className='effect-goliath'>
                    <Image
                      src='/images/primarylogo2.svg'
                      alt='logo'
                      width={200}
                      height={200}
                      layout={'fixed'}
                      className='companyicon'
                    />
                    <Image
                      src='/images/radiusmobi.svg'
                      alt='logo'
                      width={104}
                      height={104}
                      layout={'fixed'}
                      className='companyiconmobi'
                    />
                    <a href='/images/Copilot_Icon_Circle.png' download>
                      <HoverLink className='hover-name'>
                        <p>Download</p>
                        <Image
                          src='/images/whitedownload.svg'
                          alt='download'
                          width={20}
                          height={20}
                          layout={'fixed'}
                          className='downdesk'
                        />
                        <Image
                          src='/images/mobidownl.svg'
                          alt='download'
                          width={12}
                          height={12}
                          layout={'fixed'}
                          className='downmobi'
                        />
                      </HoverLink>
                    </a>
                  </CompanyIcon>
                </ImgWrap>
              </BrandImage>
            </BrandName>
            <BrandName>
              <h2>Colors</h2>
              <p>Copilot’s primary brand color is a cool green that’s been slightly desaturated and darkened. </p>
              <ColorSection>
                {copyBlock1}
                {copyBlock2}
                {copyBlock3}
              </ColorSection>
            </BrandName>
          </Container>
        </BrandMain>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const seoData = (await getSEOdata(BRAND_SEO_ID)) ?? [];
  seoData.canonical="https://www.copilot.com/brand";
  return {
    props: {
      seoData
    }
  };
}
