import Image from 'next/image';
import { useCallback, useMemo } from 'react';
import { isEmpty } from '../../helpers/helpers';
import { QuoteLine } from '../quote/styles';
import { Container } from '../../styles/commonStyles';
import { ToolMain, ModuleSection, ModuleWrap } from './styles';

export default function Tools({ moduleColor, data }) {
  const classNameList = useCallback((index) => {
    switch (index) {
      default:
        return '';
    }
  }, []);
  const toolsListView = useMemo(() => {
    if (isEmpty(data)) return null;
    return data?.map((item, index) => {
      const className = classNameList(index);
      if (isEmpty(item)) return null;
      return (
        <ModuleWrap key={`toolslits_index_${index}`} className={className}>
          {item?.image?.url && <Image src={item?.image?.url} alt='red-icon' width={44} height={44} layout={'fixed'} />}
          <h4>{item?.title}</h4>
          <p>{item?.description}</p>
        </ModuleWrap>
      );
    });
  }, [classNameList, data]);

  return (
    <ToolMain moduleColor={moduleColor}>
      <Container>
        <h3>
          Give your team all the tools it needs for invoicing<span>,</span> subscriptions<span>,</span> and more
        </h3>
        <ModuleSection>
          {toolsListView}
          <QuoteLine>
            <Image src='/images/line.svg' alt='red-icon' width={1} height={100} layout={'fixed'} />
          </QuoteLine>
        </ModuleSection>
      </Container>
    </ToolMain>
  );
}
