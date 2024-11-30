import React from 'react';
import SVGComponent from '../../../public/images/svg/SVGComponent';
import { NAVBAR_COLOR_LIST } from '../../constants/constant';
import { isEmpty } from '../../helpers/helpers';
import { SpanLink, MobileText, Dropdown, ResourcesSubMenuDiv } from './styles';
import FeatureSubMenu from './featuresubmenu';

function ResponsiveDropdown({ onClick, title, className, dropDownClass, mobile, subSectionData, footerData }) {
  const colorList = NAVBAR_COLOR_LIST[0];

  const totalHeight = subSectionData.reduce((acc, item) => {
    return acc + (item.Description ? 64 : 47);
  }, 0);
  return (
    <>
      {isEmpty(title) ? (
        <FeatureSubMenu data={subSectionData} mobile={mobile} isWithOutHeading={true} iconSize={20} />
      ) : (
        <>
          <SpanLink textColor={colorList?.fontColor} hoverColor={colorList?.primaryColor}>
            <MobileText onClick={onClick}>
              {title}
              <SVGComponent
                name='dropdown-icon'
                width='12'
                height='12'
                fill='none'
                viewBox='12'
                className={className}
              />
            </MobileText>
          </SpanLink>
          <Dropdown className={dropDownClass} style={{ height: totalHeight + (isEmpty(footerData) ? 0 : 45) }}>
            <FeatureSubMenu
              data={subSectionData}
              mobile={mobile}
              footerData={footerData}
              iconSize={title.toLowerCase() === 'apps' ? 32 : title.toLowerCase() === 'platforms' ? 32 : 20}
            />
          </Dropdown>
        </>
      )}
    </>
  );
}

export default ResponsiveDropdown;
