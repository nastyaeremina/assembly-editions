'use client';
import copy from 'copy-to-clipboard';
import { useMemo, useState } from 'react';
import { Container } from '../../../styles/commonStyles';
import {
  BrandName,
  Block1,
  BrandMain,
  SectionWrapper,
  BrandImageSection,
  LogoSection,
  DownloadButton,
  Detail,
  ColorCode
} from '../../../styles/brandStyles';
import StandardHero from '../../standardHero/standardHero';
import { BRAND_PAGE_ASSET_TONE, BRAND_PAGE_ASSET_TYPE, HeroTypes } from '../../../constants/constant';
import AssetCard from './assetCard';
import ToastMessage from '../../ToastMessage/toastMessage';

export default function BrandPage() {
  const [copy1, setCopy1] = useState('Copy');
  const [copy2, setCopy2] = useState('Copy');
  const [copy3, setCopy3] = useState('Copy');
  const [showToast, setShowToast] = useState(false);

  const handleCopy = (colorCode, setCopyState) => {
    copy(colorCode);
    setShowToast(true);

    const interval = setInterval(() => {
      setCopyState('Copy');
    }, 5000);
  };

  // copy block
  const copyBlock1 = useMemo(() => {
    return (
      <Block1 tone={BRAND_PAGE_ASSET_TONE.DARK} onClick={() => handleCopy('#101010', setCopy1, 'Off-black')}>
        <Detail>
          <ColorCode tone={BRAND_PAGE_ASSET_TONE.DARK}>
            <p className='color-name'>Off-black</p>
            <p>RGB 16, 16, 16</p>
            <p>#101010</p>
          </ColorCode>
          <DownloadButton className='download-button' tone={BRAND_PAGE_ASSET_TONE.DARK}>
            {copy1}
          </DownloadButton>
        </Detail>
      </Block1>
    );
  }, [copy1]);

  const copyBlock2 = useMemo(() => {
    return (
      <Block1 tone={BRAND_PAGE_ASSET_TONE.BLUE} onClick={() => handleCopy('#BCE7F4', setCopy2, 'Assembly-blue')}>
        <Detail>
          <ColorCode tone={BRAND_PAGE_ASSET_TONE.BLUE}>
            <p className='color-name'>Assembly-blue</p>
            <p>RGB 188, 231, 244</p>
            <p>#BCE7F4</p>
          </ColorCode>
          <DownloadButton className='download-button' tone={BRAND_PAGE_ASSET_TONE.BLUE}>
            {copy2}
          </DownloadButton>
        </Detail>
      </Block1>
    );
  }, [copy2]);

  const copyBlock3 = useMemo(() => {
    return (
      <Block1 tone={BRAND_PAGE_ASSET_TONE.LIGHT} onClick={() => handleCopy('#FBFBF5', setCopy3, 'Off-white')}>
        <Detail>
          <ColorCode tone={BRAND_PAGE_ASSET_TONE.LIGHT}>
            <p className='color-name'>Off-white</p>
            <p>RGB 251, 251, 245</p>
            <p>#FBFBF5</p>
          </ColorCode>
          <DownloadButton className='download-button' tone={BRAND_PAGE_ASSET_TONE.LIGHT}>
            {copy3}
          </DownloadButton>
        </Detail>
      </Block1>
    );
  }, [copy3]);

  return (
    <>
      <BrandMain>
        <div className='standard-page'>
          <StandardHero
            type={HeroTypes.CENTER}
            isDownload={true}
            data={{
              heroTitle: 'Assembly Brand Guidelines',
              heroDescription: 'Resources for presenting the Assembly brand consistently and professionally.',
              primaryButtonLink: '/images/Assembly_Brand_Assets.zip',
              primaryButtonText: 'Download brand assets'
            }}
          />

          <Container>
            <SectionWrapper>
              <BrandName className='first-item'>
                <h2>Introduction</h2>
                <p>
                  Our brand strategy guides everything we do. It clarifies our purpose, who we serve, and how we stand
                  apart – while reflecting the essence of our brand.
                </p>
              </BrandName>
              <BrandName>
                <h2>Naming & Clear Space</h2>
                <p>
                  "Assembly" is a single word that is always spelled with a capital "A", lowercase "s", and without a
                  dash. It is the brand name of our company and product. The company legal name is Assembly Platforms
                  Inc. On social media, you can refer to us with #Assembly.
                </p>
                <p>
                  We aim to maintain clear space around the logo to ensure visibility and impact. This space prevents
                  any elements from crowding the logo, allowing it to stand out and be easily recognisable. The clear
                  space enhances legibility and preserves the integrity of the design across different applications.
                </p>
              </BrandName>
              <BrandName>
                <h2>Logo wordmark</h2>
                <p>
                  The logo serves as the primary brand signifier. It is the cornerstone of our brand identity and
                  anchors our visual identity in all communications.
                </p>
                <BrandImageSection>
                  <AssetCard href='/images/assembly-logo-dark.png' download />
                  <AssetCard tone={BRAND_PAGE_ASSET_TONE.BLUE} href='/images/assembly-logo-light.png' download />
                  <AssetCard tone={BRAND_PAGE_ASSET_TONE.LIGHT} href='/images/assembly-logo-light.png' download />
                </BrandImageSection>
              </BrandName>
              <BrandName>
                <h2>Logo</h2>
                <p>
                  When referring to Assembly as a company, such as on social media, or where a "chip" design is
                  required, it is acceptable to use this stylized icon with an appropriate corner radius.
                </p>
                <LogoSection>
                  <AssetCard
                    href='/images/assembly-logo-small-dark.png'
                    download
                    variant={BRAND_PAGE_ASSET_TYPE.LOGO}
                  />
                  <AssetCard
                    tone={BRAND_PAGE_ASSET_TONE.BLUE}
                    href='/images/assembly-logo-small-light.png'
                    download
                    variant={BRAND_PAGE_ASSET_TYPE.LOGO}
                  />
                  <AssetCard
                    tone={BRAND_PAGE_ASSET_TONE.LIGHT}
                    href='/images/assembly-logo-small-light.png'
                    download
                    variant={BRAND_PAGE_ASSET_TYPE.LOGO}
                  />
                </LogoSection>
              </BrandName>
              <BrandName>
                <h2>Company icon</h2>
                <p>
                  When referring to Assembly as a company, such as on social media, or where a "chip" design is
                  required, it is acceptable to use this stylized icon with an appropriate corner radius.
                </p>
                <LogoSection>
                  <AssetCard
                    href='/images/assembly-logo-circle-dark.png'
                    download
                    variant={BRAND_PAGE_ASSET_TYPE.COMPANY_ICON}
                  />
                  <AssetCard
                    tone={BRAND_PAGE_ASSET_TONE.BLUE}
                    href='/images/assembly-logo-circle-light.png'
                    download
                    variant='company_icon'
                  />
                  <AssetCard
                    tone={BRAND_PAGE_ASSET_TONE.LIGHT}
                    href='/images/assembly-logo-circle-light.png'
                    download
                    variant='company_icon'
                  />
                </LogoSection>
              </BrandName>
              <BrandName>
                <h2>Colors</h2>
                <p>
                  When referring to Assembly as a company, such as on social media, or where a "chip" design is
                  required, it is acceptable to use this stylized icon with an appropriate corner radius.
                </p>
                <BrandImageSection>
                  {copyBlock1}
                  {copyBlock2}
                  {copyBlock3}
                </BrandImageSection>
              </BrandName>
            </SectionWrapper>
          </Container>
        </div>
      </BrandMain>
      {showToast && <ToastMessage message={'Hex code copied to clipboard'} onClose={() => setShowToast(false)} />}
    </>
  );
}
