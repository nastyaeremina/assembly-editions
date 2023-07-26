'use client';

import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager, ThemeProvider } from 'styled-components';

export default function StyledComponentsRegistry({ children }) {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());
  const theme = {
    fontfamily: {
      Bagoss: 'Bagoss',
      Everett: 'Everett'
    },
    colors: {
      primary: '#09AA6C',
      title: '#131313',
      body: '#4C4C4C',
      lightgray: '#757575',
      darkgray: '#5B5B5B',
      black: '#000000',
      whiteColor: '#FFFFFF',
      border: '#CCCCD0',
      neutral: '#F3F3F2',
      darkPrimary: '#2e69ce',
      textColor: '#424242',
      lightDark: '#333333',
      greendark: '#00160E',
      greenmiddark: '#003F27',
      greenmidlight: '#7DDAA0',
      greenlight: '#E3FFEE',
      lightBg: '#E3FFEE',
      blueprimary: '#00AFB9',
      bluedark: '#01292C',
      bluemiddark: '#01292C',
      bluemidlight: '#7ADCE1',
      bluelight: '#E0FBFD',
      purpleprimary: '#989AF2',
      purpledark: '#01011D',
      purplemiddark: '#3D3FBE',
      purplemidlight: '#B6B6EC',
      purplelight: '#EFEEFF',
      orangeprimary: '#FD8C2E',
      orangedark: '#1C0C00',
      orangemiddark: '#CF650D',
      orangemidlight: '#FFA55B',
      orangelight: '#FFEDDE',
      yellow: '#F3DA1A',
      yellowdark: '#171500',
      yellowmiddark: '#958602',
      yellowmidlight: '#F4E77E',
      yellowlight: '#FDFBEC',
      brown: '#D7B79E',
      browndark: '#120800',
      brownmiddark: '#85664D',
      brownmidlight: '#F4D8C4',
      brownlight: '#FFF7F0',
      magenta: '#F35B80',
      magentadark: '#27000A',
      magentamiddark: '#B8294B',
      magentamidlight: '#FF96AF',
      magentalight: '#FFEFF3',
      bordercolor: '#BEBEBF',
      footercolor: '#F3F3F2',
      caption: '#6E847C',
      bodycolor: '#4C4C4C',
      background: '#F8F8F8',
      bgpages: '#FDFDFB',
      hover: '#FF492C',
      bgcolor: '#FFFFFD',
      subtitle: '#3D3D3D'
    }
  };
  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== 'undefined') return <>{children}</>;

  return (
    <ThemeProvider theme={theme}>
      <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>{children}</StyleSheetManager>
    </ThemeProvider>
  );
}
