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

export const MODULE_COLOR_LIST = {
  Automation: {
    bgColor: theme.colors.greendark,
    fontColor: theme.colors.greenlight,
    // borderColor: theme.colors.orangemidlight,
    buttonBgColor: theme.colors.greendark,
    buttonFontColor: theme.colors.greenlight
  },
  Productdemo: {
    bgColor: theme.colors.whiteColor,
    fontColor: theme.colors.title,
    borderColor: theme.colors.primary,
    buttonBgColor: theme.colors.primary,
    buttonFontColor: theme.colors.whiteColor
  },
  Enterprice: {
    bgColor: 'rgba(0, 22, 14, 0.8)',
    borderBottomColor: '#003F27',
    fontColor: '#E3FFEE',
    buttonColor: '#003F27',
    primaryColor: '#09AA6C',
    lineColor: '#E3FFEE',
    lightColor: '#E3FFEE'
  }
};

export const FEATURE_THEME_LIST = {
  Brown: {
    colorList: {
      bgColor: 'rgba(18, 8, 0, 0.8)',
      borderBottomColor: '#85664D',
      fontColor: '#F3F3F2',
      buttonColor: '#D7B79E',
      primaryColor: '#D7B79E',
      lineColor: '#FFF6F0',
      lightColor: '#FFF7F0',
      borderColor: theme.colors.brownmidlight,
      buttonBgColor: theme.colors.brown,
      buttonFontColor: theme.colors.whiteColor,
      dark: theme.colors.browndark,
      light: theme.colors.brownlight
    },
    imageList: {
      fullScreen: '/images/message_gradient.svg',
      responsive: '/images/messagebg.svg',
      bgImage: '/images/messagebg.svg'
    }
  },
  Blue: {
    colorList: {
      bgColor: 'rgba(1, 41, 44, 0.8)',
      borderBottomColor: '#03888F',
      fontColor: '#F3F3F2',
      buttonColor: '#00AFB9',
      primaryColor: '#00AFB9',
      lineColor: '#E0FBFD',
      lightColor: '#E0FBFD',
      borderColor: theme.colors.bluemidlight,
      buttonBgColor: theme.colors.blueprimary,
      buttonFontColor: theme.colors.whiteColor,
      dark: theme.colors.bluedark,
      light: theme.colors.bluelight
    },
    imageList: {
      fullScreen: '/images/billing_gradient.svg',
      responsive: '/images/billbgs.svg',
      bgImage: '/images/billhoverbg.svg'
    }
  },
  Purple: {
    colorList: {
      bgColor: 'rgba(1, 1, 29, 0.8)',
      borderBottomColor: '#3D3FBE',
      fontColor: '#F3F3F2',
      buttonColor: '#989AF2',
      primaryColor: '#989AF2',
      lineColor: '#EFEEFF',
      lightColor: '#EFEEFF',
      borderColor: theme.colors.purplemidlight,
      buttonBgColor: theme.colors.purpleprimary,
      buttonFontColor: theme.colors.whiteColor,
      dark: theme.colors.purpledark,
      light: theme.colors.purplelight
    },
    imageList: {
      fullScreen: '/images/files_gradient.svg',
      responsive: '/images/filebg.svg',
      bgImage: '/images/hoverfile.svg'
    }
  },
  Yellow: {
    colorList: {
      bgColor: 'rgba(23, 21, 0, 0.8)',
      borderBottomColor: '#958602',
      fontColor: '#F3F3F2',
      buttonColor: '#F3DA1A',
      primaryColor: '#F3DA1A',
      lineColor: '#FDFBEC',
      lightColor: '#FDFBEC',
      buttontextColor: theme.colors.yellowdark,
      borderColor: theme.colors.yellowmidlight,
      buttonBgColor: theme.colors.yellow,
      buttonFontColor: theme.colors.yellowdark,
      dark: theme.colors.yellowdark,
      light: theme.colors.yellowlight
    },
    imageList: {
      fullScreen: '/images/forms_gradient.svg',
      responsive: '/images/formbg.svg',
      bgImage: '/images/hoverform.svg'
    }
  },
  Orange: {
    colorList: {
      bgColor: 'rgba(28, 12, 0, 0.8)',
      borderBottomColor: '#CF650D',
      fontColor: '#F3F3F2',
      buttonColor: '#FD8C2E',
      primaryColor: '#FD8C2E',
      lineColor: '#FFEDDE',
      lightColor: '#FFEDDE',
      borderColor: theme.colors.orangemidlight,
      buttonBgColor: theme.colors.orangeprimary,
      buttonFontColor: theme.colors.whiteColor,
      dark: theme.colors.orangedark,
      light: theme.colors.orangelight
    },
    imageList: {
      fullScreen: '/images/helpdesk_gradient.svg',
      responsive: '/images/helpbg.svg',
      bgImage: '/images/hoverbase.svg'
    }
  },
  Magenta: {
    colorList: {
      bgColor: 'rgba(39, 0, 10, 0.8)',
      borderBottomColor: '#B8294B',
      fontColor: '#F3F3F2',
      buttonColor: '#F35B80',
      primaryColor: '#F35B80',
      lineColor: '#FFEFF3',
      lightColor: '#FFEFF3',
      borderColor: theme.colors.magentamidlight,
      buttonBgColor: theme.colors.magenta,
      buttonFontColor: theme.colors.whiteColor,
      dark: theme.colors.magentadark,
      light: theme.colors.magentalight
    },
    imageList: {
      fullScreen: '/images/GradiantMagenta.svg',
      responsive: '/images/GradiantMagentaResponsive.svg',
      bgImage: '/images/pinkBg.svg'
    }
  },
  Other: {
    colorList: {
      bgColor: 'rgba(255, 255, 253, 0.8)',
      borderBottomColor: '#CCCCD0',
      fontColor: '#131313',
      buttonColor: '#000000',
      primaryColor: '#09AA6C',
      lineColor: '#00160E'
    },
    imageList: { fullScreen: '/images/casestudies_gradient.svg', responsive: '/images/casestudiesbg.svg' }
  },
  Enterprice: {
    colorList: {
      bgColor: 'rgba(0, 22, 14, 0.8)',
      borderBottomColor: '#003F27',
      fontColor: '#E3FFEE',
      buttonColor: '#003F27',
      primaryColor: '#09AA6C',
      lineColor: '#E3FFEE'
    }
  }
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
  DATA_INTEGRATION: 'Data Integration',
  CLIENT: 'Client',
  INTERNAL: 'Internal'
};

