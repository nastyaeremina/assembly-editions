'use client';
import { useMemo, useLayoutEffect } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { AssemblyLogo } from '../navbar/styles';
import SVGComponent from '../../../public/images/svg/SVGComponent';
import { isEmpty } from '../../helpers/helpers';
import { TableMainDiv, LeftSection, TitleSection, MainTableSection, Tag } from './styles';

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
                  <SVGComponent
                    name='assembly-big-logo'
                    width='130'
                    height='24'
                    viewBox='0 0 200 38'
                    className='logo-icon'
                  />
                </div>
              );
            case '[compititorLogo]':
              return (
                <div className='icon-div'>
                  <AssemblyLogo alt='assembly logo' loading='lazy' width='111' height='24' src={competitorLogo} />
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
        <TableMainDiv>
          <LeftSection>
            {!isEmpty(item.title) && <Tag>{item.title}</Tag>}
            {!isTitleSectionHide && (
              <TitleSection>
                {!isEmpty(item.header) && <h3>{item.header}</h3>}
                {!isEmpty(item.description) && <p>{item.description}</p>}
              </TitleSection>
            )}
          </LeftSection>
          <div className='table'>{documentToReactComponents(item.featureDetail?.json, options)}</div>
        </TableMainDiv>
      );
    });
  }, [details, options]);

  // for gradient set in table column
  useLayoutEffect(() => {
    const applyGradientVars = () => {
      const tables = document.querySelectorAll('.table table');
      tables.forEach((table) => {
        try {
          const firstRow = table.querySelector('tr');
          if (!firstRow) return;
          const targetCell = firstRow.querySelector('th:nth-child(4), td:nth-child(4)');
          if (!targetCell) return;

          // Use offsetLeft/offsetWidth to be stable across layouts and zoom
          const leftPx = targetCell.offsetLeft;
          const widthPx = targetCell.offsetWidth;

          // Nudge by -1px to avoid bleeding over borders
          const left = `${Math.max(0, leftPx)}px`;
          const width = `${Math.max(0, widthPx)}px`;
          table.style.setProperty('--grad-left', left);
          table.style.setProperty('--grad-width', width);
        } catch (_) {}
      });
    };

    applyGradientVars();
    window.addEventListener('resize', applyGradientVars);
    return () => window.removeEventListener('resize', applyGradientVars);
  }, [details]);
  return <MainTableSection>{renderFeatureView}</MainTableSection>;
}
