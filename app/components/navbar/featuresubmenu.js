'use client';

import Image from 'next/image';
import { useMemo } from 'react';
import { isEmpty } from '../../helpers/helpers';
import { MobileListLi, MenuWrap, LeftImg, RightText, MobileSectionTitle, MobileSectionList, Section } from './styles';
import HighlightSection from './highlighSection';

export default function FeatureSubMenu({ data }) {
  const renderFeatureView = useMemo(() => {
    // Filter out sections with title 'footer'
    const filteredData = data?.filter((section) => section.title?.toLowerCase() !== 'footer');

    return (
      <>
        {filteredData?.map((section, sectionIndex) => {
          const isHighlightSection = section.title.toLowerCase() === 'highlight';
          return (
            <Section key={`section_${sectionIndex}`}>
              {!isEmpty(section.title) && !isHighlightSection && (
                <MobileSectionTitle>{section.title}</MobileSectionTitle>
              )}
              <MobileSectionList>
                {section.items?.map((item, itemIndex) => {
                  return isHighlightSection ? (
                    <HighlightSection
                      key={`highlight_${itemIndex}`}
                      href={item.Link}
                      title={item.Title}
                      description={item.Description}
                      image={item.Image}
                    />
                  ) : (
                    <MobileListLi key={`feature_navbar_index_${sectionIndex}_${itemIndex}`}>
                      <MenuWrap href={item.Link}>
                        {item.Icon && (
                          <LeftImg isSmallImage={isEmpty(item?.Description)}>
                            <Image
                              src={item?.Icon}
                              alt='icon'
                              width={!isEmpty(item?.Description) ? 18 : 14}
                              height={!isEmpty(item?.Description) ? 18 : 14}
                            />
                          </LeftImg>
                        )}
                        <RightText>
                          <span className='title'>{item?.Title}</span>
                          {!isEmpty(item?.Description) && <span>{item?.Description}</span>}
                        </RightText>
                      </MenuWrap>
                    </MobileListLi>
                  );
                })}
              </MobileSectionList>
            </Section>
          );
        })}
      </>
    );
  }, [data]);
  return <>{renderFeatureView}</>;
}
