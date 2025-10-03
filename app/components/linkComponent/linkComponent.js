'use client';
import React from 'react';
import { Icon, LinkSection } from './style';
import SVGComponent from '../../../public/images/svg/SVGComponent';
import { isEmpty } from '../../helpers/helpers';
import { LinkSize, LinkTone } from '../../constants/constant';

/**
 * LinkComponent for displaying a styled link with optional icon.
 *
 * @param {Object} props - Component props.
 * @param {string} props.title - The text to be displayed inside the link.
 * @param {string} props.linkHref - The URL for the link.
 * @param {SectionTone} [props.tone=LinkTone.LIGHT] - The visual tone of the link (e.g., light or dark).
 * @param {string|number} [props.size] - The size variant of the link (if styling supports different sizes).
 * @param {boolean} [props.isIcon=false] - Whether to display the arrow icon next to the link text.
 */

function LinkComponent({ title, linkHref, tone = LinkTone.BLACK, size = LinkSize.MEDIUM, isIcon }) {
  return (
    (!isEmpty(linkHref) || !isEmpty(title)) && (
      <LinkSection href={linkHref} tone={tone} size={size}>
        {title}
        {isIcon && (
          <Icon size={size}>
            <SVGComponent name='hover-arrow-icon' width='18' height='16' viewBox='0 0 16 16' />
          </Icon>
        )}
      </LinkSection>
    )
  );
}

export default LinkComponent;
