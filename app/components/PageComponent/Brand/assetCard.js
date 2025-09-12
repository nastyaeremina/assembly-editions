'use client';

import React from 'react';
import { Card, Content, DownloadButton, Logo, LogoIcon } from '../../../styles/brandStyles';
import SVGComponent from '../../../../public/images/svg/SVGComponent';
import { BRAND_PAGE_ASSET_TONE, BRAND_PAGE_ASSET_TYPE } from '../../../constants/constant';

function AssetCard({ tone = BRAND_PAGE_ASSET_TONE.DARK, variant = BRAND_PAGE_ASSET_TYPE.LOGO_WORDMARK, href }) {
  const renderAsset = () => {
    switch (variant) {
      case BRAND_PAGE_ASSET_TYPE.LOGO_WORDMARK:
        return (
          <LogoIcon>
            <SVGComponent name='assembly-big-logo' width='272' height='50' viewBox='0 0 200 38' className='logo-icon' />
          </LogoIcon>
        );
      case BRAND_PAGE_ASSET_TYPE.LOGO:
        return (
          <Logo>
            <SVGComponent
              name='assembly-logo-small-icon'
              width='64'
              height='64'
              viewBox='0 0 64 64'
              className='logo-icon'
            />
          </Logo>
        );
      case BRAND_PAGE_ASSET_TYPE.COMPANY_ICON:
        return (
          <Logo>
            <SVGComponent
              name='assembly-logo-circle-icon'
              width='64'
              height='64'
              viewBox='0 0 64 64'
              className='circle-logo-icon'
            />
          </Logo>
        );
      default:
        return null;
    }
  };

  return (
    <Card tone={tone} href={href} download>
      <Content>
        {renderAsset()}
        <DownloadButton tone={tone} className='download-button'>
          Download
        </DownloadButton>
      </Content>
    </Card>
  );
}

export default AssetCard;
