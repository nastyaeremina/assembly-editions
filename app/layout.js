import './styles/globals.css';
import React from 'react';
import parse from 'html-react-parser';
import StyledJsxRegistry from './registry';
import Favicon from './components/favicon';
import { getCustomeCode } from './lib/contentful-staticCode';
import { isEmpty } from './helpers/helpers';
import { Providers } from './redux/provider';
import {
  CUSTOM_CODE_AFTER_BODY_TAG_ID,
  CUSTOM_CODE_BEFORE_BODY_TAG_ID,
  CUSTOM_CODE_HEAD_ID
} from './constants/constant';

async function getContent() {
  const CustomCodeIds = [
    `"${CUSTOM_CODE_HEAD_ID}"`,
    `"${CUSTOM_CODE_AFTER_BODY_TAG_ID}"`,
    `"${CUSTOM_CODE_BEFORE_BODY_TAG_ID}"`
  ];
  return await getCustomeCode(CustomCodeIds);
}

export const metadata = {
  metadataBase: new URL('https://www.copilot.com')
};

export default async function Layout({ children }) {
  const data = await getContent();
  const header = data?.find((item) => item.sys.id === CUSTOM_CODE_HEAD_ID) ?? null;
  const afterBody = data?.find((item) => item.sys.id === CUSTOM_CODE_AFTER_BODY_TAG_ID) ?? null;
  const beforeBody = data?.find((item) => item.sys.id === CUSTOM_CODE_BEFORE_BODY_TAG_ID) ?? null;
  const newData = { header, beforeBody, afterBody };

  return (
    <>
      <html>
        <head>
          {/* preload all logos */}
          <link rel='preload' href='../public/images/whitelogo.svg' as='image' />
          <link rel='preload' href='../public/images/blacklogo.svg' as='image' />
          <link rel='preload' href='../public/images/greenlogo.svg' as='image' />
          <link rel='preload' href='../public/images/mobileblacklogo.svg' as='image' />
          <link rel='preload' href='../public/images/whitemobilelogo.svg' as='image' />
          <link rel='preload' href='../public/images/greenmblogo.svg' as='image' />
          <Favicon />
          {!isEmpty(newData?.header?.content) &&
            process.env.NODE_ENV === 'production' &&
            parse(newData?.header?.content)}
        </head>
        <body>
          {!isEmpty(newData?.afterBody?.content) &&
            process.env.NODE_ENV === 'production' &&
            parse(newData?.afterBody?.content)}
          <Providers>
            <StyledJsxRegistry>{children}</StyledJsxRegistry>
          </Providers>

          {!isEmpty(newData?.beforeBody?.content) &&
            process.env.NODE_ENV === 'production' &&
            parse(newData?.beforeBody?.content)}
        </body>
      </html>
    </>
  );
}
