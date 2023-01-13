import { Container } from '../../styles/commonStyles';
import TabView from '../tab/tab';
import { ContentMain, TopFunctionWrap } from './styles';

export default function Content() {
  return (
    <ContentMain>
      <Container>
        <TopFunctionWrap>
          <h3>
            Powerful out-of-the box functionality<span>,</span>
            <br />
            ready to go<span>.</span>
          </h3>
          <p>
            Provide clients a uniform experience with on-brand design, combined in-product notifications, and consistent
            email notifications. And with modularity built-in, start with just one App, and add more when the time is
            right.
          </p>
        </TopFunctionWrap>
        <div>
          <TabView />
        </div>
      </Container>
    </ContentMain>
  );
}
