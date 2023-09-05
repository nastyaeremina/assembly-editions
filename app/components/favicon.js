import React from 'react';

export default function Favicon() {
  return (
    <>
      <link rel='apple-touch-icon' sizes='180x180' href='/favicons/apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/favicons/favicon32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/favicons/favicon16x16.png' />
      <link rel='mask-icon' href='/favicons/safari-pinned-tab.svg' color='#000000' />
      <link rel='manifest' href='/favicons/site.webmanifest' />
      <link rel='shortcut icon' href='/favicons/favicon.ico' />
      <meta name='theme-color' content='#000' />
      <meta property='og:type' content='website'></meta>
      <meta name='msapplication-config' content='/favicons/browserconfig.xml' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0'></meta>
    </>
  );
}