export const BLOG_TAG_SORTED_LIST = ['announcements', 'inside-copilot', 'guides'];
export const UNIVERSITY_VIDEO_CATEGORY = [
  'Get Started',
  'Copilot Apps',
  'Partner Apps',
  'Advanced',
  'Industry Courses',
  'Quick Tips'
];

export const COOKIE_NAME = 'current-portal-session';

export const PER_API_LIMIT_FOR_AUTOMATION = 10;
export const PER_UPDATE_PAGE_POST = 10;
export const PER_API_LIMIT_FOR_GUIDE_SECTION = 5;
export const PER_API_LIMIT_FOR_FAQ_SECTION = 20;
export const INDUSTRY_ARRAY = [
  'accounting_and_bookkeeping',
  'consulting',
  'design',
  'ecommerce',
  'finance',
  'healthcare',
  'marketing',
  'real_estate'
];

export const BOOK_DEMO_CONTENT_TYPE = {
  COMPANY_SIZE_CRITERIA: 'companySizeCriteria',
  COMPANY_SIZE: 'CompanySize',
  INDUSTRY_CRITERIA: 'IndustryCriteria',
  INDUSTRY: 'Industry',
  FIND_US: 'FindUs'
};

export const CONTENTFUL_API_TAG = {
  APP: 'app',
  AUTOMATION: 'automation',
  CASESTUDY: 'casestudy',
  COMMON_CONTENT: 'common-content',
  COMPARISON: 'comparison',
  FAQ: 'faq',
  FEATURES: 'features',
  GLOSSARY: 'glossary',
  GUIDE: 'guide',
  HOME: 'home',
  JOB: 'job',
  PARTNERSHIP: 'partnership',
  PRICING: 'pricing',
  SEO: 'seo',
  SITEMAP: 'sitemap',
  SOLUTION: 'solution',
  UNIVERSITY: 'university',
  WEEKLY_DEMO: 'weekly-demo',
  OTHER: 'other'
};

export const GUIDE_LINK_INFO = {
  link: '/guide',
  text: 'Copilot Guide'
};

export const HOME_CONTENT_ID = '1cPG7VsMO1XCahxAnz3rne';
export const HOME_HYBIRD_CONTENT_ID = '1w6IZ3ILFiLQAbCmjHQX6Q';
export const HOME_INTERNAL_CONTENT_ID = '2XZ0KqhzxydyrIOQtIi2rv';
export const HOME_CLIENT_CONTENT_ID = '58ZcfzgUaFZoKtfHcplGZE';
export const HOME_CLIENT_DARK_ID = '4v9rcyZvdqtmPqcGSZcpAW';
export const HOME_CLIENT_LIGHT_ID = '5Cx8ph9a63VN0oti4GzZFi';
export const FOOTER_CONTENT_ID = '3RHReFxS9ZP8NAfqPOwaxs';

