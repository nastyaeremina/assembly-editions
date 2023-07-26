'use client';
import './styles/globals.css';
import React, { use, useCallback, useEffect } from 'react';
import { Provider } from 'react-redux';
import parse from 'html-react-parser';
import StyledJsxRegistry from './registry';
import store from './store/store';
import Favicon from './components/favicon';
import { getCustomeCode } from './lib/contentful-staticCode';
import { isEmpty } from './helpers/helpers';

async function getContent() {
  return await getCustomeCode();
}
const getContentPromis = getContent();

export default function Layout({ children }) {
  const data = use(getContentPromis);
  const header = data?.filter((item) => item.name === 'Head')?.[0] ?? null;
  const afterBody = data?.filter((item) => item.name === 'After Body Tag Start')?.[0] ?? null;
  const beforeBody = data?.filter((item) => item.name === 'Before Body Tag Close')?.[0] ?? null;
  const newData = { header, beforeBody, afterBody };
  const loadData = useCallback(async () => {
    try {
      const { appInit } = require('./services/appInitHelpers');
      await store.dispatch(appInit());
    } catch (error) {
      console.log('error', error);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

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
          <Provider store={store}>
            <StyledJsxRegistry>{children}</StyledJsxRegistry>
          </Provider>
          {!isEmpty(newData?.beforeBody?.code) &&
            process.env.NODE_ENV === 'production' &&
            parse(newData?.beforeBody?.code)}
        </body>
      </html>
    </>
  );
}
