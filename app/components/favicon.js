import Head from 'next/head';

export default function Favicon() {
  return (
    <>
      <link rel="icon" href="/favicons/assembly-favicon-light.svg" media="(prefers-color-scheme: light)" type="image/svg+xml" />
      <link rel="icon" href="/favicons/assembly-favicon-dark.svg" media="(prefers-color-scheme: dark)" type="image/svg+xml" />

      <link rel="icon" href="/favicons/assembly-favicon-light-16x16.png" media="(prefers-color-scheme: light)" sizes="16x16" type="image/png" />
      <link rel="icon" href="/favicons/assembly-favicon-dark-16x16.png" media="(prefers-color-scheme: dark)" sizes="16x16" type="image/png" />
      <link rel="icon" href="/favicons/assembly-favicon-light-32x32.png" media="(prefers-color-scheme: light)" sizes="32x32" type="image/png" />
      <link rel="icon" href="/favicons/assembly-favicon-dark-32x32.png" media="(prefers-color-scheme: dark)" sizes="32x32" type="image/png" />
      <link rel="icon" href="/favicons/assembly-favicon-light-192x192.png" media="(prefers-color-scheme: light)" sizes="192x192" type="image/png" />
      <link rel="icon" href="/favicons/assembly-favicon-dark-192x192.png" media="(prefers-color-scheme: dark)" sizes="192x192" type="image/png" />

      <link rel="apple-touch-icon" href="/favicons/assembly-favicon-light-180x180.png" media="(prefers-color-scheme: light)" sizes="180x180" />
      <link rel="apple-touch-icon" href="/favicons/assembly-favicon-dark-180x180.png" media="(prefers-color-scheme: dark)" sizes="180x180" />

      <link rel='manifest' href='/favicons/site.webmanifest' />
      <link rel='shortcut icon' href='/favicons/favicon.ico' />
      <meta name='theme-color' content='#000' />
      <meta property='og:type' content='website'></meta>
      <meta name='msapplication-config' content='/favicons/browserconfig.xml' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0'></meta>
    </>
  );
}
