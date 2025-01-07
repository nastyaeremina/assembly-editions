import { useMemo } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { CopilotLogo } from '../navbar/styles';
import CopilotLogos from '../../../public/images/blacklogo.svg';
import SVGComponent from '../../../public/images/svg/SVGComponent';
import { isEmpty } from '../../helpers/helpers';
import { TableMainDiv, LeftSection, TitleSection, MainTabbleSection, MainTableSection } from './styles';
import Image from 'next/image';

export default function ComparisonTableView({ details, competitorLogo }) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        if (node.content && node.content[0]?.value) {
          const value = node.content[0]?.value;

          switch (value) {
            case 'true':
              return (
                <div className='icon-div'>
                  <SVGComponent name='check-mark-icon' width='20' height='20' viewBox='0 0 20 20' fill='none' />
                </div>
              );
            case '[copilotLogo]':
              return (
                <div className='icon-div'>
                  <CopilotLogo alt='copilot logo' loading='lazy' width='111' height='24' src={CopilotLogos.src} />
                </div>
              );
            case '[compititorLogo]':
              return (
                <div className='icon-div'>
                  <CopilotLogo alt='copilot logo' loading='lazy' width='111' height='24' src={competitorLogo} />
                </div>
              );
            case 'false':
              return (
                <div className='icon-div'>
                  <SVGComponent name='close-check-icon' width='20' height='20' viewBox='0 0 20 20' fill='none' />
                </div>
              );
            default:
              return <p>{value}</p>;
          }
        }
      }
    }
  };

  const renderFeatureView = useMemo(() => {
    if (isEmpty(details)) return null;
    return details.map((item, index) => {
      const isTitleSectionHide = isEmpty(item.header) && isEmpty(item.description);

      return (
        <>
          <TableMainDiv>
            <LeftSection>
              {!isEmpty(item.icon?.url) && <Image src={item.icon?.url} alt='image' width={48} height={48} />}
              {!isEmpty(item.title) && <h4>{item.title}</h4>}
              {!isTitleSectionHide && (
                <TitleSection>
                  {!isEmpty(item.header) && <h3>{item.header}</h3>}
                  {!isEmpty(item.description) && <p>{item.description}</p>}
                </TitleSection>
              )}
            </LeftSection>
            <div className='table'>{documentToReactComponents(item.featureDetail?.json, options)}</div>
          </TableMainDiv>
        </>
      );
    });
  }, [details, options]);
  return <MainTableSection>{renderFeatureView}</MainTableSection>;
}
