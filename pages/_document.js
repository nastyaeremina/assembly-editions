import Document, { Html, Head, NextScript, Main } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import parse from 'html-react-parser';
import Script from 'next/script';
import { GTM_ID } from '../lib/gtm';
import { getCustomeCode } from '../lib/contentful-staticCode';
import { isEmpty } from '../helpers/helpers';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      const data = (await getCustomeCode()) ?? [];
      const header = data?.filter((item) => item.name === 'Head')?.[0] ?? null;
      const afterBody = data?.filter((item) => item.name === 'After Body Tag Start')?.[0] ?? null;
      const beforeBody = data?.filter((item) => item.name === 'Before Body Tag Close')?.[0] ?? null;
      const newData = { header, beforeBody, afterBody };
      return {
        ...initialProps,
        data: newData,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html>
        <Head>
          {!isEmpty(this?.props?.data?.header?.code) && parse(this?.props?.data?.header?.code)}
          <Script
            id='google-tag-manager'
            strategy='afterInteractive'
            dangerouslySetInnerHTML={{
              __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${GTM_ID}');
          `
            }}
          />
        </Head>
        <body>
          {!isEmpty(this?.props?.data?.afterBody?.code) && parse(this?.props?.data?.afterBody?.code)}
          <Main />
          <NextScript />
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-${GTM_ID}" height="0" width="0" style="display: none; visibility: hidden;" />`
            }}
          />
          {!isEmpty(this?.props?.data?.beforeBody?.code) && parse(this?.props?.data?.beforeBody?.code)}
        </body>
      </Html>
    );
  }
}
