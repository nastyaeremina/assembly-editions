import React from 'react';
import Link from 'next/link';
import SVGComponent from '../../../public/images/svg/SVGComponent';
import { FooterSocialItem, FooterSocialList } from './styles';

/**
 * SocialMediaListItems Component
 * 
 * Renders a list of social media links with appropriate icons and accessibility labels.
 * Uses a switch case to map social media platform names to their corresponding icons.
 * 
 * @param {Object} props - Component props
 * @param {Array} props.socialMediaLinks - Array of social media link objects
 * @param {string} props.socialMediaLinks[].name - Name of the social media platform (e.g., 'Twitter', 'X', 'LinkedIn')
 * @param {string} props.socialMediaLinks[].link - URL of the social media profile
 * @returns {JSX.Element} - Rendered social media links list
 * 
 * @example
 * const socialMediaLinks = [
 *   { name: 'Twitter', link: 'https://x.com/copilotplatform' },
 *   { name: 'LinkedIn', link: 'https://www.linkedin.com/company/copilotplatforms' }
 * ];
 * <SocialMediaListItems socialMediaLinks={socialMediaLinks} />
 */
function SocialMediaListItems({ socialMediaLinks = [] }) {
  /**
   * Maps social media platform names to their corresponding icons and accessibility labels.
   * Supports case-insensitive matching and handles variations like "Twitter" and "X".
   * 
   * @param {string} name - The name of the social media platform
   * @returns {Object} - Object containing icon name and aria-label
   * @returns {string} returns.icon - The SVG icon name to use
   * @returns {string} returns.ariaLabel - The accessibility label for screen readers
   * 
   * @example
   * getSocialMediaIcon('Twitter') // Returns: { icon: 'x-logo-gray', ariaLabel: 'Twitter' }
   * getSocialMediaIcon('X') // Returns: { icon: 'x-logo-gray', ariaLabel: 'X' }
   */
  const getSocialMediaIcon = (name) => {
    // Normalize the name to lowercase for consistent matching
    const normalizedName = name.toLowerCase();
    
    switch (normalizedName) {
      case 'twitter':
      case 'x':
        return {
          icon: 'x-logo-gray',
          ariaLabel: name // Use original name (Twitter or X)
        };
      case 'linkedin':
        return {
          icon: 'linkedin-logo-gray',
          ariaLabel: name // Use original name (LinkedIn)
        };
      case 'instagram':
        return {
          icon: 'instagram-logo-gray',
          ariaLabel: name // Use original name (Instagram)
        };
      case 'youtube':
        return {
          icon: 'you-tube-logo-gray',
          ariaLabel: name // Use original name (YouTube)
        };
      case 'facebook':
        return {
          icon: 'facebook-logo-gray',
          ariaLabel: name // Use original name (Facebook)
        };
      default:
        // Fallback for any unrecognized social media platform
        return {
          icon: 'link-icon-gray',
          ariaLabel: name // Use original name for any other platform
        };
    }
  };

  // Render the social media links list
  return (
    <FooterSocialList>
      {socialMediaLinks.map((socialMedia, index) => {
        // Get the appropriate icon and aria-label for this social media platform
        const { icon, ariaLabel } = getSocialMediaIcon(socialMedia.name);
        
        return (
          <Link 
            key={`${socialMedia.name}-${index}`} 
            href={socialMedia.link || '#'} 
            aria-label={ariaLabel}
          >
            <FooterSocialItem>
              <SVGComponent 
                name={icon} 
                width='24' 
                height='24' 
                viewBox='0 0 24 24' 
              />
            </FooterSocialItem>
          </Link>
        );
      })}
    </FooterSocialList>
  );
}

export default SocialMediaListItems;
