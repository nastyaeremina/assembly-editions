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
