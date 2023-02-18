import { useMemo } from 'react';
import { textSeprateandJoinWithSpecialChar } from '../../helpers/helpers';
import { Container } from '../../styles/commonStyles';
import TabView from '../tab/tab';
import { ContentMain, TopFunctionWrap } from './styles';

export default function Content({ title, description }) {
  const titleSplitList = title?.split(',');
  const seprateWithDotList = titleSplitList?.join(`<span>,</span>`)?.split('.');
  const finalTitle = seprateWithDotList?.join(`<span>.</span>`);

  return (
    <ContentMain>
      <Container>
        <TopFunctionWrap>
          <h2>
            <div dangerouslySetInnerHTML={{ __html: finalTitle }} />
          </h2>
          <p>{description}</p>
        </TopFunctionWrap>
        <div>
          <TabView />
        </div>
      </Container>
    </ContentMain>
  );
}
