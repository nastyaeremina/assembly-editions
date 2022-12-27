import { theme } from '../pages/_app';

export const HEADER_LIST = {
  DEFAULT: 0,
  MESSAGING: 1,
  FILES: 2,
  BILLING: 3,
  FORMS: 4,
  HELPDESK: 5,
  CONTRACT: 6,
  HOME: 7,
  ENTERPRICE: 8
};

export const MUDULE_LIST = {
  BILLING: 'billing',
  CONTRACT: 'contract',
  FILES: 'file',
  FORMS: 'form',
  KNOWLEDGE: 'knowledge',
  MESSAGING: 'message',
  HELPDESK: 'helpdesk'
};

export const FUNCTION_LIST = {
  MESSAGING: 0,
  BILLING: 1,
  FILES: 2,
  FORMS: 3,
  HELPDESK: 4,
  CONTRACT: 5
};

export const HOME_MODULE_LIST = {
  Messaging: 0,
  Billing: 1,
  Files: 2,
  Forms: 3,
  Helpdesk: 4
};

export const MODULE_COLOR_LIST = [
  {
    bgColor: theme.colors.browndark,
    fontColor: theme.colors.brownlight,
    borderColor: theme.colors.brownmidlight,
    buttonBgColor: theme.colors.brown,
    buttonFontColor: theme.colors.whiteColor
  },
  {
    bgColor: theme.colors.bluedark,
    fontColor: theme.colors.bluelight,
    borderColor: theme.colors.bluemidlight,
    buttonBgColor: theme.colors.blueprimary,
    buttonFontColor: theme.colors.whiteColor
  },
  {
    bgColor: theme.colors.purpledark,
    fontColor: theme.colors.purplelight,
    borderColor: theme.colors.purplemidlight,
    buttonBgColor: theme.colors.purpleprimary,
    buttonFontColor: theme.colors.whiteColor
  },
  {
    bgColor: theme.colors.yellowdark,
    fontColor: theme.colors.yellowlight,
    borderColor: theme.colors.yellowmidlight,
    buttonBgColor: theme.colors.yellow,
    buttonFontColor: theme.colors.yellowdark
  },
  {
    bgColor: theme.colors.orangedark,
    fontColor: theme.colors.orangelight,
    borderColor: theme.colors.orangemidlight,
    buttonBgColor: theme.colors.orangeprimary,
    buttonFontColor: theme.colors.whiteColor
  }
];

