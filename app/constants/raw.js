import { EXTERNAL_LINK_KEYS } from './constant';
import slide2 from '../../public/images/slide2.png';

export function getSupportSectionData(externalLinks = {}) {
  return {
    items: [
      {
        title: 'Community',
        body: 'Meet our team and a community of businesses that run on Assembly.',
        linkText: 'Join community',
        linkUrl: externalLinks?.[EXTERNAL_LINK_KEYS.CommunityForumLink] || '#'
      },
      {
        title: 'Guide',
        body: 'Read our comprehensive guide about how to get started and implement best practices.',
        linkText: 'Read guide',
        linkUrl: '/guide'
      },
      {
        title: 'Security',
        body: 'Review our security practices to learn more about our commitment to best-in-class security.',
        linkText: 'Open security center',
        linkUrl: externalLinks?.[EXTERNAL_LINK_KEYS.SecurityLink] || '#'
      },
      {
        title: 'Experts',
        body: 'Work with a certified Assembly Expert to build custom features, set up automations, and more.',
        linkText: 'Find an expert',
        linkUrl: '/experts'
      }
    ]
  };
}

export const CTAData = {
  title: 'Where client experiences come together',
  description: 'Try Assembly free for 14 days, no credit card required.',
  primaryButtonLink: '/',
  primaryButtonText: 'Get Started',
  secondaryButtonLink: 'https://www.assembly.com/book-demo',
  secondaryButtonText: 'Book Demo'
};

export const AuthorPagHeroSection = {
  authorImage: slide2,
  authorName: 'Marlon Misra',
  designation: 'Co-founder & CEO, Assembly'
};

export const CustomerTableSectionData = {
  title: 'From clutter to <br/> client-favorite',
  description:
    'Delight clients with a modern portal to connect, pay, and share files — all in one place.Delight clients with a modern portal to connect, pay, and share files — all in one place.',
  designations: ['Marketing', 'Retail', 'Finance', 'Technology', 'Healthcare', 'Education', 'Real Estate']
};
