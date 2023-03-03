import Image from 'next/image';
import { useCallback, useMemo, useState } from 'react';
import { CopilotLogo } from '../navbar/styles';
import checkmark from '../../public/images/Check-mark.svg';
import cancelmark from '../../public/images/cancelmark.svg';
import CopilotLogos from '../../public/images/blacklogo.svg';
import { isEmpty } from '../../helpers/helpers';
import {
  ComparisonHide,
  Comparisonname,
  ComparisonTable,
  Comparisontabledata,
  Details,
  Dropdownbox,
  Headingpart,
  MobileViewTable,
  TableDropdown
} from './styles';

export default function ComparisonTableView({ data, src, slug }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentCompititor, setCurrentCompititor] = useState(data[0]);

  const onclick = () => {
    setIsOpen(!isOpen);
  };
  const onClickCompetitor = useCallback((item) => {
    setCurrentCompititor(item);
    setIsOpen(false);
  }, []);

  const renderCompitiorList = useMemo(() => {
    return data?.map((item, index) => (
      <Comparisonname
        isActive={currentCompititor?.compititorName === item?.compititorName}
        key={`competitor_index_${index}`}
        onClick={() => onClickCompetitor(data[index])}>
        {item?.compititorName}
      </Comparisonname>
    ));
  }, [currentCompititor?.compititorName, data, onClickCompetitor]);

  const renderTableData = useMemo(() => {
    return currentCompititor?.comparisonTableCollection?.items?.map((item, index) => {
      return (
        <tr key={`g2comparisonrow_${index}`}>
          <td colSpan={3} className='leftside'>
            {item?.name}
          </td>
          <td>
            {item?.copilotValue?.toLowerCase() === 'yes' ? (
              <Image src={checkmark} alt='check-mark' />
            ) : item?.copilotValue?.toLowerCase() === 'no' ? (
              ''
            ) : (
              item?.copilotValue
            )}
          </td>
          <td>
            {item?.partnerValue?.toLowerCase() === 'yes' ? (
              <Image src={checkmark} alt='check-mark' />
            ) : item?.partnerValue?.toLowerCase() === 'no' ? (
              ''
            ) : (
              item?.partnerValue
            )}
          </td>
        </tr>
      );
    });
  }, [currentCompititor?.comparisonTableCollection?.items]);

  const renderTableContentMobileView = useCallback(
    (isCopilot = false) => {
      if (isEmpty(currentCompititor?.comparisonTableCollection?.items)) return null;
      return currentCompititor?.comparisonTableCollection?.items?.map((item, index) => {
        const value = isCopilot ? item?.copilotValue : item?.partnerValue;
        const isUpdateTilte = value?.toLowerCase() !== 'yes' && value?.toLowerCase() !== 'no';

        return (
          <Details key={`g2comparisonrow_${index}`}>
            <Image
              src={isEmpty(value) || value?.toLowerCase() === 'no' ? cancelmark : checkmark}
              alt='check-mark'
              className='mobilecheckmark'
            />
            <p>{isUpdateTilte && !isEmpty(value) ? `${value} ${item?.name}` : item?.name}</p>
          </Details>
        );
      });
    },
    [currentCompititor?.comparisonTableCollection?.items]
  );
  return (
    <>
      <ComparisonTable>
        <h2>Compare client portal providers</h2>
        <p>
          Copilot stands out from all its competitors by offering a complete technology stack, perfect for any use-case.
        </p>
        <table>
          <thead>
            <tr>
              <th colSpan={3} className='leftheader'></th>
              <th className='radius'>
                <CopilotLogo alt='copilot logo' loading='lazy' width='188' height='40' src={CopilotLogos.src} />
              </th>
              <th className='secondheading'>
                <TableDropdown onClick={onclick} isFocus={isOpen}>
                  <p>{currentCompititor?.compititorName}</p>
                  <Image
                    src='/images/dropdownarrow.svg'
                    alt='logo'
                    width={20}
                    height={20}
                    layout={'fixed'}
                    className='dropdownicon'
                  />
                </TableDropdown>
                {isOpen ? (
                  <Dropdownbox>
                    {renderCompitiorList}
                    {/* <Comparisonname>HoneyBook</Comparisonname>
                    <Comparisonname>Softr</Comparisonname>
                    <Comparisonname>MOXO</Comparisonname>
                    <Comparisonname>Clientportal</Comparisonname>
                    <Comparisonname>Clinked</Comparisonname> */}
                  </Dropdownbox>
                ) : (
                  ''
                )}
              </th>
            </tr>
          </thead>
          <tbody>{renderTableData}</tbody>
        </table>
        <MobileViewTable>
          <ComparisonHide>
            <Headingpart>
              <CopilotLogo alt='copilot logo' loading='lazy' width='188' height='40' src={CopilotLogos.src} />
            </Headingpart>
            <Comparisontabledata>{renderTableContentMobileView(true)}</Comparisontabledata>
          </ComparisonHide>
          <ComparisonHide className='mobilesecondtable'>
            <Headingpart>
              {/* <h2>{details?.compititorName}</h2> */}
              <TableDropdown onClick={onclick}>
                <p>{currentCompititor?.compititorName}</p>
                <Image
                  src='/images/dropdownarrow.svg'
                  alt='logo'
                  width={20}
                  height={20}
                  layout={'fixed'}
                  className='dropdownicon'
                />
              </TableDropdown>
              {isOpen ? <Dropdownbox>{renderCompitiorList}</Dropdownbox> : ''}
            </Headingpart>
            <Comparisontabledata>{renderTableContentMobileView()}</Comparisontabledata>
          </ComparisonHide>
        </MobileViewTable>
      </ComparisonTable>
    </>
  );
}
