import './styles/globals.css';
import React from 'react';
import parse from 'html-react-parser';
import StyledJsxRegistry from './registry';
import Favicon from './components/favicon';
import { getCustomeCode } from './lib/contentful-staticCode';
import { isEmpty } from './helpers/helpers';
import { Providers } from './redux/provider';
import {
  CURRENT_SITE_URL,
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
  metadataBase: new URL(CURRENT_SITE_URL)
};

export default async function Layout({ children }) {
  const data = await getContent();
  const header = data?.find((item) => item.sys.id === CUSTOM_CODE_HEAD_ID) ?? null;
  const afterBody = data?.find((item) => item.sys.id === CUSTOM_CODE_AFTER_BODY_TAG_ID) ?? null;
  const beforeBody = data?.find((item) => item.sys.id === CUSTOM_CODE_BEFORE_BODY_TAG_ID) ?? null;
  const newData = { header, beforeBody, afterBody };

  return (
    <>
      <html lang='en'>
        <head>
          <Favicon />
          {!isEmpty(newData?.header?.content) &&
            process.env.VERCEL_ENV === 'production' &&
            parse(newData?.header?.content)}
        </head>
        <body>
          {!isEmpty(newData?.afterBody?.content) &&
            process.env.VERCEL_ENV === 'production' &&
            parse(newData?.afterBody?.content)}
          <Providers>
            <StyledJsxRegistry>{children}</StyledJsxRegistry>
          </Providers>

          {!isEmpty(newData?.beforeBody?.content) &&
            process.env.VERCEL_ENV === 'production' &&
            parse(newData?.beforeBody?.content)}
        </body>
      </html>
    </>
  );
}
