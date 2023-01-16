import { useMemo } from 'react';
import { textSeprateandJoinWithSpecialChar } from '../../helpers/helpers';
import { Container } from '../../styles/commonStyles';
import TabView from '../tab/tab';
import { ContentMain, TopFunctionWrap } from './styles';

export default function Content({ title, description }) {
  const titleSplitList = title?.split(',');

  const renderHeaderView = useMemo(() => {
    const lastIndex = titleSplitList?.length - 1;
    return titleSplitList?.map((item, index) => {
      return (
        <>
          {item}
          {index !== lastIndex && <span>,</span>}
        </>
      );
    });
  }, [titleSplitList]);

  return (
    <ContentMain>
      <Container>
        <TopFunctionWrap>
          <h3>
            {renderHeaderView}
            <span>.</span>
          </h3>
          <p>{description}</p>
        </TopFunctionWrap>
        <div>
          <TabView />
        </div>
      </Container>
    </ContentMain>
  );
}