export const FEATURES_MESSAG_ID = '3j6okJbvtbNtRAXhtQC869';
export const FEATURES_BILLING_ID = '2biTe250v3ZnEWb49koKtb';
export const FEATURES_FILES_ID = '6glhfdfv9r7EMxEcyF3dQk';
export const FEATURES_FORMS_ID = '660hOhF7kjJEyZIdEeKZyr';
export const FEATURES_HELPDESK_ID = '1kQbm7K0BbqiTTTaAMsU4m';
export const FEATURES_CONTRACTS_ID = '3ZYoLSkQ5ZGS9wsqGnxAh2';

export const SOLUTION_ACCOUNTING_FIRMS_ID = '7nxVRnK4EKqk1szL17P9Kz';
export const SOLUTION_MARKETING_AGENCY_ID = '6UVZmBKVKmPACUNLAYBn2s';
export const SOLUTION_STARTUP_ID = '2XEKSuKkBKBc5Tz9x1Z4Rc';

export const SITEMAP_CONTENT_ID = '6X6ow3AYgMrEC6uVcPTEmX';
export const TERMS_OF_SERVICE_ID = '4wBMUcC7Q60jpsCLQoJkpE';
export const PRIVCY_POLICY_ID = '46bwfuedc2NMOHEIj0AThy';
export const TOP_BAR_CONTENT_ID = '4dKbgVv11cTh8aJaZ8VBP1';
export const CTA_CONTENT_ID = '3nv4WphdHbk3tIU88tLbbo';
export const BOOK_DEMO_ID = '2VEqFdR8kt9HMtIm3EeQhO';

export const HOME_SEO_ID = '2jwCsXd1zP2HEDJlQCIKUG';
export const APP_SEO_ID = '1YuaTMgNnzacoBjygKg4nk';
export const BRAND_SEO_ID = '5SUY6L51crllldyZnYR7aA';
export const UNIVERSITY_SEO_ID = '2hMkBVQBYcMCmHLQyxzo8o';
export const PRICING_SEO_ID = 'yof0gWCYzq1DaLbKJTFqb';
export const BOOK_DEMO_SEO_ID = '6eDXygV6YmyHfpyA88kyfp';
export const SITEMAP_SEO_ID = '7iY7qo4zZ7Xqq59OjCPIGa';
export const REFERRAL_SEO_ID = '79HJSAQBRSRNr1hhwkiRVo';
export const PRIVACY_POLICY_SEO_ID = '7iilnHUwBUwRiOvWxzXLLL';
export const TERMS_OF_SERVICE_SEO_ID = '3J02XDQyE4K0CpkCTUzdlO';
export const BLOG_SEO_ID = '5uevyUUR3vsf0TtqwOBrXb';
export const UPDATES_SEO_ID = '1qZerw40iK099KKnfz5Mv7';
export const COMPARISON_SEO_ID = '3twHO4lBpRkH68Lh1ihdRy';
export const CUSTOMER_SEO_ID = '7b7osYERYHHeUuZ8rZk9CA';
export const AUTOMATION_SEO_ID = '2S0c1CDc7mUs5wFY6yqpL3';

export const PARTNERSHIP_ID = '1qsEfH5A3RlGv7dac0uKZD';
export const AUTOMATION_ID = '3tQZ0zurolpvj9N43yXCIF';
export const APP_PAGE_ID = 'zHpvQW60FYupSGIasksht';
export const WEEKLY_DEMO_PAGE_ID = '6yTkSs6vPA4UtptzHbvw3r';
export const PRODUCT_DEMO_PAGE_ID = '2qbT95AIpVDChNTKj0PnfY';
export const PRICING_PAGE_ID = '1lSCkgpg3oXPp3kuxEJwfg';
export const GLOSSARY_PAGE_ID = '59RJugqUUkgTppwv6aoA9I';
export const GUIDE_PAGE_ID = '21aIyPkZ2efko1hJU4Qeep';
export const JOB_PAGE_ID = '7kgu8KP3AV2FgbwhCGz0sB';
export const BOOK_DEMO_THANK_YOU_ID = '45qbrJ6ILTiwkuWz92S0OX';
/*
Regex varibles
*/
export const EXTRACT_H2_TAG_FROM_HTML_REGEX = /(?:<h2 id\=\s*)\S.*?(?=\s*<\/h2|$)/gs;
export const EXTRACT_CODE_TAG_FROM_HTML_REGEX = /(<pre><code[^>]*>.*?<\/code><\/pre>)/gs;
export const EXTRACT_LEADING_DIGIT_REGEX = /^[0-9]./;
export const CURRENT_DOMAIN = 'https://www.copilot.com';