export const MODULE_GRADIENT_IMAGE_LIST = {
  message: { fullScreen: '/images/message_gradient.svg', responsive: '/images/messagebg.svg' },
  billing: { fullScreen: '/images/billing_gradient.svg', responsive: '/images/billbgs.svg' },
  file: { fullScreen: '/images/files_gradient.svg', responsive: '/images/filebg.svg' },
  form: { fullScreen: '/images/forms_gradient.svg', responsive: '/images/formbg.svg' },
  helpdesk: { fullScreen: '/images/helpdesk_gradient.svg', responsive: '/images/helpbg.svg' },
  contract: { fullScreen: '/images/contract_gradient.svg', responsive: '/images/contractbg.svg' }
};
export const NAVBAR_COLOR_LIST = [
  {
    bgColor: 'rgba(255, 255, 253, 0.8)',
    borderBottomColor: '#CCCCD0',
    fontColor: '#131313',
    buttonColor: '#000000',
    primaryColor: '#09AA6C',
    lineColor: '#00160E'
  },

  {
    bgColor: 'rgba(18, 8, 0, 0.8)',
    borderBottomColor: '#85664D',
    fontColor: '#F3F3F2',
    buttonColor: '#D7B79E',
    primaryColor: '#D7B79E',
    lineColor: '#FFF6F0',
    lightColor: '#FFF7F0'
  },
  {
    bgColor: 'rgba(1, 1, 29, 0.8)',
    borderBottomColor: '#3D3FBE',
    fontColor: '#F3F3F2',
    buttonColor: '#989AF2',
    primaryColor: '#989AF2',
    lineColor: '#EFEEFF',
    lightColor: '#EFEEFF'
  },
  {
    bgColor: 'rgba(1, 41, 44, 0.8)',
    borderBottomColor: '#03888F',
    fontColor: '#F3F3F2',
    buttonColor: '#00AFB9',
    primaryColor: '#00AFB9',
    lineColor: '#E0FBFD',
    lightColor: '#E0FBFD'
  },
  {
    bgColor: 'rgba(23, 21, 0, 0.8)',
    borderBottomColor: '#958602',
    fontColor: '#F3F3F2',
    buttonColor: '#F3DA1A',
    primaryColor: '#F3DA1A',
    lineColor: '#FDFBEC',
    lightColor: '#FDFBEC',
    buttontextColor: theme.colors.yellowdark
  },
  {
    bgColor: 'rgba(28, 12, 0, 0.8)',
    borderBottomColor: '#CF650D',
    fontColor: '#F3F3F2',
    buttonColor: '#FD8C2E',
    primaryColor: '#FD8C2E',
    lineColor: '#FFEDDE',
    lightColor: '#FFEDDE'
  },
  {
    bgColor: 'rgba(39, 0, 10, 0.8)',
    borderBottomColor: '#B8294B',
    fontColor: '#F3F3F2',
    buttonColor: '#F35B80',
    primaryColor: '#F35B80',
    lineColor: '#FFEFF3',
    lightColor: '#FFEFF3'
  },
  {
    bgColor: 'rgba(253, 253, 251, 0.8)',
    borderBottomColor: '#CCCCD0',
    fontColor: '#131313',
    buttonColor: '#000000',
    primaryColor: '#09AA6C',
    lineColor: '#00160E',
    lightColor: ''
  },

  {
    bgColor: 'rgba(0, 22, 14, 0.8)',
    borderBottomColor: '#003F27',
    fontColor: '#E3FFEE',
    buttonColor: '#003F27',
    primaryColor: '#09AA6C',
    lineColor: '#E3FFEE',
    lightColor: '#E3FFEE'
  }
];
export const MODULE_IMAGE_LIST = [
  {
    ctaImage: '',
    quoteBackgroundImage: ''
  }
];
export const MONTH_LIST = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
export const APPS_TYPE = {
  PARTNER_APP: 'Partner App',
  DATA_INTEGRATION: 'Data Integration'
};

export const HOME_FEATURES_TAB_ID = '6R0hkm1PSDEGOmel7Q6wva';
export const FEATURES_MESSAG_TAB_ID = '2DgpDztGKBN2eo2rKNQ67p';
export const FEATURES_BILLING_TAB_ID = '2iCYntWByiNtdj9Hkqzpeo';
export const FEATURES_FILES_TAB_ID = '5xbH2EByTEWmPrtcSTWRdy';
export const FEATURES_FORMS_TAB_ID = '3FflbItaKCbpfWnbHfFmIg';
export const FEATURES_HELPDESK_TAB_ID = '4oQSJTMTBvBkHulyboUzLz';

export const FEATURES_MESSAG_ID = '3j6okJbvtbNtRAXhtQC869';
export const FEATURES_BILLING_ID = '2biTe250v3ZnEWb49koKtb';
export const FEATURES_FILES_ID = '6glhfdfv9r7EMxEcyF3dQk';
export const FEATURES_FORMS_ID = '660hOhF7kjJEyZIdEeKZyr';
export const FEATURES_HELPDESK_ID = '1kQbm7K0BbqiTTTaAMsU4m';

export const SOLUTION_ACCOUNTING_FIRMS_ID = '7nxVRnK4EKqk1szL17P9Kz';
export const SOLUTION_MARKETING_AGENCY_ID = '6UVZmBKVKmPACUNLAYBn2s';
export const SOLUTION_STARTUP_ID = '2XEKSuKkBKBc5Tz9x1Z4Rc';

export const SITEMAP_CONTENT_ID = '6X6ow3AYgMrEC6uVcPTEmX'
export const TERMS_OF_SERVICE_ID ='';
export const PRIVCY_POLICY_ID="46bwfuedc2NMOHEIj0AThy"