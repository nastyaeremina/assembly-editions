import { COPILOT_COMMUNITY_LINK, COPILOT_SECURITY_LINK } from './externalLinks';

export const SupportSectionData = {
  items: [
    {
      title: 'Community',
      body: 'Meet our team and a community of businesses that run on Copilot.',
      linkText: 'Join community',
      linkUrl: COPILOT_COMMUNITY_LINK
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
      linkUrl: COPILOT_SECURITY_LINK
    },
    {
      title: 'Experts',
      body: 'Work with a certified Copilot Expert to build custom features, set up automations, and more.',
      linkText: 'Find an expert',
      linkUrl: '/experts'
    }
  ]
};

export const CTAData = {
  title: 'Where client experiences come together',
  description: 'Try Assembly free for 14 days, no credit card required.',
  primaryButtonLink: '/',
  primaryButtonText: 'Get Started',
  secondaryButtonLink: 'https://www.copilot.app/book-demo',
  secondaryButtonText: 'Book Demo'
};
