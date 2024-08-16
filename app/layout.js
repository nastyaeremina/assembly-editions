import './styles/globals.css';
import React from 'react';
import parse from 'html-react-parser';
import StyledJsxRegistry from './registry';
import Favicon from './components/favicon';
import { getCustomeCode } from './lib/contentful-staticCode';
import { isEmpty } from './helpers/helpers';
import { Providers } from './redux/provider';
async function getContent() {
  return await getCustomeCode();
}

export const metadata = {
  metadataBase: new URL('https://www.copilot.com')
};

export default async function Layout({ children }) {
  const data = await getContent();
  const header = data?.filter((item) => item.name === 'Head')?.[0] ?? null;
  const afterBody = data?.filter((item) => item.name === 'After Body Tag Start')?.[0] ?? null;
  const beforeBody = data?.filter((item) => item.name === 'Before Body Tag Close')?.[0] ?? null;
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
          {!isEmpty(newData?.header?.code) && process.env.NODE_ENV === 'production' && parse(newData?.header?.code)}
        </head>
        <body>
          {!isEmpty(newData?.afterBody?.code) &&
            process.env.NODE_ENV === 'production' &&
            parse(newData?.afterBody?.code)}
          <Providers>
            <StyledJsxRegistry>{children}</StyledJsxRegistry>
          </Providers>

          {!isEmpty(newData?.beforeBody?.code) &&
            process.env.NODE_ENV === 'production' &&
            parse(newData?.beforeBody?.code)}
        </body>
      </html>
    </>
  );
}
